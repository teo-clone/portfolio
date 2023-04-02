import * as React from "react"

interface KeyInfoSectionProps {
    title: string;
    texts: string[];
}

const KeyInfoSection = ({ title, texts }: KeyInfoSectionProps) => (
    <div className={"flex grow"}>
        <div className={"font-bold w-[120px]"}>
            <div>{title}</div>
        </div>
        <div className={"w-[100%] flex flex-col gap-[15px]"}>
            {texts.map((text, index) =>
                <div key={index}>{text}</div>
            )}
        </div>
    </div>
);

export default KeyInfoSection;