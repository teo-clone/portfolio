import * as React from "react"
import blue_ellipse from "../../images/blue_ellipse.png"

export interface TagProps {
    label: string
}

const Tag = (props: TagProps) => (
    <div
        className={"border-blue relative text-center"}
    >
        <img
            className={"h-[33px] w-[90px]"}
            src={blue_ellipse}
        />
        <div
            className={"absolute top-[10%] left-[10%]"}
        >
            {props.label}
        </div>
    </div>
)

export default Tag
