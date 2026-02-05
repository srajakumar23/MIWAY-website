
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const content = [
    // --- HOME PAGE ---
    // --- HOME PAGE SLIDER ---
    { key: 'home_hero_slide_1_image', content: '/hero-neural.png' },
    { key: 'home_hero_slide_1_title', content: 'The Science of <br /> <span class="gradient-text font-serif italic pr-4">Learning.</span>' },
    { key: 'home_hero_slide_1_desc', content: 'We decode the cognitive architecture of the brain to build curriculum that feels like discovery.' },
    { key: 'home_hero_slide_1_cta', content: 'Explore Methodology' },

    { key: 'home_hero_slide_2_image', content: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop' },
    { key: 'home_hero_slide_2_title', content: 'Joyful <br /> <span class="gradient-text font-serif italic pr-4">Classrooms.</span>' },
    { key: 'home_hero_slide_2_desc', content: 'Transforming potential into mastery through sensory-rich, multiple-intelligence based education.' },
    { key: 'home_hero_slide_2_cta', content: 'See Our Schools' },

    { key: 'home_hero_slide_3_image', content: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop' },
    { key: 'home_hero_slide_3_title', content: 'Global <br /> <span class="gradient-text font-serif italic pr-4">Network.</span>' },
    { key: 'home_hero_slide_3_desc', content: 'Join an elite circle of 40+ schools partnering with MIWAY to define the future of pedagogy.' },
    { key: 'home_hero_slide_3_cta', content: 'Partner With Us' },

    { key: 'home_hero_label', content: 'Neuro-Scientific Pedagogy' },
    { key: 'home_hero_title', content: 'Revolutionizing Education through <br /> <span class="gradient-text font-serif italic pr-4">Multisensory Learning.</span>' },
    { key: 'home_hero_subtitle', content: 'MIWAY Teaching Aids Pvt. Ltd. pioneers the future of education with neuroscience-backed curricula, empowering schools to unlock every child\'s full cognitive potential.' },
    { key: 'home_features_label', content: 'The MIWAY Advantage' },
    { key: 'home_features_title', content: 'Pedagogical <br /><span class="font-serif italic text-primary">Pillars</span>' },
    { key: 'home_features_desc', content: 'We bridge the gap between academic theory and practical cognitive engagement.' },
    { key: 'home_method_1_title', content: 'Whole Brain Learning' },
    { key: 'home_method_1_desc', content: 'Activates both hemispheres of the brain for maximized retention through neuroscience-based activities.' },
    { key: 'home_method_2_title', content: 'Spiral Learning' },
    { key: 'home_method_2_desc', content: 'Reinforces concepts by revisiting them at increasing levels of complexity, ensuring deep mastery.' },
    { key: 'home_method_3_title', content: '21st Century Skills' },
    { key: 'home_method_3_desc', content: 'Cultivates critical thinking, creativity, and collaboration to prepare curious minds for the future.' },
    { key: 'home_about_title', content: 'Defining Learning Since 2024' },
    { key: 'home_about_text', content: 'MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning materials.' },
    { key: 'home_cta_title', content: 'Ready to Transform Your School?' },

    // --- ABOUT PAGE ---
    { key: 'about_hero_label', content: 'The MIWAY Story' },
    { key: 'about_hero_title', content: 'Defining the <br /> <span class="gradient-text font-serif italic pr-4">Future of Learning.</span>' },
    { key: 'about_hero_desc', content: 'MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning materials that foster creativity, critical thinking, and lifelong learning.' },
    { key: 'about_pedagogy_title', content: 'Holistic <br /> Excellence.' },
    { key: 'about_belief_title', content: 'Every student\'s journey is <span class="text-primary">unique.</span>' },
    { key: 'about_belief_desc', content: 'At MIWAY, we believe that education should be personalized to amplify distinct strengths. By engaging the whole brain and embracing multiple intelligences, we cultivate future-ready problem solvers equipped for an ever-evolving world.' },
    { key: 'about_mission_text', content: 'To transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth. We are dedicated to crafting inclusive learning experiences that resonate with every learner.' },
    { key: 'about_vision_text', content: 'To redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity, sharpen critical thinking, and boost problem-solving skills, preparing students to thrive confidently.' },
    { key: 'about_founder_name', content: 'Dr. J. Arawindhan' },
    { key: 'about_founder_role', content: 'Chief Mentor & Visionary' },
    { key: 'about_founder_bio', content: 'Dr. J. Arawindhan, the visionary behind <span class="text-primary font-bold italic">MIWAY Teaching Aids Pvt. Ltd.</span>, is a dedicated leader in transformative education. With a foundation in neuroscience, he has committed his career to reimagining student engagement.\n\n<p class="italic border-l-4 border-primary pl-8 text-slate-900 bg-primary/5 py-4 rounded-r-3xl">\n&quot;His mission is to make learning accessible, inclusive, and enjoyable, empowering students to realize their full potential in a rapidly changing world.&quot;\n</p>' },
    { key: 'about_what_we_do_label', content: 'What We Do' },
    { key: 'about_what_we_do_title', content: 'Designing for <br /> Intelligence.' },
    { key: 'about_what_we_do_desc', content: 'We design learner-centric materials incorporating <span class="font-bold text-primary italic">Bloom\'s Taxonomy, Six Thinking Hats, and Power Learning</span>. Our multilingual approach ensures deep inclusivity for all neural patterns.' },
    // "What We Do" Grid
    { key: 'about_strategies_title', content: 'Strategies' },
    { key: 'about_strategies_desc', content: 'Whole Brain Learning & Spiral Mastery.' },
    { key: 'about_teams_title', content: 'Our Teams' },
    { key: 'about_teams_desc', content: 'Neuroscientists & Curriculum Designers.' },
    { key: 'about_global_title', content: 'Global Reach' },
    { key: 'about_global_desc', content: 'Elite networks across tier 1 institutions.' },

    { key: 'about_brochure_label', content: 'Institutional Resource' },
    { key: 'about_brochure_title', content: 'Digital <br /><span class="text-primary">Manifesto.</span>' },
    { key: 'about_brochure_desc', content: 'Explore our complete pedagogical blueprint through the official MIWAY digital brochure.' },

    { key: 'about_cta_label', content: 'The Next Revolution' },
    { key: 'about_cta_title', content: 'Ready to <br /><span class="italic font-serif italic text-primary">Deploy?</span>' }, // Main CTA on About page ("Ready to Deploy/Partner with US" section at bottom) is actually duplicated or similar to Schools? Wait, page.tsx line 190 "Ready to Deploy?".
    // Wait, I seeded 'about_cta_title' as "Ready to Author the Future?" earlier. Let me correct.
    // Line 256 in About page says "Ready to Author the Future?".
    // Line 190 says "Ready to Deploy?".
    // Ah, there are TWO CTAs in About page? 
    // Line 251: Final CTA - The Invitation: "Ready to Author the Future?"
    // Line 186: Final CTA - High Impact. Wait... About page has TWO "Final CTA" comments?
    // Let me re-read About Page.
    // Line 186: "Final CTA - High Impact" -> "Ready to Deploy?"
    // Then Line 251: "Final CTA - The Invitation" -> "Ready to Author the Future?"
    // Actually, wait. I might be misreading the line numbers or sections.
    // Ah, line 186 is inside "What We Do" section?? 
    // No.
    // Let's seed both.
    { key: 'about_cta_1_title', content: 'Ready to <br /><span class="italic font-serif italic text-primary">Deploy?</span>' },
    { key: 'about_cta_2_title', content: 'Ready to Author <br /> the Future?' },
    { key: 'about_cta_2_desc', content: 'Join our network of progressive schools and empower students with world-class neuroscience tools.' },


    // --- PHILOSOPHY PAGE ---
    { key: 'philosophy_hero_label', content: 'Scientific Pedagogy' },
    { key: 'philosophy_hero_title', content: 'The MIWAY <br /> <span class="gradient-text font-serif italic pr-4">Framework.</span>' },
    { key: 'philosophy_hero_desc', content: 'A synthesis of global best practices and neural science. We don\'t just teach; we <span class="text-primary font-bold italic">architect</span> the pathway for human potential.' },
    { key: 'philosophy_quote', content: '&quot;Education is not the learning of facts, but the training of the mind to think.&quot;' },
    { key: 'philosophy_visual_label', content: 'Visual Journey' },
    { key: 'philosophy_visual_title', content: 'Framework in <br /> Action.' },
    // Philosophy Grid Items - I'll just seed titles/descs, icons/colors are hardcoded logic typically, but titles/desc should be editable.
    { key: 'philosophy_item_1_title', content: 'Spiral Learning' },
    { key: 'philosophy_item_1_desc', content: 'Revisiting core concepts with exponential complexity to ensure deep-rooted comprehension and progressive mastery.' },
    { key: 'philosophy_item_2_title', content: 'Seven Habits Integration' },
    { key: 'philosophy_item_2_desc', content: 'Empowering students via Stephen Covey’s framework—fostering proactivity, synergy, and interpersonal effectiveness.' },
    { key: 'philosophy_item_3_title', content: 'Neural Integration' },
    { key: 'philosophy_item_3_desc', content: 'Activating both analytical and creative hemispheres through neuro-scientific, multi-sensory learning experiences.' },
    { key: 'philosophy_item_4_title', content: 'Multiple Intelligences' },
    { key: 'philosophy_item_4_desc', content: 'Leveraging Gardner’s framework to engage linguistic, spatial, and logical capacities simultaneously.' },
    { key: 'philosophy_item_5_title', content: 'Bloom’s Taxonomy' },
    { key: 'philosophy_item_5_desc', content: 'A structured cognitive journey across six levels—from foundational recall to sophisticated creation.' },
    { key: 'philosophy_item_6_title', content: 'Six Thinking Hats' },
    { key: 'philosophy_item_6_desc', content: 'Edward de Bono’s methodology to solve complex problems through diverse, multi-perspective analysis.' },
    { key: 'philosophy_item_7_title', content: 'Whole Brain Mastery' },
    { key: 'philosophy_item_7_desc', content: 'Philosophical activation of multiple brain regions ensuring information retention and practical application.' },
    { key: 'philosophy_item_8_title', content: '21st Century Skills' },
    { key: 'philosophy_item_8_desc', content: 'Cultivating digital literacy, critical thinking, and global collaboration for the 22nd-century economy.' },
    { key: 'philosophy_item_9_title', content: 'Power Learning' },
    { key: 'philosophy_item_9_desc', content: 'Advanced mnemonics, visualization, and association techniques to maximize cognitive efficiency.' },

    { key: 'philosophy_cta_label', content: 'The Next Revolution' },
    { key: 'philosophy_cta_title', content: 'Ready to <br /><span class="italic font-serif italic text-primary">Deploy?</span>' },

    // --- SCHOOLS PAGE ---
    { key: 'schools_hero_label', content: 'Partner Ecosystem' },
    { key: 'schools_hero_title', content: 'Elite School <br /> <span class="gradient-text font-serif italic pr-4">Network.</span>' },
    { key: 'schools_hero_desc', content: 'Join India\'s most progressive educational institutions. We partner with leaders who aim for <span class="text-[#0088cc] font-bold underline decoration-2 underline-offset-8">global academic superiority</span> through neuroscience.' },

    { key: 'schools_value_label', content: 'The Value Proposition' },
    { key: 'schools_value_title', content: 'Engineered for <br /><span class="font-serif italic text-primary">Success</span>' },
    { key: 'schools_value_1_title', content: 'NEP 2024 Alignment' },
    { key: 'schools_value_1_desc', content: 'Fully ahead of the curve. Compliant with upcoming national benchmarks and pedagogical shifts.' },
    { key: 'schools_value_2_title', content: 'Faculty Empowerment' },
    { key: 'schools_value_2_desc', content: 'Intensive neuroscience workshops and certifications for elite educators.' },
    { key: 'schools_value_3_title', content: 'Intelligence Metrics' },
    { key: 'schools_value_3_desc', content: 'Real-time cognitive tracking across your entire student body using MIWAY diagnostics.' },

    { key: 'schools_stat_title', content: '50+' },
    { key: 'schools_stat_subtitle', content: 'Premier Institutions' },
    { key: 'schools_stat_desc', content: 'Join the growing network of high-performance schools as a <span class="text-white font-bold">MIWAY Partner Hub</span>.' },

    { key: 'schools_standard_1_title', content: 'Multilingual Learning' },
    { key: 'schools_standard_1_desc', content: 'Encouraging proficiency in multiple languages to enhance cognitive flexibility and global awareness.' },
    { key: 'schools_standard_2_title', content: 'WOW Level Execution' },
    { key: 'schools_standard_2_desc', content: 'Creating excitement through gamified learning and high-engagement interactive curricula.' },
    { key: 'schools_standard_3_title', content: 'Sensory Learning' },
    { key: 'schools_standard_3_desc', content: 'Integrating visual, auditory, kinesthetic, and tactile experiences for deep neural retention.' },

    { key: 'schools_support_label', content: 'Total Support' },
    { key: 'schools_support_title', content: 'The Ecosystem <br /><span class="font-serif italic text-primary">Deployment.</span>' },
    { key: 'schools_support_1_title', content: 'Regional Deployment' },
    { key: 'schools_support_1_desc', content: 'On-site training and resource setup by senior pedagogical experts.' },
    { key: 'schools_support_2_title', content: 'Strategic Audits' },
    { key: 'schools_support_2_desc', content: 'Quarterly review of academic and cognitive growth across the network.' },
    { key: 'schools_support_3_title', content: 'Family Integration' },
    { key: 'schools_support_3_desc', content: 'Custom orientations to align parents with the neurological journey.' },

    { key: 'schools_cta_title', content: 'Partner for <br /> the Future.' },
    { key: 'schools_cta_desc', content: 'Secure your institution\'s spot as a leader in neuroscience education. Request a comprehensive proposal today.' },

    // --- BUNDLES PAGE ---
    { key: 'bundles_hero_label', content: 'Curriculum Solutions' },
    { key: 'bundles_hero_title', content: 'Premium <br /> <span class="gradient-text font-serif italic text-primary">Portfolios.</span>' },
    { key: 'bundles_hero_desc', content: 'Engineered for high-engagement schools. Our curriculum bundles are complete ecosystems designed for the modern classroom.' },

    { key: 'bundles_item_1_image', content: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop' },
    { key: 'bundles_item_1_title', content: 'Pre-Primary School Portfolio' },
    { key: 'bundles_item_1_grade', content: 'Pre-Mont to Mont-II' },
    { key: 'bundles_item_1_focus', content: 'Sensory Mastery' },
    { key: 'bundles_item_1_desc', content: 'Early childhood ecosystem focusing on sensory development, motor skill refinement, and joyful discovery.' },

    { key: 'bundles_item_2_image', content: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop' },
    { key: 'bundles_item_2_title', content: 'Primary School Portfolio' },
    { key: 'bundles_item_2_grade', content: 'Grades 1-5' },
    { key: 'bundles_item_2_focus', content: 'Foundation for Success' },
    { key: 'bundles_item_2_desc', content: 'Integrated multi-volume workbooks and visual memory mapping tools designed for neuro-cognitive development.' },

    { key: 'bundles_item_3_image', content: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop' },
    { key: 'bundles_item_3_title', content: 'Middle School Portfolio' },
    { key: 'bundles_item_3_grade', content: 'Grades 6-8' },
    { key: 'bundles_item_3_focus', content: 'Deep Conceptual Mastery' },
    { key: 'bundles_item_3_desc', content: 'Advanced science and logic modules with case-study methods for critical analysis and systemic thinking.' },

    { key: 'bundles_components_label', content: 'Component Ecosystem' },
    { key: 'bundles_components_title', content: 'What\'s Inside <br /> Each Bundle.' },
    { key: 'bundles_comp_1_title', content: 'Core Volumes' },
    { key: 'bundles_comp_1_desc', content: 'Main curriculum textbooks designed with high-density visual memory mapping.' },
    { key: 'bundles_comp_2_title', content: 'Workbooks' },
    { key: 'bundles_comp_2_desc', content: 'Interactive practice modules for neuro-cognitive reinforcement.' },
    { key: 'bundles_comp_3_title', content: 'Assessments' },
    { key: 'bundles_comp_3_desc', content: 'Diagnostic tools to measure cognitive and academic mastery levels.' },
    { key: 'bundles_comp_4_title', content: 'Digital Assets' },
    { key: 'bundles_comp_4_desc', content: 'QR-enabled interactive content for multi-sensory engagement.' },

    { key: 'bundles_cta_label', content: 'Global Partnership' },
    { key: 'bundles_cta_title', content: 'Ready for the <br /> <span class="italic font-serif text-primary">Upgrade?</span>' },

    // --- PUBLISH PAGE ---
    { key: 'publish_hero_label', content: 'Partner with MIWAY' },
    { key: 'publish_hero_title', content: 'Publish Your <br /> <span class="gradient-text font-serif italic pr-4">Vision.</span>' },
    { key: 'publish_hero_desc', content: 'Join the elite circle of educators shaping the next generation of <span class="text-primary font-bold italic">neuroscience-based</span> learning.' },

    { key: 'publish_quality_label', content: 'Quality Standard' },
    { key: 'publish_quality_1_title', content: 'Innovative Pedagogy' },
    { key: 'publish_quality_1_desc', content: 'Creative approaches based on cognitive science.' },
    { key: 'publish_quality_2_title', content: 'Scientific Accuracy' },
    { key: 'publish_quality_2_desc', content: 'Rigorously researched and pedagogically sound.' },
    { key: 'publish_quality_3_title', content: 'High Engagement' },
    { key: 'publish_quality_3_desc', content: 'Content that sparks curiosity and interaction.' },

    { key: 'publish_process_label', content: 'The Journey' },
    { key: 'publish_process_title', content: 'The Collaborative <br /><span class="font-serif italic text-primary">Pipeline.</span>' },
    { key: 'publish_process_1_title', content: 'Concept Review' },
    { key: 'publish_process_1_desc', content: 'Initial academic review of your rough drafts.' },
    { key: 'publish_process_2_title', content: 'Peer Review' },
    { key: 'publish_process_2_desc', content: 'Expert feedback from our global review board.' },
    { key: 'publish_process_3_title', content: 'Visual Design' },
    { key: 'publish_process_3_desc', content: 'Text-to-visual transformation by specialists.' },
    { key: 'publish_process_4_title', content: 'Global Reach' },
    { key: 'publish_process_4_desc', content: 'Launch across elite school networks.' },

    { key: 'publish_cta_title', content: 'Author the <br /> Future.' },
    { key: 'publish_cta_desc', content: 'We provide the resources, the platform, and the global audience. <span class="text-primary font-bold">You provide the vision.</span>' },

    // --- CONTACT PAGE ---
    { key: 'contact_hero_label', content: 'Consultation & Partnership' },
    { key: 'contact_hero_title', content: 'Connect with <br /> <span class="gradient-text font-serif italic pr-4">MIWAY.</span>' },
    { key: 'contact_hero_desc', content: 'Initiate a high-level academic partnership. Discuss your school\'s cognitive development goals with our specialist team.' },
    { key: 'contact_address', content: '#88, Candappa Mudaliar Street,\nPuducherry - 605 001. India' },
    { key: 'contact_email', content: 'info@miway.in' },
    { key: 'contact_phone', content: '9025224871 | 9345917094' },
    { key: 'contact_hours', content: 'Monday - Friday: 9:00 AM - 6:00 PM' },
];

async function main() {
    console.log(`Start seeding ${content.length} content items...`);

    for (const item of content) {
        await prisma.siteContent.upsert({
            where: { key: item.key },
            update: { content: item.content },
            create: {
                key: item.key,
                content: item.content
            },
        });
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
