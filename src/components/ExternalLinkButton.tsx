import * as React from "react"
import { Link } from "gatsby"

import { useState } from "react";
import LinkButton, { LinkButtonProps } from "./LinkButton";

import external_link from "../images/external_link.png"

const ExternalLinkButton = (props: LinkButtonProps) => {
    return <a href={props.to} className="w-fit" target="_blank" rel="noopener noreferrer">
        <LinkButton {...props} icon={external_link} />
    </a>
}

export default ExternalLinkButton
