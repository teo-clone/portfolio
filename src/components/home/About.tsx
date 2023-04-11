import * as React from "react"
import me from "../../images/me.jpg"
import older_teo from "../../images/older_teo.jpg"
import giovanni from "../../images/amigos/giovanni.png"
import cec_cam from "../../images/amigos/cec_cam.png"
import dave_tay_no from "../../images/amigos/dave_tay_no.png"
import lulu from "../../images/amigos/lulu.png"
import sani_crew from "../../images/amigos/sani_crew.png"
import yi_yio from "../../images/amigos/yi_yio.png"
import z2 from "../../images/amigos/z2.png"

import PopupLink from "./PopupLink"
import ToolboxCodeSection from "./toolbox/ToolboxCodeSection"
import ToolboxDesignSection from "./toolbox/ToolboxDesignSection"
import ToolboxLanguageSection from "./toolbox/ToolboxLanguageSection"
import HoverGifinator from "./HoverGifinator"

const About = () => (
    <div id="about" className="border-green">

        <div className="grid md:grid-cols-2 grid-cols-1">
            <div id="left" className="p-[10px] w-full border-t md:border-r">
                {/* <img src={me} /> */}
                <img src={older_teo} />
            </div>

            <div id="right" className="border-t py-[25px] px-[25px]">
                <div className="max-w-[400px] flex flex-col gap-[10px]">
                    <div>
                        Γεια!
                    </div>
                    <div>
                        My name is Theodoros Tsivranidis. My friends call me Teo.
                    </div>
                    <div>
                        I currently work full time at Ab Initio as a software developer and UI designer.
                    </div>
                    <div>
                        Before Ab Initio, I was at Brown University where I graduated with a Computer Science degree in 2020.
                    </div>
                    <div>
                        When I am not working I am&nbsp;
                        <PopupLink label={"X"} url={""} />,&nbsp;
                        <PopupLink label={"Y"} url={""} />,&nbsp;
                        <PopupLink label={"Z"} url={""} />.
                        <HoverGifinator
                            images={[
                                giovanni,
                                cec_cam,
                                dave_tay_no,
                                lulu,
                                sani_crew,
                                yi_yio,
                                z2
                            ]}
                            sizeFactors={[
                                1.2,
                                0.8,
                                1.4,
                                0.9,
                                1.1,
                                0.7,
                                1.3
                            ]}
                            label={"seeing friends"}
                        />

                    </div>
                </div>
            </div>
        </div>

        <div className="flex wrap grow flex-col">
            <div className="border-t py-[10px] px-[25px] font-bold">
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
