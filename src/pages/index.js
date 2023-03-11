import * as React from "react"
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/About"
import Footer from "../components/Footer"

const HomePage = () => (
  <div>
    <Header />

    <div className="px-[20px] py-[35px]">
      <div>Software developer and designer based out of Brooklyn, NY</div>
    </div>

    <div className="flex flex-col gap-[40px]">
      <Projects />
      <About />
    </div>

    <Footer />
  </div >
)

export default HomePage
