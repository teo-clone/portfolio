import * as React from "react"
import Tag from "./Tag";
import ConstructionTape from "../ConstructionTape";

export type Content = Paragraph | Media

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
    contents: Content[],
    tags: string[],
}

const DetailsSection = ({ title, contents, tags }: DetailsSectionProps) => {
    const renderContent = (content: Content, index: number) => {
        return <React.Fragment key={index}>
            {"value" in content && (
                <p>{content.value}</p>
            )}
            {"src" in content && (
                <div className="media">
                    {content.mediaType === 'image'
                        ? <img src={content.src} alt={content.mediaAlt} />
                        : <video src={content.src} controls autoPlay muted />
                    }
                </div>
            )}
        </React.Fragment>
    }

    return (
        <div className={"flex flex-col gap-[15px] md:flex-row grow"}>
            <div className={"font-bold w-[200px]"}>
                <div>{title}</div>
            </div>
            <div className={"w-[100%] flex flex-col gap-[15px]"}>
                {contents.map((item, index) => (
                    item.underConstruction
                        ? <ConstructionTape>
                            {renderContent(item, index)}
                        </ConstructionTape>
                        : renderContent(item, index)
                ))}
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