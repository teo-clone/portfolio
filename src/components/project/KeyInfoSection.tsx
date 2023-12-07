import * as React from "react"
import ExternalLinkButton from "../ExternalLinkButton";

interface KeyInfoSectionProps {
    title: string;
    texts: string[];
    liveLink?: string;
}

const KeyInfoSection = ({ title, texts, liveLink }: KeyInfoSectionProps) => (
    <div className={"flex flex-col md:flex-row gap-[15px] grow"}>
        <div className={"font-bold min-w-[100px]"}>
            <div>{title}</div>
        </div>
        <div className={"flex flex-col gap-[15px]"}>
            {texts.map((text, index) =>
                <div key={index}>{text}</div>
            )}
            {liveLink && <ExternalLinkButton label={"Live Link"} to={liveLink} />}
        </div>
    </div>
);

export default KeyInfoSection;