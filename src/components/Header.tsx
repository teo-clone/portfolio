import * as React from "react"
import ScrollyButton from "./ScrollyButton"

const Header = () => (
    <div className={"text-lg sticky top-0 bg-white z-50"}>
        <div className="border-b-[1px] border-[#393939] px-[20px] py-[25px]">
            <div className="flex">
                <div className="font-bold">Teo Tsivranidis</div>

                <ScrollyButton
                    label="projects"
                    sectionID="projects"
                    color="text-blue"
                />
                <ScrollyButton
                    label="about"
                    sectionID="about"
                    color="text-green"
                />
            </div>
        </div>
    </div>
)

export default Header
