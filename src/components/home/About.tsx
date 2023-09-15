import * as React from "react"
import me from "../../images/me.jpeg"
import biking from "../../images/biking.gif"
import amigos from "../../images/amigos.gif"

import ToolboxCodeSection from "./toolbox/ToolboxCodeSection"
import ToolboxDesignSection from "./toolbox/ToolboxDesignSection"
import ToolboxLanguageSection from "./toolbox/ToolboxLanguageSection"
import HoverGifinator from "./HoverGifinator"

const About = () => (
    <div id="about" className="border-green">

        <div className="grid md:grid-cols-2 grid-cols-1">
            <div id="left" className="p-[10px] w-full border-t md:border-r">
                <img src={me} />
            </div>

            <div id="right" className="border-t py-[30px] px-[30px]">
                <div className="flex flex-col gap-[10px]">
                    <div>
                        Γεια!
                    </div>
                    <div className="max-w-[400px]">
                        My name is Theodoros Tsivranidis. My friends call me Teo.
                    </div>
                    <div className="max-w-[400px]">
                        I currently work full time at Ab Initio as a software developer and UI designer.
                    </div>
                    <div className="max-w-[400px]">
                        Before Ab Initio, I was at Brown University where I graduated with a Computer Science degree in 2020.
                    </div>
                    <div>
                        When I am not working I am&nbsp;
                        <div className="flex gap-[5px]">
                            <HoverGifinator
                                gifSrc={amigos}
                                label={"seeing friends, "}
                            />
                            <HoverGifinator
                                gifSrc={biking}
                                label={"biking, "}
                            />
                            <HoverGifinator gifSrc={""} label={"X, "} />
                            <HoverGifinator gifSrc={""} label={"Y, "} />
                            <HoverGifinator gifSrc={""} label={"Z"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex wrap grow flex-col">
            <div className="border-t py-[30px] px-[30px] font-bold">
                TOOLBOX
            </div>

            <div className="flex grow md:flex-row flex-col border-t">
                <ToolboxDesignSection />

                <ToolboxCodeSection />

                <ToolboxLanguageSection />
            </div>
        </div>

    </div >
)

export default About
