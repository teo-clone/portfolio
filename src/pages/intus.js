import * as React from "react"
import { Link } from "gatsby"

const Intus = () => (
    <div className="flex flex-col gap-10">
        {"This is the page for the Intus project!"}
        {/* back to home button */}
        <Link to="/">{"Back to home"}</Link>
    </div >
)

export default Intus
