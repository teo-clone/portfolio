import * as React from "react"
import Tag from "./Tag";

export interface Content {
    type: string;
    value: string
    mediaType?: string;
    mediaAlt?: string;
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
                <React.Fragment key={index}>
                    {item.type === 'paragraph' && (
                        <p>{item.value}</p>
                    )}
                    {item.type === 'media' && (
                        <div className="media">
                            {item.mediaType === 'image' ? (
                                <img src={item.value} alt={item.mediaAlt} />
                            ) : (
                                <video src={item.value} controls autoPlay muted />
                            )}
                        </div>
                    )}
                </React.Fragment>
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