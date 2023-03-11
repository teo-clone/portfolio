import * as React from "react"
import git from "../images/git.png"
import insta from "../images/insta.png"
import linkedin from "../images/linkedin.png"


const Footer = () => (
    <div className={"flex gap-[15px] py-[50px] grow justify-center text-sm"}>
        <div>
            theodore.tsivranidis@gmail.com
        </div>
        <div className={"flex items-center gap-[5px]"}>
            <img src={git} />
            github.com/ttsivran
        </div>
        <div className={"flex items-center gap-[5px]"}>
            <img src={insta} />
            @itsmeteot
        </div>
        <div className={"flex items-center gap-[5px]"}>
            <img src={linkedin} />
            linkedin.com/in/ttsivran
        </div>
    </div>
)

export default Footer
