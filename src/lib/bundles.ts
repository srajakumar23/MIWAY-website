import { Rocket, Sparkles, Target, LucideIcon } from 'lucide-react';

export interface BundleComponent {
    title: string;
    description: string;
    image?: string;
}

export interface BundleDef {
    id: string;
    contentKey: string; // prefix for CMS content looking
    titleDefault: string;
    gradeDefault: string;
    focusDefault: string;
    descDefault: string;
    subjects: string[];
    color: string;
    accent: string;
    bg_accent: string;
    icon: LucideIcon;
    components: BundleComponent[];
}

export const bundles: BundleDef[] = [
    {
        id: 'pre-primary',
        contentKey: 'bundles_item_1',
        titleDefault: 'Pre-Primary School Portfolio',
        gradeDefault: 'Pre-Mont to Mont-II',
        focusDefault: 'Sensory Mastery',
        descDefault: 'Early childhood ecosystem focusing on sensory development, motor skill refinement, and joyful discovery.',
        subjects: ['Phonetics', 'Number Play', 'Creative Arts', 'Sensory Logic', 'Motor Skills'],
        color: 'from-[#f9b233] to-[#ed1c24]',
        accent: 'yellow',
        bg_accent: 'bg-[#f9b233]',
        icon: Rocket,
        components: [
            { title: 'Phonics & Literacy', description: 'Interactive alphabet stories and sound recognition modules.' },
            { title: 'Numeracy Blocks', description: 'Tactile counting guides and shape recognition playbooks.' },
            { title: 'Sensory Arts', description: 'Texture-based creativity books for fine motor skills.' },
            { title: 'Logic Patterning', description: 'Early sequence understanding and problem-solving cards.' }
        ]
    },
    {
        id: 'primary',
        contentKey: 'bundles_item_2',
        titleDefault: 'Primary School Portfolio',
        gradeDefault: 'Grades 1-5',
        focusDefault: 'Foundation for Success',
        descDefault: 'Integrated multi-volume workbooks and visual memory mapping tools designed for neuro-cognitive development.',
        subjects: ['English', 'Mathematics', 'EVS', 'French'],
        color: 'from-[#0088cc] to-[#76bc21]',
        accent: 'blue',
        bg_accent: 'bg-[#0088cc]',
        icon: Sparkles,
        components: [
            { title: 'Core English Vol 1-5', description: 'Comprehensive grammar, comprehension, and creative writing.' },
            { title: 'Mathematics Mastery', description: 'Visual math concepts with real-world application exercises.' },
            { title: 'EVS Explorers', description: 'Environmental science through observation and experiments.' },
            { title: 'French Beginners', description: 'Introduction to global languages with phonetic guides.' }
        ]
    },
    {
        id: 'middle',
        contentKey: 'bundles_item_3',
        titleDefault: 'Middle School Portfolio',
        gradeDefault: 'Grades 6-8',
        focusDefault: 'Deep Conceptual Mastery',
        descDefault: 'Advanced science and logic modules with case-study methods for critical analysis and systemic thinking.',
        subjects: ['Core English', 'Advanced Maths', 'Integrated Science', 'Social Science'],
        color: 'from-[#662d91] to-[#0088cc]',
        accent: 'purple',
        bg_accent: 'bg-[#662d91]',
        icon: Target,
        components: [
            { title: 'Advanced Literature', description: 'Critical analysis of classic and contemporary texts.' },
            { title: 'Algebra & Geometry', description: 'Deep dive into abstract mathematical concepts.' },
            { title: 'Lab Science Integrated', description: 'Physics, Chemistry, and Biology combined with lab manuals.' },
            { title: 'History & Civics', description: 'Understanding global systems and historical cause-effect.' }
        ]
    }
];

export function getBundleById(id: string): BundleDef | undefined {
    return bundles.find(b => b.id === id);
}
