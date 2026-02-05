const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bundles = [
    {
        contentKey: 'bundles_item_1',
        title: 'Pre-Primary School Portfolio',
        desc: 'Early childhood ecosystem focusing on sensory development, motor skill refinement, and joyful discovery.',
        grade: 'Pre-Mont to Mont-II',
        focus: 'Sensory Mastery',
        components: [
            { title: 'Phonics & Literacy', description: 'Interactive alphabet stories and sound recognition modules.' },
            { title: 'Numeracy Blocks', description: 'Tactile counting guides and shape recognition playbooks.' },
            { title: 'Sensory Arts', description: 'Texture-based creativity books for fine motor skills.' },
            { title: 'Logic Patterning', description: 'Early sequence understanding and problem-solving cards.' }
        ]
    },
    {
        contentKey: 'bundles_item_2',
        title: 'Primary School Portfolio',
        desc: 'Integrated multi-volume workbooks and visual memory mapping tools designed for neuro-cognitive development.',
        grade: 'Grades 1-5',
        focus: 'Foundation for Success',
        components: [
            { title: 'Core English Vol 1-5', description: 'Comprehensive grammar, comprehension, and creative writing.' },
            { title: 'Mathematics Mastery', description: 'Visual math concepts with real-world application exercises.' },
            { title: 'EVS Explorers', description: 'Environmental science through observation and experiments.' },
            { title: 'French Beginners', description: 'Introduction to global languages with phonetic guides.' }
        ]
    },
    {
        contentKey: 'bundles_item_3',
        title: 'Middle School Portfolio',
        desc: 'Advanced science and logic modules with case-study methods for critical analysis and systemic thinking.',
        grade: 'Grades 6-8',
        focus: 'Deep Conceptual Mastery',
        components: [
            { title: 'Advanced Literature', description: 'Critical analysis of classic and contemporary texts.' },
            { title: 'Algebra & Geometry', description: 'Deep dive into abstract mathematical concepts.' },
            { title: 'Lab Science Integrated', description: 'Physics, Chemistry, and Biology combined with lab manuals.' },
            { title: 'History & Civics', description: 'Understanding global systems and historical cause-effect.' }
        ]
    }
];

async function main() {
    console.log('🌱 Seeding CMS Bundles content...');

    for (const bundle of bundles) {
        // Seed main bundle info
        await prisma.siteContent.upsert({
            where: { key: `${bundle.contentKey}_title` },
            update: {},
            create: {
                key: `${bundle.contentKey}_title`,
                content: bundle.title
            }
        });
        await prisma.siteContent.upsert({
            where: { key: `${bundle.contentKey}_desc` },
            update: {},
            create: {
                key: `${bundle.contentKey}_desc`,
                content: bundle.desc
            }
        });
        await prisma.siteContent.upsert({
            where: { key: `${bundle.contentKey}_grade` },
            update: {},
            create: {
                key: `${bundle.contentKey}_grade`,
                content: bundle.grade
            }
        });
        await prisma.siteContent.upsert({
            where: { key: `${bundle.contentKey}_focus` },
            update: {},
            create: {
                key: `${bundle.contentKey}_focus`,
                content: bundle.focus
            }
        });

        // Seed Components
        for (let i = 0; i < bundle.components.length; i++) {
            const comp = bundle.components[i];
            const compKey = `${bundle.contentKey}_comp_${i + 1}`;

            await prisma.siteContent.upsert({
                where: { key: `${compKey}_title` },
                update: {},
                create: {
                    key: `${compKey}_title`,
                    content: comp.title
                }
            });

            await prisma.siteContent.upsert({
                where: { key: `${compKey}_desc` },
                update: {},
                create: {
                    key: `${compKey}_desc`,
                    content: comp.description
                }
            });
        }
    }

    console.log('✅ Bundles content seeded successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
