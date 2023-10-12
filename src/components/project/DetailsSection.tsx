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
            <div className={"flex flex-col border-b gap-[30px] px-[20px] py-[30px]"}>
                <div className={"font-bold"}>{title}</div>
                {tags.length > 0 && <div className="flex flex-wrap gap-[15px]">
                    {tags.map((tag, index) => (
                        <Tag key={index} label={tag} />
                    ))}
                </div>}
            </div>
            <div className={"flex flex-col md:border-l border-b px-[20px] py-[30px] gap-[15px]"}>
                {children}
            </div>
        </>
    )
};

export default DetailsSection;