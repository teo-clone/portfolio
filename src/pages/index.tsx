import * as React from "react"
import HomeHeader from "../components/home/HomeHeader"
import Projects from "../components/home/Projects"
import About from "../components/home/About"
import Footer from "../components/home/Footer"

const HomePage = () => (
  <div>
    <HomeHeader />

    <div className="px-[30px] py-[30px]">
      <div>Software developer and designer currently in Brooklyn, NY</div>
    </div>

    <div className="flex flex-col gap-[40px]">
      <Projects />
      <About />
    </div>

    <Footer />
  </div >
)

export default HomePage
