import type React from "react"

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Paragraph = ({children,className=""}:Props) => {
    return (
        <p className={`text-heading-3 md:text-lg ${className}`}>
                {children}
        </p>
    )
}