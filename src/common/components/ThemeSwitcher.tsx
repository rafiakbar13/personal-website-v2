"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-5 h-5"

            onClick={toggleTheme}
        >
            {resolvedTheme === 'dark' ? (
                <BsSun size={18} />
            ) : (
                <BsMoonStarsFill size={18} />
            )}
        </button>
    )
};