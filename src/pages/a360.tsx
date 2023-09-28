import * as React from "react"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"
import event_create from "../images/a360/event_create.mp4"
import base from "../images/a360/property/base.png"
import description from "../images/a360/property/description.png"
import text from "../images/a360/property/text.gif"
import business from "../images/a360/property/business.png"
import identifying from "../images/a360/property/identifying.gif"
import dropdown from "../images/a360/property/dropdown.gif"
import checkbox from "../images/a360/property/checkbox.png"
import watcher from "../images/a360/watcher.png"
import notification from "../images/a360/notification.png"
import rulesets from "../images/a360/rulesets.gif"
import rulesets_improved from "../images/a360/rulesets_improved.gif"
import rulesets_improved_filled from "../images/a360/rulesets_improved_filled.png"
import improved_v2 from "../images/a360/improved_v2.png"
import improved_v3 from "../images/a360/improved_v3.png"
import improved_v4 from "../images/a360/improved_v4.png"
import PropertyExample from "../components/a360/PropertyExample"

const A360 = () => (
    <ProjectTemplate
        title={"ACTIVE>360"}
        role={"Software Developer and UI Designer"}
        toolkit={"Web Application Development, Feature Design"}
        team={"Team of 24 people, 4 of which were frontend developers"}
        briefParagraphs={[
            "Active>360 is a real-time event processing platform. It allows businesses to create a profile of their customer interactions.",
            "The user creates events they want to observe (e.g. SMS Sent), calculations on those events (e.g. Weekly International SMS Messages), and notifications they want to send to their customers (e.g. International SMS Offer)."
        ]}
    >
        <DetailsSection
            title={"DEVELOPMENT"}
            tags={[
                "typescript",
                "react.js",
                "cypress"
            ]}
        >
            <p>{"One of the pages I built on Active>360 is the Event creation page. An Event refers to an input that the business wants to observe to potentially make calculations on. "}</p>
            <p>{"In the example below, we can imagine that a Ski Resort may want to send their customers reminders to buy a ski pass when certain weather conditions are met. A business user would then create an Event that comes into the system once a day, a Weather Forecast."}</p>
            <video src={event_create} controls autoPlay muted />
            <p>{"The process of creating an Event is divided into sections that the user can focus on individually. An event is most importantly composed of a name, and the fields (the info) that is attached to each incoming instance of the event. In the Weather Forecast event example Forecast Date, Temperature and Snowfall Info seem like appropriate fields we want to know about."}</p>
            <p>{"I ended up creating several other object pages, using a lot of the same infrastructure. To make sure everything works well, I used cypress to build tests for each page."}</p>

        </DetailsSection>
        <DetailsSection
            title={"INFRASTRUCTURE"}
            tags={[
                "typescript",
                "react.js",
                "oop" // TODO: make this object oriented programming
            ]}
        >
            <p>{"The application makes extensive use of input forms. I took it upon myself to create input component infrastructure in a generic, object oriented manner."}</p>
            <p>{"My base unit ended up being the BaseProperty, a component that renders a label and a value."}</p>

            <div className="flex justify-center my-[50px]">
                <PropertyExample
                    title="<BaseProperty />"
                    img={base}
                    widthPx="157" // 628
                    subtitle="In the example above, Favorite Fruit is the label and an image of a fig is the value"
                />
            </div>

            <p>{"I built several other React components on top of BaseProperty to abstract and share logic such as styling, validity, optional/required, readonly/edit, dependent inputs, loading dropdown items based on a query."}</p>

            <div className="grid gap-[100px] grid-cols-1 md:grid-cols-2 my-[50px] items-center justify-center py-[30px]">
                <PropertyExample
                    title="<TextProperty />"
                    img={text}
                    minWidthPx="200"
                    widthPx="450" // 1200
                    subtitle="Renders the value as a text input when in edit mode and regular text when in readonly mode"
                />
                <PropertyExample
                    title="<TextAreaProperty />"
                    img={description}
                    minWidthPx="371"
                    widthPx="557" // 2228
                    subtitle="Renders the value as a resizable text area input when in edit mode and regular text when in readonly mode"
                />
                <PropertyExample
                    title="<BusinessNameProperty />"
                    img={business}
                    minWidthPx="272"
                    widthPx="408" // 1632 
                    subtitle="The user is required to fill this in, as denoted by the star"
                />
                <PropertyExample
                    title="<IdentifyingNameProperty />"
                    img={identifying}
                    minWidthPx="299"
                    widthPx="449" // 1796
                    subtitle="This property has custom validation logic relevant to an \'Identifying Name\' built into it "
                />
                <PropertyExample
                    title="<DropdownProperty />"
                    img={dropdown}
                    minWidthPx="194"
                    widthPx="292" // 1168
                    subtitle="Renders the value as a dropdown of passed in options when in edit mode"
                />
                <PropertyExample
                    title="<CheckboxProperty />"
                    img={checkbox}
                    minWidthPx="73"
                    widthPx="110" // 440
                    subtitle="Renders the value as a checkbox which can be toggled when in edit mode"
                />
            </div>

        </DetailsSection>

        <DetailsSection
            title={"UI DESIGN"}
            tags={["figma"]}
        >
            <p>{"Let us revisit the ski resort example from above. In addition to the Weather Forecast Event, the resort would create a Notification which they want to send to their customers when it is a good time to ski. "}</p>

            <div className="flex justify-center">
                <img style={{ minWidth: `${150}px`, maxWidth: `${900}px` }} src={notification} alt={"alt"} />
            </div>

            <p>{"The resort also creates a Watcher to write logic that “watches” the incoming events and sends the desired notification when certain conditions are met. For example, if there is a particularly snowy day coming up, or if the ski season is ending."}</p>

            <div className="flex justify-center">
                <img style={{ minWidth: `${150}px`, maxWidth: `${900}px` }} src={watcher} alt={"alt"} />
            </div>

            <p>{"The task at hand was to create the UI for populating Notification fields when a Watcher conditions are met, and the Notification is sent."}</p>
            <p>{"In the example above, we need to decide how to populate Where, When, and Inches of Snow, based on how the Watcher was triggered (whether it was because of Weather Forecast or because of some other access of 360)."}</p>

            <div className="flex justify-center">
                <img style={{ minWidth: `${150}px`, maxWidth: `${900}px` }} src={rulesets} alt={"alt"} />
            </div>

            <p>{"The dropdown options that appear above (Default / Weather Forecast) are fully derived from the Watcher’s Send Conditions above. Because there is a 1-1 link between a send condition, and a ruleset definition for that condition, I decided to design a UI which more closely couples the two."}</p>

            <div className="flex justify-center">
                <img style={{ minWidth: `${150}px`, maxWidth: `${1100}px` }} src={rulesets_improved} alt={"alt"} />
            </div>

            <p>{"And once the user fills in the send conditions and the outputs for each trigger:"}</p>

            <div className="flex justify-center">
                <img style={{ minWidth: `${150}px`, maxWidth: `${1200}px` }} src={rulesets_improved_filled} alt={"alt"} />
            </div>

            <p>{"The re-design approach I took connects the send conditions and the output definitions into one section. I made several variations of this design to see what fits our application’s aesthetic and what people seemed to like the most."}</p>


            <div className="flex flex-wrap justify-center">
                <img src={improved_v2} alt={"alt"} />
                <img src={improved_v3} alt={"alt"} />
                <img src={improved_v4} alt={"alt"} />
            </div>


        </DetailsSection>

    </ProjectTemplate>
)

export default A360
