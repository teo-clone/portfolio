import * as React from "react"

export interface ScrollyButtonProps {
    label: string,
    sectionID?: string,
    color: string
}

const ScrollyButton = (props: ScrollyButtonProps) => {
    const scrollToSection = () => {
        if (!props.sectionID) {
            window.scrollTo({ top: 0, behavior: "smooth" })
            return;
        }

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
        ["black", "text-black black-scrolly-btn"],
        ["blue", "text-blue blue-scrolly-btn"],
        ["green", "text-green green-scrolly-btn"],
    ])

    return <button
        onClick={scrollToSection}>
        <div
            id="scrolly-text"
            className={`${colorVariants.get(props.color)} text-left text-xl min-[500px]:text-2xl`}
        >
            {props.label}
        </div>
    </button>
}

export default ScrollyButton
