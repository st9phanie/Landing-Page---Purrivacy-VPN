import type React from "react"

interface ContainerProps {
    children:React.ReactNode,
    className?: string,
    onClick?: ()=> void;
}

export const Button = ({onClick,children,className = ""}:ContainerProps) => {
    return (
      <button onClick={onClick} className={`px-6 py-3 outline-none cursor-pointer rounded-full relative overflow-hidden border-transparent bg-violet-600 border ${className}`}>
        {children}
      </button>
    )
}