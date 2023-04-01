import * as React from "react"
import ProjectSection from "../components/project/ProjectSection"
import ProjectTemplate from "../components/project/ProjectTemplate"

const Intus = () => (
    <ProjectTemplate
        title={"INTUS"}
        role={"Co-founder, Software Developer and UI Designer"}
        toolkit={"Product Strategy, Mobile Development, Product Design"}
        team={"Evan Jackson, Robbie Felton, Samuel Prado"}
        briefParagraphs={["Intus Care is a health care startup whose mission is to connect the elderly and disabled in need of care with home care providers, through the use of a mobile application."]}
    >
        <ProjectSection
            title={"THE PROBLEM"}
            paragraphs={[
                "All over the world, elderly are in need of care. This can be physical care but also emotional, since many elders struggle from social isolation. Those seeking help traditionally either get care in a nursing home, or at home. Elders that would prefer to receive help in the comfort of their own home, may be blocked by the high cost of at-home care.",
                "Intus aims to decrease the high cost of care by removing administrative costs associated with at-home care. Through the application the user would be able to request care both for physical but also for companionship. It also aims to improve patient - caregiver pairing through the use of an algorithm related to the patient's background.",
                "Through the application the user can schedule appointments for physical assistance such as: preventative care and screening, assisted activities of daily living, diet advising, medication reminders but also mental health assistance such as: companionship, memory recalling stimulus exercises."
            ]}
        />
        <ProjectSection
            title={"WHAT WE DID"}
            paragraphs={[
                "Through continued customer interaction and research, I created iterative mocks of the application.",
                "<reflect differences between versions>",
            ]}
            tagLabels={[
                "figma",
                "swift",
                "node.js",
                "oop" // TODO: make this object oriented programming
            ]}
        />
        {/* <ProjectSection
            title={"WHAT WE COULD DO"}
            paragraphs={[
                "Ended up developing a minimum viable product in Swift / Node.js. A lesson I learned from the experience was that it was too early to develop the application, as the product wasn't fully stable just yet. It would have been more worthwhile to continue iterating on the prototype, and using prototype interactions for the purpose of demos and market research.",
                "Critical feature in the future would be a good patient / caregiver matching algorithm.",
            ]}
        /> */}
        {/* <ProjectSection
            title={"INTUS IN THE NEWS"}
            paragraphs={[
                "Boston Globe: These hot R.I. startups are getting lots of buzz, October 2019",
                "MassChallenge Awards over $1M in Cash Prizes to Top Boston and Rhode Island Startups, October 2019",
            ]}
        /> */}
    </ProjectTemplate>
)

export default Intus
