import * as React from "react"

interface KeyInfoSectionProps {
    title: string;
    texts: string[];
}

const KeyInfoSection = ({ title, texts }: KeyInfoSectionProps) => (
    <div className={"flex flex-col md:flex-row gap-[15px] grow"}>
        <div className={"font-bold min-w-[100px]"}>
            <div>{title}</div>
        </div>
        <div className={"flex flex-col gap-[15px]"}>
            {texts.map((text, index) =>
                <div key={index}>{text}</div>
            )}
        </div>
    </div>
);

export default KeyInfoSection;