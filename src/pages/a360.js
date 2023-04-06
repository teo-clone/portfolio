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
                { type: 'paragraph', value: "The application screens make extensive use of input forms such as text inputs, dropdowns, and others. To address this, I created input component infrastructure that abstracts common functionality." },
                { type: 'paragraph', value: "To begin, I created a BaseProperty component that can render a label and either an input component in edit mode or display the property value otherwise." },
                { type: 'paragraph', value: "Building on this, I developed more specific components like TextProperty, TextAreaProperty, DropdownProperty, and CheckboxProperty, which determine the type of input form to render in edit mode." },
                { type: 'media', value: properties, mediaAlt: "Images of components described above", mediaType: "image" },
                { type: 'paragraph', value: "The BaseProperty component also includes validity logic that renders an error decorator to warn the user of any possible issues with the input value." },
                { type: 'paragraph', value: "Leveraging this functionality, I created specialized components such as BusinessNameProperty and IdentifyingNameProperty, both of which are built on top of TextProperty. These components centralize the logic for validating business names and identifying names." },
                { type: 'paragraph', value: "[gifs of different types of errors related to business names and identifying names]" },
                { type: 'paragraph', value: "[further advancements]" },
                { type: 'paragraph', value: "[gif of an <EntityDropdown /> and a <FolderDropdown />, editing them and how they affect each other (unsetting and filtering), and deprecation warnings on both." },
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
                { type: 'paragraph', value: "[photos of mock iterations]" },
            ]}
            tags={[
                "figma",
            ]}
        />
    </ProjectTemplate>
)

export default A360
