import * as React from "react"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"
import response_global from "../images/statton/statton_response_global.png"
import response_filtered from "../images/statton/statton_response_filtered.png"
import welcome_wireframe from "../images/statton/wireframes/welcome_page_wireframe.png"
import question_wireframe from "../images/statton/wireframes/question_wireframe.png"
import response_wireframe from "../images/statton/wireframes/response_wireframe.png"
import welcome_mvp from "../images/statton/mvp/registration_mvp.png"
import question_mvp from "../images/statton/mvp/question_mvp.png"
import response_mvp from "../images/statton/mvp/response_mvp.png"
import calculator_selection from "../images/statton/calculator_selection.png"
import statton_1 from "../images/statton/character/statton_1.png"
import statton_2 from "../images/statton/character/statton_2.png"
import statton_3 from "../images/statton/character/statton_3.png"
import statton_4 from "../images/statton/character/statton_4.png"
import statton_5 from "../images/statton/character/statton_5.png"
import statton_6 from "../images/statton/character/statton_6.png"

const Intus = () => (
    <ProjectTemplate
        title={"STATTON"}
        role={"Full-stack Development, Product Design"}
        team={"Just me"}
        briefParagraphs={[
            "It is fascinating to compare our opinion to the global opinion.",
            "Statton is a website that poses its users with a daily multiple choice question and allows them to view how the rest of the world responded.",
            "<Add a live link here>"
        ]}
    >
        <DetailsSection
            title={"THE IDEA"}
            tags={[]}
        >
            <p>The most popular platforms that enable users to share their opinions and see how other opinions compare are Reddit, Twitter, and Facebook. These platforms certainly offer insights to peer opinions however they often lead to contentious debates and division due to the open-ended nature of the discussions, and the user ability to comment and react to other comments.</p>
            <p>On Statton, users answer a single multiple choice question which updates every day, with no further deliberation between users about which answer is best. Once the user answers, the application focuses on the ability to view where you stand on a certain question compared to the rest of the globe.</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={response_global} alt={"Sample Statton response page"} />
                </div>
            </div>

            <p>In the example above, the user answered "Video call" to the question of the day, "What's your preferred mode of communication in the digital age?"</p>
            <p>They are then presented with a pie chart of the global responses, with their answer bolded and their answer's slice of the pie chart filled in darker.</p>
            <p>The user also has the ability to view responses filtered by some factor. In the example below, the user filters responses to see how users that are between the ages of 11 and 25 answered. It could be interesting for the user to compare different how different groups answer in case there are dramatic differences.</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={response_filtered} alt={"Sample Statton response page"} />
                </div>
            </div>
        </DetailsSection>

        <DetailsSection
            title={"MOCKUPS"}
            tags={[
                "figma"
            ]}
        >
            <p>I wanted the app to be as easy and simple to use as possible. Ideally, the user should be able to go through the full application flow in one minute or so.</p>
            <p>For the minimum viable product I decided it would be best to have no registration necessary, simply a question and statistics on user responses. This way the onboarding is seemless, and there are minimal to no privacy concerns.</p>
            <p>I made the following wireframes for the welcome page, question page, and responses page.</p>

            <div className="flex flex-row flex-wrap gap-[30px] justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Wireframe of welcome page</div>
                    </div>
                    <img className="max-w-[600px] w-full" src={welcome_wireframe} alt={"Wireframe of Statton welcome page"} />
                </div>
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Wireframe of question page</div>
                    </div>
                    <img className="max-w-[600px] w-full" src={question_wireframe} alt={"Wireframe of Statton question page"} />
                </div>
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Wireframe of results page</div>
                    </div>
                    <img className="max-w-[600px] w-full" src={response_wireframe} alt={"Wireframe of Statton response page"} />
                </div>
            </div>

            <p>I then converted the wireframes into high fidelity mockups of the minimally application.</p>

            <div className="flex flex-row flex-wrap gap-[30px] justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Mockup of MVP welcome page</div>
                    </div>
                    <img className="max-w-[600px] w-full" src={welcome_mvp} alt={"Wireframe of Statton welcome page"} />
                </div>
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Mockup of MVP question page</div>
                    </div>
                    <img className="max-w-[600px] w-full" src={question_mvp} alt={"Wireframe of Statton question page"} />
                </div>
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Mockup of MVP results page</div>
                    </div>
                    <img className="max-w-[600px] w-full" src={response_mvp} alt={"Wireframe of Statton response page"} />
                </div>
            </div>

            <p>In order to give the user the sense of a sturdy, trusted, math-y tool, I decided I want the look and feel of the application to follow 8-bit / Casio / graphic calculator aesthetics.</p>
            <p>I used a "Pixeloid" font, and made buttons and user selections inverse the selected element from white background / black text to be black background / white text instead. I drew inspiration for this from how graphing calculators often handle selection.</p>

            <div className="flex flex-col gap-[30px] items-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Example of graphing calculator selection UI</div>
                    </div>
                    <img className="max-w-[300px] w-full" src={calculator_selection} alt={"Example of graphing calculator selection UI"} />
                </div>
            </div>
        </DetailsSection>

        <DetailsSection
            title={"DEVELOPMENT"}
            tags={["sveltekit", "postgres", "prisma"]}
        >
            <p>I used this project as an opportunity to learn some new web application framework, so I chose to develop it using Sveltekit.</p>
            <p>Expand on database table decisions, some components / pages ?.</p>
        </DetailsSection>

        <DetailsSection
            title={"FUTURE"}
            tags={[]}
        >
            <p>With more data more interesting results. Number sign up for user notifications and also response tracking, showing history and all that.</p>
            <p>[insert photos of more descriptive mockups]</p>

            <p>I was also thinking it would be fun if the website name, Statton, was personified as some fictional character. This character would likely follow the 8-bit aesthetic. The current idea I most want to run with is some kind of 8-bit monkey detective called Statton.</p>
            <div className="flex justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Moodboard for Statton character look and feel</div>
                    </div>
                    <div className="flex flex-wrap gap-[20px]">
                        <div><img className="max-w-[300px] w-full max-h-full" src={statton_1} alt={"Inspiration for Statton character"} /></div>
                        <div><img className="max-w-[240px] w-full" src={statton_2} alt={"Inspiration for Statton character"} /></div>
                        <div><img className="max-w-[200px] w-full" src={statton_3} alt={"Inspiration for Statton character"} /></div>
                        <div><img className="max-w-[200px] w-full" src={statton_4} alt={"Inspiration for Statton character"} /></div>
                        <div><img className="max-w-[200px] w-full" src={statton_5} alt={"Inspiration for Statton character"} /></div>
                        <div><img className="max-w-[300px] w-full max-h-full" src={statton_6} alt={"Inspiration for Statton character"} /></div>
                    </div>
                </div>
            </div>
        </DetailsSection>

    </ProjectTemplate>
)

export default Intus
