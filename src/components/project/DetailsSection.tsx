import * as React from "react"
import Tag from "./Tag";
import ConstructionTape from "../ConstructionTape";
import { PropsWithChildren } from "react";

export type Paragraph = {
    type: string;
    value: string;
    underConstruction?: boolean;
}

export type Media = {
    type: string;
    src: string;
    mediaType: string;
    mediaAlt: string;
    underConstruction?: boolean;
}

interface DetailsSectionProps {
    title: string,
    tags: string[],
}

const DetailsSection = ({ title, tags, children }: PropsWithChildren<DetailsSectionProps>) => {

    return (
        <div className={"flex flex-col gap-[15px] md:flex-row grow"}>
            <div className={"font-bold w-[200px]"}>
                <div>{title}</div>
            </div>
            <div className={"w-[100%] flex flex-col gap-[15px]"}>
                {children}
                <div className="flex wrap gap-[15px]">
                    {tags.map((tag, index) => (
                        <Tag key={index} label={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default DetailsSection;