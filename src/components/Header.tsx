import * as React from "react"
import { PropsWithChildren } from "react"

export interface HeaderProps {
    title: string,
    borderColor: string
}

const Header = ({ title, borderColor, children }: PropsWithChildren<HeaderProps>) => {

    const padding = ["px-[20px]", "py-[25px]"]
    const sticky = ["sticky", "top-0", "bg-white", "z-50"]
    const spacing = ["flex", "justify-between", "items-center"]
    const border = [borderColor, "border-b"]

    const styles = [
        "text-lg",
        ...padding,
        ...sticky,
        ...spacing,
        ...border,
    ]

    return <div className={styles.join(" ")}>
        <input
            type="button"
            className={"font-bold"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            value={title}
        />

        <div className="flex gap-[10px]">
            {children}
        </div>
    </div>
}

export default Header