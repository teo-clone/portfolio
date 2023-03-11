import * as React from "react"

export interface ScrollyButtonProps {
    label: string,
    sectionID: string,
    color?: string // TODO: make this have an effect lol
}

// hello

const ScrollyButton = (props: ScrollyButtonProps) => (
    <input
        type="button"
        className={props.color}
        onClick={() => document.getElementById(props.sectionID)?.scrollIntoView()}
        value={props.label}
    />
)

export default ScrollyButton
