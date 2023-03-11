import * as React from "react"

export interface PopupLinkProps {
    label: string,
    url: string
}

const PopupLink = (props: PopupLinkProps) => (
    <a className={"italic underline"} href={props.url}>
        {props.label}
    </a>
)

export default PopupLink
