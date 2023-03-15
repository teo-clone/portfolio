import * as React from "react"
import ProjectThumbnail from "../components/ProjectThumbnail"

import a360_event from "../images/a360/a360_event.png"
import a360_watcher from "../images/a360/a360_watcher.png"
import a360_aggregate from "../images/a360/a360_aggregate.png"

import intus_home from "../images/intus/intus_home.png"
import intus_appt_summary from "../images/intus/intus_appt_summary.png"
import intus_new from "../images/intus/intus_new.png"

const projectProps = [
    {
        title: "ACTIVE>360",
        timeline: "2020 - PRESENT",
        description: "Working full-time as a (mostly) frontend developer and UI designer on a real time event processing application.",
        images: [
            {
                id: "a360_event",
                url: a360_event,
                alt: "Example of an event screen"
            },
            {
                id: "a360_aggregate",
                url: a360_aggregate,
                alt: "Example of an aggregate screen"
            },
            {
                id: "a360_watcher",
                url: a360_watcher,
                alt: "Example of an watcher screen"
            }
        ]
    },
    {
        title: "INTUS CARE",
        timeline: "2018 - 2020",
        description: "Founding member, full-stack developer and UI designer for an awarded health care startup.",
        images: [
            {
                id: "intus_home",
                url: intus_home,
                alt: "Image of home screen"
            },
            {
                id: "intus_appt_summary",
                url: intus_appt_summary,
                alt: "Image of appointment summary screen"
            },
            {
                id: "intus_new",
                url: intus_new,
                alt: "Image of new appointment screen"
            }
        ]
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