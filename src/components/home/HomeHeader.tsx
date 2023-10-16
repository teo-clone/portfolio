import * as React from "react"
import { useEffect, useState } from "react";
import Header from "../Header";
import ScrollyButton from "./ScrollyButton"
import { useMediaQuery } from "react-responsive";

const HomeHeader = () => {
    const [borderColor, setBorderColor] = useState("border-gray-600");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {

        let ab = document.getElementById("about");
        let about = ab?.getBoundingClientRect();

        let proj = document.getElementById("projects");
        let projects = proj?.getBoundingClientRect();

        let f = document.getElementById("fun");
        let fun = f?.getBoundingClientRect();

        if (fun && fun.top < 95) {
            setBorderColor("header-red")
        }
        else if (projects && projects.top < 95) {
            setBorderColor("header-blue")
        }
        else if (about && about.top < 95) {
            setBorderColor("header-green")
        }
        else {
            setBorderColor("header-black")
        }
    };

    const isBigScreen = useMediaQuery({ query: '(min-width: 450px)' })

    return <>
        <Header
            title={isBigScreen ? "Teo Tsivranidis" : "Teo T"}
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
            <ScrollyButton
                label="Fun"
                sectionID="fun"
                color="red"
            />
        </Header>

    </>
}

export default HomeHeader
