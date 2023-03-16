import * as React from "react"
import { Link } from "gatsby"

const A360 = () => (
    <div className="flex flex-col gap-10">
        {"This is the page for the Active>360 project!"}
        {/* back to home button */}
        <Link to="/">{"Back to home"}</Link>
    </div >
)

export default A360
