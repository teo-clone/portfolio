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

const DetailsSection = ({ title, contents, tags }: DetailsSectionProps) => (
    <div className={"flex flex-col gap-[15px] md:flex-row grow"}>
        <div className={"font-bold w-[200px]"}>
            <div>{title}</div>
        </div>
        <div className={"w-[100%] flex flex-col gap-[15px]"}>
            {contents.map((item, index) => (
                // TODO: don't repeat this twice ... 
                // <ConstructionTape>
                item.underConstruction
                    ? <ConstructionTape>
                        <React.Fragment key={index}>
                            {"value" in item && (
                                <p>{item.value}</p>
                            )}
                            {"src" in item && (
                                <div className="media">
                                    {item.mediaType === 'image'
                                        ? <img src={item.src} alt={item.mediaAlt} />
                                        : <video src={item.src} controls autoPlay muted />
                                    }
                                </div>
                            )}
                        </React.Fragment>
                    </ConstructionTape>
                    : <React.Fragment key={index}>
                        {"value" in item && (
                            <p>{item.value}</p>
                        )}
                        {"src" in item && (
                            <div className="media">
                            {item.mediaType === 'image'
                                ? <img src={item.src} alt={item.mediaAlt} />
                                : <video src={item.src} controls autoPlay muted />
                            }
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