import * as React from "react"

import greek_visions from "../../images/fun/greek_visions.png"
import collage from "../../images/fun/collage/lizard_collage.png"
import la_luna from "../../images/fun/la_luna.png"
import cover from "../../images/playlists.gif"
import shelves from "../../images/fun/shelves.jpeg"


import ExternalLinkButton from "../ExternalLinkButton"
import ProjectThumbnail from "./ProjectThumbnail"


const funProjectProps = [
    {
        title: "GREEK VISIONS REDESIGN",
        timeline: "2023",
        description: "Made a redesign for the e-shop of a popular instagram archive of greek culture.",
        image: {
            id: "greek_visions",
            src: greek_visions,
            alt: "Image of redesigned e-shop home screen"
        },
        externalLinks: [
            {
                label: "Figma Prototype",
                to: "https://www.figma.com/proto/DDmwBH9rQIG9p717VWtwen/greek_visions?page-id=77%3A223&node-id=77-310&starting-point-node-id=77%3A310&mode=design&t=AuQxp67DAswhQyn5-1"
            },
            {
                label: "@greekvisions",
                to: "https://www.instagram.com/greekvisions/"
            },
        ]
    },
    {
        title: "DIY",
        timeline: "",
        description: "I want to learn how to make more things with my hands. I am currently working on a set of bedside shelves.",
        image: {
            id: "shelves",
            src: shelves,
            alt: "Photo of materials used to make shelves"
        },
    },
    {
        title: "PLAYLIST COVERS",
        timeline: "",
        description: "I sometimes make covers for my playlists on Spotify.",
        image: {
            id: "playlist_cover",
            src: cover,
            alt: "Playlist cover for a playlist named Heartbeat"
        },
    },
    {
        title: "VIDEO",
        timeline: "",
        description: "I will make a video of a trip I go on occasionally to commemorate it.",
        image: {
            id: "la_luna",
            src: la_luna,
            alt: "Cover photo for Antiparos video"
        },
        externalLinks: [
            {
                label: "Antiparos (2022)",
                to: "https://www.youtube.com/watch?v=gvYQw9-bzpQ"
            },
        ]
    },
    {
        title: "COLLAGE",
        timeline: "",
        description: "Having some fun making collages on photoshop",
        image: {
            id: "collage",
            src: collage,
            alt: "Example image of a collage I've made"
        }
    },
]

const Fun = () => (
    <div id="fun" className="border-red grid md:grid-cols-2 grid-cols-1 border-t">
        {funProjectProps.map((props) =>
            <ProjectThumbnail
                key={props.title}
                {...props}
            >
                {props.externalLinks && props.externalLinks.map((link) =>
                    <ExternalLinkButton label={link.label} to={link.to} />
                )}
            </ProjectThumbnail>
        )}
    </div>
)

export default Fun