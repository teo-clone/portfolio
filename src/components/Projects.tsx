import * as React from "react"
import ProjectThumbnail from "./ProjectThumbnail"

import ScrollyButton from "./ScrollyButton"

const projectProps = [
    {
        title: "BATHROOM WALL",
        timeline: "JAN 2024 - NOW",
        description: "Location and time based anonymous social platform",
        liveLink: "https://bathwall.co",
        gitRepo: "https://github.com/teo-clone/bathroom_wall"
    },
    {
        title: "PS2 NOSTALGIA",
        timeline: "MAR 2024",
        description: "Nostalgic PS2 graphic image generator",
        liveLink: "https://ps2nostalgia.win",
        gitRepo: "https://github.com/sobu-co/ps2-nostalgia"
    },
    {
        title: "STATTON",
        timeline: "FEB 2024",
        description: "Opinion polling, data visualization  web application",
        liveLink: "https://statton.netlify.app",
        gitRepo: "https://github.com/teo-clone/statton"
    },
    {
        title: "STUUT",
        timeline: "MAY-JUN 2024",
        description: "Alleviating friction related to B2B payments",
        liveLink: "https://www.stuut.co",
    },
    {
        title: "ACTIVE>360",
        timeline: "2020 - 2023",
        description: "Full-stack developer on a real time event processing application"
    },
    {
        fullInfoUrl: "/intus",
        title: "INTUS CARE",
        timeline: "2018 - 2020",
        description: "On demand, at home care mobile application"
    },
]

export default function Projects() {
    return (
        <div className="border-blue">
            <div id="projects" className="border-t">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {projectProps.map((props, index) => (
                        <div
                            key={props.title}
                            className={`${index % 2 === 0 ? 'sm:border-r' : ''
                                }`}
                        >
                            <ProjectThumbnail {...props} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}