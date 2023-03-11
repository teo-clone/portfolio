import * as React from "react"

export interface ScrollyButtonProps {
    label: string,
    sectionID: string,
    color?: string // TODO: make this have an effect lol
}

const ScrollyButton = (props: ScrollyButtonProps) => {

    const classNames = ["text-" + props.color, "px-[10px]", "border", "rounded-full", "border-" + props.color]

    const scrollToSection = () => {
        var headerOffset = 80;
        var elementPosition = document.getElementById(props.sectionID)?.getBoundingClientRect().top ?? 0;
        var offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return <input
        type="button"
        className={classNames.join(" ")}
        onClick={scrollToSection}
        value={props.label}
    />;
}

export default ScrollyButton
