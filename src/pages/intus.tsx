import * as React from "react"
import intus_mock from "../images/intus/intus_mock_v1.mp4"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"

const Intus = () => (
    <ProjectTemplate
        title={"INTUS CARE"}
        role={"Co-founder, Software Developer and UI Designer"}
        toolkit={"Product Strategy, Mobile Development, Product Design"}
        team={"Evan Jackson, Robbie Felton, Samuel Prado"}
        briefParagraphs={["Intus Care is a health care startup whose mission is to connect the elderly and disabled in need of care with home care providers, through the use of a mobile application."]}
    >
        <DetailsSection
            title={"THE PROBLEM"}
            tags={[]}
        >

            <p>{"All over the world, elderly are in need of physical and mental care. Elders that would prefer to receive help in the comfort of their own home, may be blocked by the high cost of at-home care."}</p>
            <p>{"Intus aims to enable elderly patients to schedule at home care through the use of a mobile application. Through the application the user can schedule appointments for physical assistance (i.e. preventative care and screening), and also for mental assistance (i.e. memory recalling stimulus exercises)."}</p>

            <div className="flex justify-center">
                <div className="max-w-xs bg-slate-50 p-5 rounded-md">
                    <video src={intus_mock} autoPlay loop muted className="rounded-md" />
                </div>
            </div>

        </DetailsSection>

        <DetailsSection
            title={"WHAT WE DID"}
            tags={[
                "figma",
                "swift",
                "node.js",
                "oop" // TODO: make this object oriented programming
            ]}
        >

            <p>{"Through continued customer interaction and research, I created iterative mocks of the application."}</p>
            <p>{"<reflect differences between versions>"}</p>

        </DetailsSection>

        <DetailsSection
            title={"WHAT WE COULD DO"}
            tags={[]}
        >

            <p>{"Ended up developing a minimum viable product in Swift / Node.js. A lesson I learned from the experience was that it was too early to develop the application, as the product wasn't fully stable just yet. It would have been more worthwhile to continue iterating on the prototype, and using prototype interactions for the purpose of demos and market research."}</p>
            <p>{"Critical feature in the future would be a good patient / caregiver matching algorithm."}</p>

        </DetailsSection>

        <DetailsSection
            title={"INTUS IN THE NEWS"}
            tags={[]}
        >
            <a href="https://www.bostonglobe.com/metro/rhode-island/2019/10/04/these-hot-startups-are-getting-lots-buzz/1NEu7HIDHZvqvIMrdH7RSN/story.html">
                <i>Boston Globe: These hot R.I. startups are getting lots of buzz, October 2019</i>
            </a>
            <a href="https://masschallenge.org/news/masschallenge-awards-over-1m-cash-prizes-top-boston-rhode-island-startups/">
                <i> MassChallenge Awards over $1M in Cash Prizes to Top Boston and Rhode Island Startups, October 2019 </i>
            </a>
        </DetailsSection>

    </ProjectTemplate>
)

export default Intus
