import * as React from "react"
import { Link } from "gatsby"

import Carousel, { ImageProps } from "./Carousel"
import { useMediaQuery } from "react-responsive";

export interface ProjectThumbnailProps {
    fullInfoUrl: string,
    title: string,
    timeline: string,
    description: string,
    carouselImages: ImageProps[],
    womboComboImage: ImageProps
}

const ProjectThumbnail = (props: ProjectThumbnailProps) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    return <>
        <div id="left" className="md:border-r border-b">
            <div className="flex flex-col">
                <div className="flex justify-between px-[20px] py-[25px] border-b">
                    <div className="font-bold">
                        {props.title}
                    </div>
                    <div className="font-bold">
                        {props.timeline}
                    </div>
                </div>
                <div className="max-w-[400px] px-[20px] py-[25px] flex flex-col gap-10">
                    {props.description}
                    <Link to={props.fullInfoUrl}>{"More >>"}</Link>
                </div>
            </div>
        </div>

        <div id="right" className="border-b">
            <div className="px-[20px] py-[25px]">
                {isBigScreen &&
                    <img
                        className="wombo"
                        src={props.womboComboImage.src}
                        alt={props.womboComboImage.alt}
                    />}
                {!isBigScreen && <Carousel
                    images={props.carouselImages}
                />}
            </div>
        </div>
    </>
}

export default ProjectThumbnail
