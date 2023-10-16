import * as React from "react"
import { Link } from "gatsby"

import { useState } from "react";
import LinkButton, { LinkButtonProps } from "./LinkButton";

const GatsbyLinkButton = (props: LinkButtonProps) => {

    return <Link to={props.to} className="w-fit">
        <LinkButton {...props} />
    </Link>
}

export default GatsbyLinkButton
