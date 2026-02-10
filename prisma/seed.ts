import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // Create admin user
    const password = await bcrypt.hash('password123', 10);
    const users = [
        { email: 'admin@miway.in', name: 'Admin User' },
        { email: 'officer@miway.in', name: 'MIWAY Officer' }
    ];

    for (const data of users) {
        await prisma.user.upsert({
            where: { email: data.email },
            update: {},
            create: {
                ...data,
                password,
                role: 'ADMIN',
            },
        });
    }

    console.log('Seed users created');

    // Seed CMS Content
    const contentData = [
        // Homepage
        { key: 'home_hero_title', content: 'Empowering Minds with\nInnovative Learning Resources' },
        { key: 'home_hero_subtitle', content: 'Research-backed curriculum bundles designed to inspire creativity, critical thinking, and lifelong learning.' },
        { key: 'home_bundles_title', content: 'Curriculum Bundles' },
        { key: 'home_bundles_subtitle', content: 'Comprehensive book kits for every grade level' },
        { key: 'home_about_title', content: 'Transforming Education Since 2024' },
        { key: 'home_about_text', content: 'MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning materials. We believe every student\'s learning journey is unique.' },
        { key: 'home_cta_title', content: 'Ready to Transform Your School?' },
        { key: 'home_cta_text', content: 'Partner with MIWAY to bring world-class educational resources to your classrooms.' },

        // About Page
        { key: 'about_mission_title', content: 'Our Mission' },
        { key: 'about_mission_text', content: 'Our mission is to transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth. We are dedicated to crafting inclusive learning experiences that resonate with every learner, making education meaningful and enjoyable.' },
        { key: 'about_vision_title', content: 'Our Vision' },
        { key: 'about_vision_text', content: 'Our vision is to redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity, sharpen critical thinking, and boost problem-solving skills. We strive to empower every learner to unlock their full potential, preparing them to thrive confidently in a rapidly changing world.' },
        { key: 'about_founder_name', content: 'Tr. J. Aravindhan' },
        { key: 'about_founder_title', content: 'Chief Mentor' },
        { key: 'about_founder_bio', content: 'Tr. J. Aravindhan, the visionary behind MIWAY Teaching Aids Pvt. Ltd., is a dedicated leader in the field of transformative education. With a strong foundation in neuroscience and pedagogy, he has committed his career to reimagining how students engage with learning. He has expertly integrated principles of Whole Brain Learning, Multiple Intelligences, and innovative educational strategies to enhance critical thinking, creativity, and personal growth in students.' },

        // Philosophy Page
        { key: 'philosophy_intro_title', content: 'Our Learning Philosophy' },
        { key: 'philosophy_intro_text', content: 'MIWAY\'s pedagogy is a synthesis of global best practices and neuroscience principles, designed to create a holistic and immersive learning environment.' },

        // Contact Page
        { key: 'contact_title', content: 'Get in Touch' },
        { key: 'contact_subtitle', content: 'We\'d love to hear from you. Reach out to discuss how MIWAY can enhance your school\'s curriculum.' },
    ];

    for (const data of contentData) {
        await prisma.siteContent.upsert({
            where: { key: data.key },
            update: { content: data.content },
            create: data,
        });
    }

    console.log('CMS content seeded successfully');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
