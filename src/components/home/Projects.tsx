import * as React from "react"
import ProjectThumbnail from "./ProjectThumbnail"

import a360_combo from "../../images/a360/a360_combo.png"
import intus_combo from "../../images/intus/intus_combo.png"
import statton from "../../images/statton/statton.png"
import bathwall from "../../images/bathwall/bathwall.png"
import ps2 from "../../images/ps2-nostalgia/ps2-nostalgia.png"

import GatsbyLinkButton from "../GatsbyLinkButton"
import ExternalLinkButton from "../ExternalLinkButton"


const projectProps = [
    {
        title: "BATHROOM WALL",
        timeline: "JAN 2024 - NOW",
        description: "Location and time based anonymous social platform",
        liveLink: "https://bathwall.co",
        gitRepo: "https://github.com/teo-clone/bathroom_wall",
        image: {
            id: "bathwall",
            src: bathwall,
            alt: "Image with examples of home screen and bar pages."
        }
    },
    {
        title: "PS2 NOSTALGIA",
        timeline: "MAR 2024",
        description: "Nostalgic PS2 graphic image generator",
        liveLink: "https://ps2nostalgia.win",
        gitRepo: "https://github.com/sobu-co/ps2-nostalgia",
        image: {
            id: "ps2",
            src: ps2,
            alt: "Image with example generation."
        }
    },
    {
        title: "STATTON",
        timeline: "FEB 2024",
        description: "Opinion polling, data visualization  web application",
        liveLink: "https://statton.netlify.app",
        gitRepo: "https://github.com/teo-clone/statton",
        image: {
            id: "statton",
            src: statton,
            alt: "Image with examples of response analytics screen."
        }
    },
    {
        fullInfoUrl: "/a360",
        title: "ACTIVE>360",
        timeline: "2020 - 2023",
        description: "Real time event processing application",
        image: {
            id: "a360_wombo_combo",
            src: a360_combo,
            alt: "Image with examples of event, aggregate, and watcher screens"
        }
    },
    {
        fullInfoUrl: "/intus",
        title: "INTUS CARE",
        timeline: "2018 - 2020",
        description: "On demand, at home care mobile application",
        image: {
            id: "intus_combo",
            src: intus_combo,
            alt: "Image with examples of home, care request details, and new care request screens"
        }
    },
]

const Projects = () => (
    <div id="projects" className="border-blue grid md:grid-cols-2 grid-cols-1 border-t">
        {projectProps.map((props) =>
            <ProjectThumbnail
                key={props.title}
                {...props}
            >
                {props.fullInfoUrl &&
                    <GatsbyLinkButton
                        label={"More >>"}
                        to={props.fullInfoUrl}
                    />}
                {props.liveLink &&
                    <ExternalLinkButton label={"Live Link"} to={props.liveLink} />
                }
                {props.gitRepo &&
                    <ExternalLinkButton label={"Git Repo"} to={props.gitRepo} />
                }
            </ProjectThumbnail>
        )}
    </div>
)

export default Projects