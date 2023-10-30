import * as React from "react"
import { PropsWithChildren, useEffect, useRef } from "react"
import under_construction from "../images/slow-and-smooth.gif"
import ScrollyButton from "./home/ScrollyButton"

export interface HeaderProps {
    title: string,
    borderColor: string
}

const Header = ({ title, borderColor, children }: PropsWithChildren<HeaderProps>) => {

    const padding = ["px-[20px]", "py-[20px]"]
    const sticky = ["sticky", "top-0", "bg-white", "bg-opacity-50", "z-50"]
    const spacing = ["flex", "justify-between", "items-center"]
    const border = ["border-b"]

    const styles = [
        ...padding,
        ...sticky,
        ...spacing,
        ...border,
    ]

    return <div className={sticky.join(" ") + " flex flex-col border-b"}>
        <div className={styles.join(" ")}>

            <ScrollyButton
                label={title}
                color="black"
            />

            {children}

        </div>
        <div className={`header-border ${borderColor}`}></div>
    </div>
}

export default Header