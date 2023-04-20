import * as React from "react"
import Tag from "./Tag";
import ConstructionTape from "../ConstructionTape";

export type Content = Paragraph | Media

export type Paragraph = {
    type: string;
    value: string
}

export type Media = {
    type: string;
    src: string;
    mediaType: string;
    mediaAlt: string;
}

interface DetailsSectionProps {
    title: string,
    contents: Content[],
    tags: string[],
}

const DetailsSection = ({ title, contents, tags }: DetailsSectionProps) => (
    <div className={"flex flex-col gap-[15px] md:flex-row grow"}>
        <div className={"font-bold w-[200px]"}>
            <div>{title}</div>
        </div>
        <div className={"w-[100%] flex flex-col gap-[15px]"}>
            {contents.map((item, index) => (
                // TODO: conditionally render construction tape based on whether inProgress is set to true on content piece
                // <ConstructionTape>
                <React.Fragment key={index}>
                    {"value" in item && (
                        <p>{item.value}</p>
                    )}
                    {"src" in item && (
                        <div className="media w-full">
                            {item.mediaType === 'image'
                                ? <img src={item.src} alt={item.mediaAlt} />
                                : <video src={item.src} controls autoPlay muted />
                            }
                        </div>
                    )}
                </React.Fragment>
                // </ConstructionTape>
            ))}
            <div className="flex wrap gap-[15px]">
                {tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                ))}
            </div>
        </div>
    </div>
);

export default DetailsSection;