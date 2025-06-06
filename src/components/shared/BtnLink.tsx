
interface ContainerProps {
    href: string,
    text: string,
    className?: string
}

export const BtnLink = ({href,text,className = ""}:ContainerProps) => {
    return (
        <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border border-transparent bg-violet-600 dark:bg-violet-600 cursor-pointer transform transtion duration-300 ${className}`}>
            <span className="relative z-10 text-white ">
                {text}
            </span>
        </a>
    )
}