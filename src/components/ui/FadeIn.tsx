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
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
