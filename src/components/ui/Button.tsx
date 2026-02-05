import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    className,
    icon,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(styles.button, styles[variant], styles[size], className)}
            {...props}
        >
            {children}
            {icon && <span className="icon">{icon}</span>}
        </button>
    );
}
