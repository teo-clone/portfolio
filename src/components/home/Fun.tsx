import * as React from "react"

import greek_visions from "../../images/fun/greek_visions.png"
import la_luna from "../../images/fun/la_luna.png"
import cover from "../../images/fun/playlists.gif"
import shelves from "../../images/fun/shelves.gif"
import collages from "../../images/fun/collages.gif"

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
                label: "Figma",
                to: "https://www.figma.com/file/DDmwBH9rQIG9p717VWtwen/greek_visions?type=design&node-id=77-223&mode=design"
            },
            {
                label: "@greekvisions",
                to: "https://www.instagram.com/greekvisions/"
            },
        ]
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
            src: collages,
            alt: "Example image of a collage I've made"
        }
    },
    {
        title: "DIY",
        timeline: "",
        description: "I want to learn how to make more things with my hands. I recently made a set of bedside shelves. I am now working on re-upholstering my director's chair.",
        image: {
            id: "shelves",
            src: shelves,
            alt: "Photo of materials used to make shelves"
        },
    },
]

const Fun = () => (
    <div id="fun" className="border-red grid md:grid-cols-2 grid-cols-1 border-t">
        {funProjectProps.map((props) =>
            <ProjectThumbnail
                key={props.title}
                {...props}
            >
                {props.externalLinks && props.externalLinks.map((link, i) =>
                    <ExternalLinkButton key={i} label={link.label} to={link.to} />
                )}
            </ProjectThumbnail>
        )}
    </div>
)

export default Fun