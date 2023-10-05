import * as React from "react"
import Tag from "./Tag";
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
        <>
            <div className={"font-bold border-t px-[30px] py-[30px] flex"}>
                <div>{title}</div>
            </div>
            <div className={"flex flex-col md:border-l border-t px-[30px] py-[30px] gap-[15px]"}>
                {children}
                <div className="flex wrap gap-[15px]">
                    {tags.map((tag, index) => (
                        <Tag key={index} label={tag} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default DetailsSection;