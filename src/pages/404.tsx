import * as React from "react"
import GatsbyLinkButton from "../components/GatsbyLinkButton"

const ErrorPage = () => (
    <div className="p-5 flex flex-col items-center gap-[10px]">
        <div>
            Something seems to have gone wrong.
        </div >

        <GatsbyLinkButton
            label={"Back to Home >>"}
            to={"/"}
        />
    </div>
)

export default ErrorPage