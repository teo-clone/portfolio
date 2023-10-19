import * as React from "react"
import me from "../../images/me.jpeg"
import biking from "../../images/biking.gif"
import amigos from "../../images/amigos.gif"
import onion_chop from "../../images/onion_chop.gif"

import ToolboxCodeSection from "./toolbox/ToolboxCodeSection"
import ToolboxDesignSection from "./toolbox/ToolboxDesignSection"
import ToolboxLanguageSection from "./toolbox/ToolboxLanguageSection"
import HoverGifinator from "./HoverGifinator"

const About = () => {

    const [gif, setGif] = React.useState<string | undefined>(undefined);

    return (
        <div id="about" className="border-green border-t">

            <div className="grid md:grid-cols-2 grid-cols-1">
                <div id="left" className="p-[10px] w-full md:border-r">
                    <img src={me} />
                </div>

                <div id="right" className="md:border-none border-t py-[30px] px-[20px]">
                    <div className="flex flex-col gap-[10px] max-w-[455px]">
                        <div>
                            {"Γεια!"}
                        </div>
                        <div>
                            {"My name is Theodoros Tsivranidis. My friends call me Teo."}
                        </div>
                        <div>
                            {"I am a software developer and designer currently based in Brooklyn, NY."}
                        </div>
                        <div>
                            {"I love to think about products as a process from beginning to end including the market research, prototyping, and development."}
                        </div>
                        <div>
                            {"My most recent full time job was at Ab Initio on the Active>360 team as a full-stack developer and UI designer."}
                        </div>
                        <div>
                            {"Before Ab Initio, I was at Brown University where I graduated with a Computer Science Sc.B. degree in 2020."}
                        </div>
                        <div className="flex flex-wrap gap-[5px]">
                            {"When I am not working I am"}
                            <HoverGifinator gifSrc={amigos} label={"seeing friends"} updateGif={setGif} />
                            <HoverGifinator gifSrc={biking} label={"biking"} updateGif={setGif} />
                            <HoverGifinator gifSrc={onion_chop} label={"cooking"} updateGif={setGif} lastOne />
                        </div>
                        {gif && (
                            <img
                                className="max-w-[400px]"
                                src={gif}
                                alt={"Animated gif of photos with filename " + gif}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="flex wrap grow flex-col">
                <div className="border-t py-[30px] px-[20px] font-bold">
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
}

export default About
