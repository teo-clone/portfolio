import * as React from "react"
import { useEffect, useState } from "react";
import Header from "../Header";
import ScrollyButton from "./ScrollyButton"

const HomeHeader = () => {
    const [borderColor, setBorderColor] = useState("border-gray-600");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        let proj = document.getElementById("projects");
        let projects = proj?.getBoundingClientRect();

        let ab = document.getElementById("about");
        let about = ab?.getBoundingClientRect();

        if (projects && projects.top < 95) {
            setBorderColor("header-blue")
        }
        else if (about && about.top < 95) {
            setBorderColor("header-green")
        }
        else {
            setBorderColor("header-black")
        }
    };

    return <>
        <Header
            title={"Teo Tsivranidis"}
            borderColor={borderColor}
        >
            <ScrollyButton
                label="About"
                sectionID="about"
                color="green"
            />
            <ScrollyButton
                label="Projects"
                sectionID="projects"
                color="blue"
            />
        </Header>

    </>
}

export default HomeHeader
