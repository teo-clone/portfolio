import * as React from "react"
import me from "../../images/me.jpg"
import older_teo from "../../images/older_teo.jpg"
import giovanni from "../../images/amigos/giovanni.jpg"
import cec_cam from "../../images/amigos/cec_cam.jpg"
import dave_tay_no from "../../images/amigos/dave_tay_no.jpg"
import lulu from "../../images/amigos/lulu.jpg"
import sani_crew from "../../images/amigos/sani_crew.jpg"
import yi_yio from "../../images/amigos/yi_yio.jpg"
import z2 from "../../images/amigos/z2.jpg"
import thanos_kim from "../../images/amigos/thanos_kim.jpg"
import teddy from "../../images/amigos/teddy.jpg"
import oli from "../../images/amigos/oli.jpg"
import don_toliver from "../../images/amigos/don_toliver.jpg"
import rooftop_dining from "../../images/amigos/rooftop_dining.jpg"

import PopupLink from "./PopupLink"
import ToolboxCodeSection from "./toolbox/ToolboxCodeSection"
import ToolboxDesignSection from "./toolbox/ToolboxDesignSection"
import ToolboxLanguageSection from "./toolbox/ToolboxLanguageSection"
import HoverGifinator from "./HoverGifinator"
import ConstructionTape from "../ConstructionTape"

const About = () => (
    <div id="about" className="border-green">

        <div className="grid md:grid-cols-2 grid-cols-1">
            <div id="left" className="p-[10px] w-full border-t md:border-r">
                <img src={me} />
                {/* <img src={older_teo} /> */}
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
                        <ConstructionTape>
                        <PopupLink label={"X"} url={""} />,&nbsp;
                        <PopupLink label={"Y"} url={""} />,&nbsp;
                        <PopupLink label={"Z"} url={""} />.
                        </ConstructionTape>
                        <HoverGifinator
                            images={[
                                { src: rooftop_dining, sizeFactor: 0.8 },
                                { src: giovanni, sizeFactor: 1.3 },
                                { src: sani_crew, sizeFactor: 1.1 },
                                { src: don_toliver, sizeFactor: 1.2 },
                                { src: yi_yio, sizeFactor: 1.1 },
                                { src: z2, sizeFactor: 1.3 },
                                { src: thanos_kim, sizeFactor: 1 },
                                { src: dave_tay_no, sizeFactor: 1.7 },
                                { src: lulu, sizeFactor: 0.8 },
                                { src: oli, sizeFactor: 0.9 },
                                { src: cec_cam, sizeFactor: 1 },
                                { src: teddy, sizeFactor: 0.9 },
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
