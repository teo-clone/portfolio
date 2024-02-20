import * as React from "react"
import intus_mock from "../images/intus/intus_mock_v1.mp4"
import team from "../images/intus/intus_team.jpg"
import home_v1 from "../images/intus/home_evolution/v1.png"
import home_v2 from "../images/intus/home_evolution/v2.png"
import home_v3 from "../images/intus/home_evolution/v3.png"
import home_v4 from "../images/intus/home_evolution/v4.png"
import service_v0 from "../images/intus/services/v0.png"
import service_v1 from "../images/intus/services/v1.png"
import service_v2 from "../images/intus/services/v2.png"
import service_v3 from "../images/intus/services/v3.png"
import availability_v1 from "../images/intus/availability/v1.png"
import availability_v21 from "../images/intus/availability/v21.png"
import availability_v22 from "../images/intus/availability/v22.png"
import availability_v31 from "../images/intus/availability/v31.png"
import availability_v32 from "../images/intus/availability/v32.png"
import caregiver_v1 from "../images/intus/caregiver_preferences/v1.png"
import caregiver_v2 from "../images/intus/caregiver_preferences/v2.png"
import caregiver_v3 from "../images/intus/caregiver_preferences/v3.png"
import summary_v1 from "../images/intus/summary/v1.png"
import summary_v2 from "../images/intus/summary/v2.png"
import summary_v3 from "../images/intus/summary/v3.png"
import summary_v4 from "../images/intus/summary/v4.png"
import final_home from "../images/intus/final_care_request/home.png"
import final1 from "../images/intus/final_care_request/new_job1.png"
import final2 from "../images/intus/final_care_request/new_job2.png"
import final3 from "../images/intus/final_care_request/new_job3.png"
import final4 from "../images/intus/final_care_request/new_job4.png"
import final5 from "../images/intus/final_care_request/new_job5.png"
import final_review from "../images/intus/final_care_request/new_job_review.png"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"
import AnimatedCarousel from "../components/AnimatedCarousel"

const Intus = () => (
    <ProjectTemplate
        title={"INTUS CARE"}
        role={"Co-founder, Full-stack Mobile Application Development, UI Design"}
        team={"Evan Jackson, Robbie Felton, Samuel Prado, Me"}
        briefParagraphs={["Intus Care is a health care startup whose mission is to connect the elderly and disabled in need of care with home care providers, through the use of a mobile application."]}
    >
        <DetailsSection
            title={"THE PROBLEM"}
            tags={[]}
        >

            <p>{"All over the world, the elderly population is in need of physical and mental care."}</p>
            <p>{"Intus aims to enable elderly patients to schedule at home care through the use of a mobile application. Through the application the user can schedule appointments for physical assistance (i.e. preventative care and screening), and also for mental assistance (i.e. memory recalling stimulus exercises)."}</p>

            <div className="flex justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md">
                    <video src={intus_mock} controls autoPlay loop muted className="max-w-xs w-full rounded-md" />
                </div>
            </div>

        </DetailsSection>

        <DetailsSection
            title={"WHAT WE DID"}
            tags={[
                "figma",
                "swift",
                "node.js",
                "oop"
            ]}
        >

            <p>{"Through continued customer interaction and market research, I created iterative mocks of the application."}</p>
            <p>{"As an example, here is how the \"Create a care request\" flow changed over time"}</p>

            <div className="flex justify-center flex-col items-center gap-[30px] my-[30px]">
                <AnimatedCarousel
                    label="Evolution of the home page"
                    imgs={[home_v1, home_v2, home_v3, home_v4]}
                />
                <AnimatedCarousel
                    label="Evolution of the service selection page"
                    imgs={[service_v0, service_v1, service_v2, service_v3]}
                />
                <AnimatedCarousel
                    label="Evolution of the caregiver preferences page"
                    imgs={[caregiver_v1, caregiver_v2, caregiver_v3]}
                />
                <AnimatedCarousel
                    label="Evolution of the request summary page"
                    imgs={[summary_v1, summary_v2, summary_v3, summary_v4]}
                />
            </div>

            <p>{"I ended up developing a minimum viable product in Swift / Node.js."}</p>
            <p>{"The functionality I achieved was to allow a care recipient to create an account and profile, go through the care request creation dialog, and submit it. The profile and request data for each user was stored in a database so that it persisted between login sessions."}</p>

            <div className="flex justify-center">
                <AnimatedCarousel
                    label={"Putting the final version of the \"Create a care request\" flow together:"}
                    imgs={[final_home, final1, final2, final3, final4, final5, final_review]}
                />
            </div>

        </DetailsSection>

        <DetailsSection
            title={"LESSONS LEARNED"}
            tags={[]}
        >

            <p>{"The biggest lesson I learned from the experience was that it was too early to begin developing the application while the product was not fully defined just yet."}</p>
            <p>{"As we continued our market research, we got differing opinions of what the exact scope of the application should be. We also found that the public health industry is heavily regulated, which could have created issues for us with our plan at the time."}</p>
            <p>{"It would have been more worthwhile to use a Figma prototype for the purpose of demos and market research, until the product reached a more stable state."}</p>
        </DetailsSection>

        <DetailsSection
            title={"FUTURE ADVANCEMENTS"}
            tags={[]}
        >

            <p>{"An important feature to add would be a caregiver / care recipient matching algorithm which would be used to effectively recommend caregivers to the user. The algorithm would likely be based on a number of factors such as: location proximity, languages spoken, prior experience that a caregiver has providing certain types of assistance."}</p>
            <p>{"We could also introduce hobbies / interests (e.g. reading, sports, film etc) on user and caregiver profiles to allow users to have a better idea of the personality of their patient / caregiver, before scheduling an initial visit."}</p>

        </DetailsSection>

        <DetailsSection
            title={"INTUS IN THE NEWS"}
            tags={[]}
        >
            <a className="underline text-blue" href="https://www.bostonglobe.com/metro/rhode-island/2019/10/04/these-hot-startups-are-getting-lots-buzz/1NEu7HIDHZvqvIMrdH7RSN/story.html">
                <i>Boston Globe: These hot R.I. startups are getting lots of buzz, October 2019</i>
            </a>
            <a className="underline text-blue" href="https://masschallenge.org/news/masschallenge-awards-over-1m-cash-prizes-top-boston-rhode-island-startups/">
                <i> MassChallenge Awards over $1M in Cash Prizes to Top Boston and Rhode Island Startups, October 2019</i>
            </a>

            <a className="underline text-blue" href="https://entrepreneurship.brown.edu/the-brown-venture-prize/2019-finalists/">
                <i>2019 Brown Venture Prize Finalists, Judges, and Event Press!</i>
            </a>

            <div className="flex justify-center">
                <div className={"bg-slate-50 p-5 rounded-md flex flex-col gap-[25px]"}>
                    <div className={"text-sm text-slate-400 flex flex-col gap-[10px]"}>
                        <div>Intus Care when we presented at Brown University Venture Prize in 2019.</div>
                        <div>From left to right: Me, Samuel Prado, Alexis Devine, Robbie Felton, Evan Jackson.</div>
                        <div>Alexis Devine (Program Manager at Lifespan) offered invaluable market research help to.</div>
                    </div>
                    <img className="max-w-[700px] w-full" src={team} alt={"alt"} />
                </div>
            </div>

        </DetailsSection>

    </ProjectTemplate>
)

export default Intus

export function Head() {
    return (
        <>
            <title>{"Intus Care"}</title>
        </>
    )
}
