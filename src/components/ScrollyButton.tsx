import * as React from "react"
import { useEffect } from "react"
import blue_ellipse from "../images/blue_ellipse.png"
import green_elipse from "../images/green_ellipse.png"


export interface ScrollyButtonProps {
    label: string,
    sectionID: string,
    color: string
}

const ScrollyButton = (props: ScrollyButtonProps) => {
    const scrollToSection = () => {
        var headerOffset = 79 // really 80 but 1 less to make header border def change
        var elementPosition = document.getElementById(props.sectionID)?.getBoundingClientRect().top ?? 0
        var offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }

    // These maps are queried below to set the classNames
    const colorVariants = new Map([
        ["blue", "text-blue border-blue"],
        ["green", "text-green border-green"],
    ])
    const imageVariants = new Map([
        ["blue", blue_ellipse],
        ["green", green_elipse],
    ])
    const translateVariants = new Map([
        ["blue", "-translate-x-8 -translate-y-3"],
        ["green", "-translate-x-5 -translate-y-3"],
    ])

    return <button
        onClick={scrollToSection}>
        <div
            id="scrolly-button-content-container"
            className={`${colorVariants.get(props.color)} relative text-center`}
        >
            <img
                className={"h-[33px] w-[100px]"}
                src={imageVariants.get(props.color)}
            />
            <div
                className={`font-medium absolute top-[50%] left-[50%] ${translateVariants.get(props.color)}`}
            >
                {props.label}
            </div>
        </div>
    </button>
}

export default ScrollyButton
