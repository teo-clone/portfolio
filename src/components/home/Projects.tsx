import * as React from "react"
import ProjectThumbnail from "./ProjectThumbnail"

import a360_combo from "../../images/a360/a360_combo.png"
import intus_combo from "../../images/intus/intus_combo.png"
import statton from "../../images/statton/statton.png"

import GatsbyLinkButton from "../GatsbyLinkButton"


const projectProps = [
    // {
    //     fullInfoUrl: "/statton",
    //     title: "STATTON",
    //     timeline: "2023",
    //     description: "Full-stack developer and UI designer for a data visualization web application.",
    //     image: {
    //         id: "statton",
    //         src: statton,
    //         alt: "Image with examples of response analytics screen."
    //     }
    // },
    {
        fullInfoUrl: "/a360",
        title: "ACTIVE>360",
        timeline: "2020 - 2023",
        description: "Full-stack developer and UI designer on a real time event processing application.",
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
        description: "Founding member, full-stack developer and UI designer for an awarded health care startup.",
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
                <GatsbyLinkButton
                    label={"More >>"}
                    to={props.fullInfoUrl}
                />
            </ProjectThumbnail>
        )}
    </div>
)

export default Projects