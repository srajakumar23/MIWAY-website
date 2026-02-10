'use client';

import { motion } from 'framer-motion';

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    className = "",
    style
}: {
    children: React.ReactNode,
    delay?: number,
    direction?: 'up' | 'down' | 'left' | 'right' | 'none',
    className?: string,
    style?: React.CSSProperties
}) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: {}
    };

    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', ...directions[direction] }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1] // Custom "World-Class" Bezier
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
