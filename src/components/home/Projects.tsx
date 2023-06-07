import * as React from "react"
import ProjectThumbnail from "./ProjectThumbnail"

import a360_event from "../../images/a360/a360_event.png"
import a360_watcher from "../../images/a360/a360_watcher.png"
import a360_aggregate from "../../images/a360/a360_aggregate.png"

import a360_wombo_combo from "../../images/a360/a360_wombo_combo.png"

import intus_home from "../../images/intus/intus_home.png"
import intus_appt_summary from "../../images/intus/intus_appt_summary.png"
import intus_new from "../../images/intus/intus_new.png"

import intus_wombo_combo from "../../images/intus/intus_wombo_combo.png"

const projectProps = [
    {
        fullInfoUrl: "/a360",
        title: "ACTIVE>360",
        timeline: "2020 - PRESENT",
        description: "Working full-time as a (mostly) frontend developer and UI designer on a real time event processing application.",
        carouselImages: [
            {
                id: "a360_event",
                src: a360_event,
                alt: "Example of an event screen"
            },
            {
                id: "a360_aggregate",
                src: a360_aggregate,
                alt: "Example of an aggregate screen"
            },
            {
                id: "a360_watcher",
                src: a360_watcher,
                alt: "Example of an watcher screen"
            }
        ],
        womboComboImage: {
            id: "a360_wombo_combo",
            src: a360_wombo_combo,
            alt: "Image with examples of event, aggregate, and watcher screens"
        }
    },
    {
        fullInfoUrl: "/intus",
        title: "INTUS CARE",
        timeline: "2018 - 2020",
        description: "Founding member, full-stack developer and UI designer for an awarded health care startup.",
        carouselImages: [
            {
                id: "intus_home",
                src: intus_home,
                alt: "Image of home screen"
            },
            {
                id: "intus_appt_summary",
                src: intus_appt_summary,
                alt: "Image of appointment summary screen"
            },
            {
                id: "intus_new",
                src: intus_new,
                alt: "Image of new appointment screen"
            }
        ],
        womboComboImage: {
            id: "a360_wombo_combo",
            src: intus_wombo_combo,
            alt: "Image with examples of home, care request details, and new care request screens"
        }
    }
]

const Projects = () => (
    <div id="projects" className="border-blue grid md:grid-cols-2 grid-cols-1 first:border-t">
        {projectProps.map((props) =>
            <ProjectThumbnail
                key={props.title}
                {...props}
            />
        )}
    </div>
)

export default Projects