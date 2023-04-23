import * as React from "react"
import { PropsWithChildren, useEffect, useRef } from "react"
import under_construction from "../images/slow-and-smooth.gif"

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

    const gif = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (gif.current) {
            gif.current.setAttribute("loop", "true");
        }
    }, []);

    return <div className={styles.join(" ")}>
        <div className="relative">
            {/* Render title inside the video */}
            <input
                type="button"
                className={"font-bold"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                value={title}
            />

            {/* Render the video centered on top of the other component */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                    ref={gif}
                    src={under_construction}
                    alt="under construction sign gif"
                    className="w-[80] h-[80px] max-w-none object-cover"
                />
            </div>
        </div>

        <div className="flex gap-[10px]">
            {children}
        </div>
    </div>
}

export default Header