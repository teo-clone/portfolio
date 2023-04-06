import * as React from "react"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"
import event_create from "../images/a360/event_create.mp4"
import properties from "../images/a360/properties.png"

const A360 = () => (
    <ProjectTemplate
        title={"ACTIVE>360"}
        role={"Software Developer and UI Designer"}
        toolkit={"Web Application Development, Feature Design"}
        team={"Team of 24 people, 4 of which were frontend developers"}
        briefParagraphs={[
            "Active>360 is a real-time event processing platform. [It allows business users to create a profile of their customer interactions.] (word this a bit better).",
            "The user creates events they want to observe (e.g. SMS Sent), calculations on those events (e.g. Weekly International SMS Messages), and notifications they want to send to their customers (e.g. International SMS Offer)."
        ]}
    >
        <DetailsSection
            title={"DEVELOPMENT"}
            contents={[
                { type: 'paragraph', value: "One of the first pages I built on Active>360 is the Event creation page. This page allows the user to specify an Event, which refers to an input that will be added to the system. In the example below, this input is a Weather Forecast." },
                { type: 'paragraph', value: "The process of creating an Event is divided into sections that the user can focus on one at a time." },
                { type: 'paragraph', value: "First, the user chooses an Entity (e.g. Vermont Resident or Colorado Resident) to associate the Event with. After that, they should provide a business name, technical name (which is created automatically), and a description." },
                { type: 'paragraph', value: "Finally, the user can add Fields to the Event, specifying what information they want the Event to contain (e.g. Forecast Date, High Temperature, Low Temperature). These Fields can be put into Folders, creating a hierarchy." },
                { type: 'paragraph', value: "I ended up creating several other object pages, using a lot of the same infrastructure. To make sure everything works well, I used cypress to build tests for each page." },
                { type: 'media', value: event_create, mediaAlt: "Video showing event creation", mediaType: "video" },
            ]}
            tags={[
                "typescript",
                "react.js",
                "cypress"
            ]}
        />
        <DetailsSection
            title={"INFRASTRUCTURE"}
            contents={[
                { type: 'paragraph', value: "The application screens heavily rely on input forms like text inputs, dropdowns, and more. When I started working on the team the product was still very new, and we did not yet have fleshed out infrastructure for input components. I knew I wanted to make some input components that share common functionality." },
                { type: 'paragraph', value: "The first step of abstraction was to create a BaseProperty, which knows to render a label and either an input component in edit mode or otherwise the property value." },
                { type: 'paragraph', value: "On top of BaseProperty, I then built components like TextProperty, TextAreaProperty, DropdownProperty and CheckboxProperty which define the type of input form to render while in edit mode." },
                { type: 'media', value: properties, mediaAlt: "Images of components described above", mediaType: "image" },
                { type: 'paragraph', value: "BaseProperty also centralizes the shared validity / invalidity logic which is used to warn the user of possible issues with the value they have set, and also to disable saving an invalid object." },
                { type: 'paragraph', value: "I ended up building a BusinessNameProperty and IdentifyingNameProperty which are instances of TextProperty that define the logic of how to validate a business name or identifying name." },
            ]}
            tags={[
                "typescript",
                "react.js",
                "oop" // TODO: make this object oriented programming
            ]}
        />
        <DetailsSection
            title={"UI DESIGN"}
            contents={[
                { type: 'paragraph', value: "Computing Notification Fields in a Watcher" },
            ]}
            tags={[
                "figma",
            ]}
        />
    </ProjectTemplate>
)

export default A360
