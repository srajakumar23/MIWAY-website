const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const contactContent = {
    // Hero
    'contact_hero_label': 'Consultation & Partnership',
    'contact_hero_title': 'Connect with <br /> <span class="gradient-text font-serif italic pr-4">MIWAY.</span>',
    'contact_hero_desc': 'Initiate a high-level academic partnership. Discuss your school\'s cognitive development goals with our specialist team.',

    // Contact Info Matrix
    'contact_info_label': 'Institutional Access',

    'contact_info_1_title': 'Headquarters',
    'contact_info_1_desc': '#88, Candappa Mudaliar Street,\nPuducherry - 605 001. India',

    'contact_info_2_title': 'Direct Contact',
    'contact_info_2_desc': '9025224871 | 9345917094',

    'contact_info_3_title': 'Digital Access',
    'contact_info_3_desc': 'www.miway.in\ninfo@miway.in',

    // Hours
    'contact_hours_title': 'Institutional Hours',
    'contact_hours_desc': 'Monday - Friday: 9:00 AM - 6:00 PM (GMT)',

    // Form
    'contact_form_title': 'Request Proposal',

    // Global Section
    'contact_global_title': 'A Global Partnership.',
    'contact_global_desc': 'Our team operate across all major education hubs, providing on-site deployment and strategic neuroscience consulting.'
};

async function main() {
    console.log('🌱 Seeding CMS Contact Page content...');

    for (const [key, value] of Object.entries(contactContent)) {
        await prisma.siteContent.upsert({
            where: { key },
            update: {
                content: value // Force update existing content
            },
            create: {
                key,
                content: value
            }
        });
    }

    console.log('✅ Contact content seeded successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
