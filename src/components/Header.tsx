import * as React from "react"
import { useEffect, useState } from "react";
import ScrollyButton from "./ScrollyButton"

const Header = () => {
    const [borderColor, setBorderColor] = useState("border-black");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        let proj = document.getElementById("projects");
        let projects = proj?.getBoundingClientRect();

        let ab = document.getElementById("about");
        let about = ab?.getBoundingClientRect();

        if (about && about.top < 80) {
            setBorderColor("border-green")
        }
        else if (projects && projects.top < 80) {
            setBorderColor("border-blue")
        }
        else {
            setBorderColor("border-black")
        }
    };

    return <div className={"text-lg sticky top-0 bg-white z-50"}>
        <div className={`border-b ${borderColor} px-[20px] py-[25px]`}>
            <div className="flex justify-between">
                <input
                    type="button"
                    className={"font-bold"}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    value={"Teo Tsivranidis"}
                />

                <div className="flex gap-[10px]">
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
}

export default Header
