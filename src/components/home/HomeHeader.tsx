import * as React from "react"
import { useEffect, useState } from "react";
import Header from "../Header";
import ScrollyButton from "./ScrollyButton"

const HomeHeader = () => {
    const [borderColor, setBorderColor] = useState("border-gray-400");

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
            setBorderColor("border-gray-400")
        }
    };

    return <>
        <Header
            title="Teo Tsivranidis"
            borderColor={borderColor}
        >
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
        </Header>

    </>
}

export default HomeHeader
