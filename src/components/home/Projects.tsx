import * as React from "react"
import ProjectThumbnail from "./ProjectThumbnail"

import a360_event from "../../images/a360/a360_event.png"
import a360_watcher from "../../images/a360/a360_watcher.png"
import a360_aggregate from "../../images/a360/a360_aggregate.png"

import a360_wombo_combo from "../../images/a360/a360_wombo_combo.png"

import a360_combo from "../../images/a360/a360_combo.png"

import intus_home from "../../images/intus/intus_home.png"
import intus_appt_summary from "../../images/intus/intus_appt_summary.png"
import intus_new from "../../images/intus/intus_new.png"

import intus_wombo_combo from "../../images/intus/intus_wombo_combo.png"

import intus_combo from "../../images/intus/intus_combo.png"


const projectProps = [
    {
        fullInfoUrl: "/a360",
        title: "ACTIVE>360",
        timeline: "2020 - PRESENT",
        description: "Working full-time as a (mostly) frontend developer and UI designer on a real time event processing application.",
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
    }
]

const Projects = () => (
    <div id="projects" className="border-blue grid md:grid-cols-2 grid-cols-1 first:border-t-2">
        {projectProps.map((props) =>
            <ProjectThumbnail
                key={props.title}
                {...props}
            />
        )}
    </div>
)

export default Projects