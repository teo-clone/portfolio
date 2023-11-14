import * as React from "react"
import { commitDateTime } from "../../commitDate"

const Footer = () => {
    return <div className="flex flex-col justify-center grow justify-center items-center pb-[40px] gap-[20px] text-sm">
        <div>
            theodore.tsivranidis@gmail.com
        </div>

        <div>
            +1 (857) 334-0332
        </div>

        <div className={"flex md:flex-row flex-col items-center gap-[3px]"}>
            <div>
                Built using Gatsby React.js and Tailwindcss.
            </div>
            <div>
                Hosted on Netlify.
            </div>
        </div>


        <div>
            Last updated: {commitDateTime}
        </div>
    </div>
}

export default Footer
