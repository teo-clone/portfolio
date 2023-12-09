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
        role={"Full-stack Web Application Development, UI Design"}
        team={"Team of 24 people, 4 of whom I worked alongside on developing the web application"}
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
            <div className="bg-slate-50 p-5 rounded-md my-[30px]">
                <video src={event_create} controls autoPlay loop muted />
            </div>
            <p>{"The process of creating an Event is divided into sections that the user can focus on individually. An event is most importantly composed of a name, and the fields that are attached to each incoming instance of the event. In the example above, Forecast Date, Temperature and Snowfall Info seem like appropriate fields we want to know about every time a new Weather Forecast event comes into the system."}</p>
            <p>{"I ended up creating several other object pages using a lot of the same infrastructure. To make sure pages worked as expected, I used cypress to build tests that tested visiting a page in readonly mode, editing a page, and saving a page with new information."}</p>

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

            <div className="flex justify-center my-[30px]">
                <PropertyExample
                    title="<BaseProperty />"
                    img={base}
                    subtitle="In the example above, Favorite Fruit is the label and an image of a fig is the value"
                />
            </div>

            <p>{"I built several other React components on top of BaseProperty to abstract and share logic such as styling, validity, optional/required, readonly/edit, dependent inputs, loading dropdown items based on a query."}</p>

            <div className="grid gap-[30px] grid-cols-1 lg:grid-cols-2 my-[30px]">
                <PropertyExample
                    title="<TextProperty />"
                    img={text}
                    subtitle="Renders the value as a text input when in edit mode and regular text when in readonly mode"
                />
                <PropertyExample
                    title="<TextAreaProperty />"
                    img={description}
                    subtitle="Renders the value as a resizable text area input when in edit mode and regular text when in readonly mode"
                />
                <PropertyExample
                    title="<BusinessNameProperty />"
                    img={business}
                    subtitle="The user is required to fill this in, as denoted by the star"
                />
                <PropertyExample
                    title="<IdentifyingNameProperty />"
                    img={identifying}
                    subtitle="This property has custom validation logic relevant to an Identifying Name built into it "
                />
                <PropertyExample
                    title="<DropdownProperty />"
                    img={dropdown}
                    subtitle="Renders the value as a dropdown of passed in options when in edit mode"
                />
                <PropertyExample
                    title="<CheckboxProperty />"
                    img={checkbox}
                    subtitle="Renders the value as a checkbox which can be toggled when in edit mode"
                />
            </div>

        </DetailsSection>

        <DetailsSection
            title={"UI DESIGN"}
            tags={["figma"]}
        >
            <p>{"Let us revisit the ski resort example from above. In addition to the Weather Forecast Event, the resort would create a Notification which they want to send to their customers when it is a good time to ski. "}</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={notification} alt={"alt"} />
                </div>
            </div>


            <p>{"The resort also creates a Watcher to write logic that “watches” the incoming events and sends the desired notification when certain conditions are met. For example, if there is a particularly snowy day coming up, or if the ski season is ending."}</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={watcher} alt={"alt"} />
                </div>
            </div>

            <p>{"The task at hand was to create the UI for populating Notification field values when a Watcher conditions are met, and the Notification is sent."}</p>
            <p>{"In the example above, we need to decide how to populate Where, When, and Inches of Snow, based on how the Watcher was triggered (whether it was because of Weather Forecast or because of some other access of 360)."}</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={rulesets} alt={"alt"} />
                </div>
            </div>

            <p>{"The dropdown options that appear above (Default / Weather Forecast) are fully derived from the Watcher’s Send Conditions above."}</p>
            <p>{"Because there is a one to one link between a send condition, and a ruleset definition for that condition, I decided to design a UI which more closely couples the two."}</p>
            <p>{"The new triggers section encompasses both the former \"SEND CONDITIONS\" section, and the new ruleset definition requirement."}</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={rulesets_improved} alt={"alt"} />
                </div>
            </div>

            <p>{"And once the user fills in the send conditions and the outputs for each trigger:"}</p>


            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={rulesets_improved_filled} alt={"alt"} />
                </div>
            </div>

            <p>{"I made variations of this design in order to highlight different text options which may improve readability, how longer conditions fit into the UI, and how we would present warnings to the user."}</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex flex-col items-center gap-[30px] bg-slate-50 p-5 rounded-md">
                    <div className={"text-sm text-slate-400"}>
                        {"Variation 1: shows user warnings"}
                    </div>
                    <img className="max-w-[1100px] w-10/12" src={improved_v2} alt={"alt"} />
                    <div className={"text-sm text-slate-400"}>
                        {"Variation 2: shows larger send condition on the Vermont Weather Forecast trigger"}
                    </div>
                    <img className="max-w-[1100px] w-10/12" src={improved_v3} alt={"alt"} />
                    <div className={"text-sm text-slate-400"}>
                        {"Variation 3: shows different wording"}
                    </div>
                    <img className="max-w-[1300px] w-full" src={improved_v4} alt={"alt"} />
                </div>
            </div>

        </DetailsSection>

    </ProjectTemplate>
)

export default A360
