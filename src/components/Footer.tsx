import * as React from "react"
import git from "../images/git.png"
import insta from "../images/insta.png"
import linkedin from "../images/linkedin.png"


const Footer = () => (
    <div className={"flex md:flex-row flex-col gap-[20px] py-[50px] grow justify-center items-center text-sm"}>
        <div>
            theodore.tsivranidis@gmail.com
        </div>

        <a href={"https://www.instagram.com/itsmeteot/"}>
            {"instagram.com/itsmeteot"}
        </a>

        <a href={"http://linkedin.com/in/ttsivran"}>
            {"linkedin.com/in/ttsivran"}
        </a>
    </div>
)

export default Footer
