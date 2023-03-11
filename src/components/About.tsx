import * as React from "react"
import me from "../images/me.jpg"
import older_teo from "../images/older_teo.jpg"
import PopupLink from "./PopupLink"
import ToolboxCodeSection from "./toolbox/ToolboxCodeSection"
import ToolboxDesignSection from "./toolbox/ToolboxDesignSection"
import ToolboxLanguageSection from "./toolbox/ToolboxLanguageSection"

const About = () => (
    <div id="about" className="flex flex-col grow text-sm border-y-[1px] border-[#5CD595]">

        <div className="flex wrap">
            <div id="left" className="w-[50%] p-[10px] border-r-[1px] border-[#5CD595]">
                {/* <img src={me} /> */}
                <img src={older_teo} />
            </div>

            <div id="right" className="w-[50%] flex flex-col gap-[10px] py-[25px] px-[50px] max-w-[400px]">
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
                    <PopupLink label={"cooking Greek food"} url={""} />,&nbsp;
                    <PopupLink label={"X"} url={""} />,&nbsp;
                    <PopupLink label={"Y"} url={""} />,&nbsp;
                    <PopupLink label={"Z"} url={""} />.
                </div>
            </div>
        </div>

        <div className="flex wrap grow flex-col">
            <div className="border-t-[1px] py-[10px] px-[25px] border-[#5CD595] font-bold text-sm">
                TOOLBOX
            </div>

            <div className="flex grow border-t-[1px] border-[#5CD595]">
                <ToolboxDesignSection />

                <ToolboxCodeSection />

                <ToolboxLanguageSection />
            </div>
        </div>

    </div >
)

export default About
