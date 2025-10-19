import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // 시스템 다크 모드 감지
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme === 'dark' || (!storedTheme && mediaQuery.matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                'bg-grey-200 dark:bg-grey-800',
                'focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2',
                className
            )}
            role="switch"
            aria-checked={isDark}
            aria-label="다크 모드 토글"
        >
            <span
                className={cn(
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                    isDark ? 'translate-x-6' : 'translate-x-1'
                )}
            />
        </button>
    );
}
