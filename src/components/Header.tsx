import * as React from "react"
import ScrollyButton from "./ScrollyButton"

const Header = () => (
    <div className={"text-lg sticky top-0 bg-white z-50"}>
        <div className="border-b border-black px-[20px] py-[25px]">
            <div className="flex justify-between">
                <input
                    type="button"
                    className={"font-bold"}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }}
                    value={"Teo Tsivranidis"}
                />

                <div className="flex gap-[15px]">
                    <ScrollyButton
                        label="projects"
                        sectionID="projects"
                        color="blue"
                    />
                    <ScrollyButton
                        label="about"
                        sectionID="about"
                        color="green"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Header
