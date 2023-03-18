import * as React from "react"
import { Link } from "gatsby"
import Header from "../Header"

const ProjectTemplate = () => (
    <div>
        <Header
            title="ACTIVE>360"
            borderColor="border-blue"
        >
            <Link to="/">{"Back to home"}</Link>
        </Header>

        <div className="border-blue grid md:grid-cols-2 grid-cols-1">
            <div id="left" className="md:border-r border-b">
                Left side
            </div>
            <div id="right" className="border-b">
                Right side
            </div>
        </div>
    </div>
)

export default ProjectTemplate