import * as React from "react"
import DetailsSection from "../components/project/DetailsSection"
import ProjectTemplate from "../components/project/ProjectTemplate"
import response_global from "../images/statton/statton_response_global.png"
import welcome_wireframe from "../images/statton/wireframes/welcome_page_wireframe.png"
import question_wireframe from "../images/statton/wireframes/question_wireframe.png"
import response_wireframe from "../images/statton/wireframes/response_wireframe.png"
import welcome_mvp from "../images/statton/mvp/registration_mvp.png"
import question_mvp from "../images/statton/mvp/question_mvp.png"
import response_mvp from "../images/statton/mvp/response_mvp.png"
import question_db from "../images/statton/db/question.png"
import answer_db from "../images/statton/db/answer.png"
import response_db from "../images/statton/db/response.png"
import cookie from "../images/statton/cookie.png"
import redirect_snippet from "../images/statton/redirect_code.png"
import future from "../images/statton/future.png"
import share from "../images/statton/share.png"
import calculator_selection from "../images/statton/calculator_selection.png"
import statton_1 from "../images/statton/character/statton_1.png"
import statton_2 from "../images/statton/character/statton_2.png"
import statton_3 from "../images/statton/character/statton_3.png"
import statton_4 from "../images/statton/character/statton_4.png"
import statton_5 from "../images/statton/character/statton_5.png"
import statton_6 from "../images/statton/character/statton_6.png"

const Statton = () => (
    <ProjectTemplate
        title={"STATTON"}
        role={"Full-stack Web Application Development, Product Design"}
        team={"Just me"}
        briefParagraphs={[
            "Statton is a website that poses its users with a daily multiple choice question and allows them to view how the rest of the world responded.",
        ]}
        liveLink={"https://statton.netlify.app"}
    >
        <DetailsSection
            title={"THE IDEA"}
            tags={[]}
        >
            <p>On Statton, users answer a universal multiple choice question every day. After responding, they can view where they stand compared to the rest of the users.</p>

            <p>As an example, the question of the day could be concerning people’s preferred mode of communication in the digital age.</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md">
                    <img className="max-w-[900px] w-full" src={response_global} alt={"Sample Statton response page"} />
                </div>
            </div>

        </DetailsSection>

        <DetailsSection
            title={"MOCKUPS"}
            tags={[
                "figma"
            ]}
        >
            <p>I wanted the most common user journey to take just one minute to complete.</p>
            <p>For the minimum viable product I decided it would be best to have no user registration. This way onboarding for new users is seamless. Privacy concerns should also be alleviated given that none of the data can be linked to user information.</p>
            <p>Based on these requirements, I made the following wireframes for the MVP welcome, question, and responses page.</p>

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

            <p>In order to give the sense of a sturdy, trusted, math-y tool, I decided to follow 8-bit / Casio / graphic calculator aesthetics.</p>

            <div className="flex flex-col gap-[30px] items-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Example of graphing calculator selection UI</div>
                    </div>
                    <img className="max-w-[300px] w-full" src={calculator_selection} alt={"Example of graphing calculator UI"} />
                </div>
            </div>
        </DetailsSection>

        <DetailsSection
            title={"DEVELOPMENT"}
            tags={["sveltekit", "mysql", "prisma"]}
        >
            <p>I used Prisma as an ORM, which proved to be a very intuitive way to interact with my MySQL database.</p>
            <p>I hosted a MySQL database using PlanetScale for the published version of the site. I also installed MySQL and set up a database locally for development purposes.</p>
            <p>I ended up with three tables: Question, Answer, and Response.</p>

            <div className="flex justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className="flex flex-wrap items-start justify-center gap-[20px]">
                        <div><img className="max-w-[200px] w-full max-h-full" src={question_db} alt={"Question database model"} /></div>
                        <div><img className="max-w-[280px] w-full" src={answer_db} alt={"Answer database model"} /></div>
                        <div><img className="max-w-[200px] w-full" src={response_db} alt={"Response database model"} /></div>
                    </div>
                </div>
            </div>

            <p>I used this project as an opportunity to learn a new web application framework, Sveltekit.</p>
            <p>On the question page I used an html form to get default HTML form submit behavior, which reduced a lot of boilerplate code.</p>
            <p>When the user hits the submit button, I add a row to the Response table to track the newly submitted response. I also store a cookie on the browser session using the Question uuid as the name and the Answer uuid as the value.</p>

            <div className="flex justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Example of what a user response cookie looks like</div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center gap-[20px]">
                        <div><img className="max-w-[1000px] w-full" src={cookie} alt={"Browser cookie example"} /></div>
                    </div>
                </div>
            </div>

            <p>This cookie allows me to know whether a certain user has already responded to the question of the day without storing any private information about the user.</p>
            <p>It also allows me to keep the user on the valid pages of the app, ensuring they do not respond multiple times or view the response page before responding</p>

            <div className="flex justify-center my-[30px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Snippet from response page loadup server code</div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center gap-[20px]">
                        <div><img className="max-w-[1200px] w-full" src={redirect_snippet} alt={"Code snippet that shows redirection based on cookie"} /></div>
                    </div>
                </div>
            </div>

            <p>The downside of my use of cookies is that the response information is only stored on a single browser session. This means that a user can respond multiple times using different browsers or devices.</p>

        </DetailsSection>

        <DetailsSection
            title={"FUTURE"}
            tags={[]}
        >
            <p>With more data, I can display more interesting results. The response page should eventually be polling user responses and updating the response data in real time. I should also allow the user to view the data in different forms (e.g. bar chart, pie chart, bubble chart)</p>

            <div className="flex justify-center my-[30px]">
                <div className="flex bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"max-w-[900px] text-sm text-slate-400"}>
                        <div>Example of future Statton results page. The user has the ability to filter results, sign up using their number, view a Question Bank, and share their results.</div>
                    </div>
                    <img className="max-w-[900px] w-full" src={future} alt={"Sample Statton future page"} />
                </div>
            </div>
            <p>If users sign up using their number, this would allow me to send them a message notification when a new question comes out. I could also store a user's responses across browser sessions, allowing for a proper “Question Bank / History” experience.</p>
            <p>It is potentially interesting to view whether different user groups responded similarly or differently. By getting a user's birthday and the city they live in, I could enable filtering answers based on age range or location as seen on the left.</p>

            <p>The “Share” button in the bottom left would allow the user to share whether they were in the majority or minority of today's responses, revealing the question but not revealing the answers. This is meant to incentivize other users to go answer the question themselves.</p>
            <div className="flex justify-center my-[10px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Example Share UI</div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center gap-[20px]">
                        <div><img className="max-w-[300px] w-full" src={share} alt={"Example of Share UI"} /></div>
                    </div>
                </div>
            </div>

            <p>I was also thinking it would be fun if the website name, Statton, was personified as some fictional character. Statton would be the one that poses the questions to the user every day. This character would likely follow the 8-bit aesthetic. The current idea I most want to run with is some kind of 8-bit monkey detective.</p>
            <div className="flex justify-center my-[10px]">
                <div className="bg-slate-50 p-5 rounded-md flex flex-col gap-[10px]">
                    <div className={"text-sm text-slate-400"}>
                        <div>Moodboard for Statton character look and feel</div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-[20px]">
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

export default Statton

export function Head() {
    return (
        <>
            <title>{"Statton"}</title>
        </>
    )
}
