import * as React from "react"
import { PropsWithChildren, useEffect, useRef } from "react"
import under_construction from "../images/slow-and-smooth.gif"
import ScrollyButton from "./home/ScrollyButton"

export interface HeaderProps {
    title: string,
    borderColor: string
}

const Header = ({ title, borderColor, children }: PropsWithChildren<HeaderProps>) => {

    const padding = ["px-[20px]", "py-[30px]"]
    const sticky = ["sticky", "top-0", "bg-white", "z-50"]
    const spacing = ["flex", "justify-between", "items-center"]
    const border = [borderColor, "border-b-2"]

    const styles = [
        "text-lg",
        ...padding,
        ...sticky,
        ...spacing,
        ...border,
    ]

    return <div className={styles.join(" ")}>

        <ScrollyButton
            label={title}
            color="black"
        />

        <div className="flex gap-[20px]">
            {children}
        </div>
    </div>
}

export default Header