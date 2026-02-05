'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', {
            redirect: false,
            ...Object.fromEntries(formData)
        });
        redirect('/admin');
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function deleteBundle(id: string) {
    try {
        await prisma.bundle.delete({ where: { id } });
        revalidatePath('/admin/bundles');
    } catch (error) {
        console.error('Failed to delete bundle:', error);
        throw new Error('Failed to delete bundle.');
    }
}

export async function createBundle(formData: FormData) {
    const title = formData.get('title') as string;
    const grade = formData.get('grade') as string;
    const subjects = formData.get('subjects') as string; // Comma separated
    const features = formData.get('features') as string; // Line separated or something

    // Quick parse for demo
    const subjectList = JSON.stringify(subjects.split(',').map(s => s.trim()));
    const featureList = JSON.stringify(features.split('\n').map(f => f.trim()).filter(Boolean));

    await prisma.bundle.create({
        data: {
            title,
            grade,
            subjects: subjectList,
            features: featureList
        }
    });

    revalidatePath('/admin/bundles');
    redirect('/admin/bundles');
}

export async function submitEnquiry(formData: FormData) {
    const name = formData.get('name') as string;
    const school = formData.get('school') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    await prisma.enquiry.create({
        data: {
            name,
            school,
            email,
            phone,
            message,
        },
    });

    revalidatePath('/admin/enquiries');
}

// CMS Content Management Actions
export async function updateSiteContent(key: string, content: string) {
    try {
        await prisma.siteContent.upsert({
            where: { key },
            update: { content },
            create: { key, content }
        });

        // Revalidate all pages that might use this content
        const prefix = key.split('_')[0];
        revalidatePath(`/${prefix === 'home' ? '' : prefix}`);
        revalidatePath('/admin/content');

        return { success: true };
    } catch (error) {
        console.error('Error updating content:', error);
        return { success: false, error: 'Failed to update content' };
    }
}

export async function getAllSiteContent() {
    return await prisma.siteContent.findMany({
        orderBy: { key: 'asc' }
    });
}
