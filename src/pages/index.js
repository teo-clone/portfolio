import * as React from "react"
import Header from "../components/home/Header"
import Projects from "../components/home/Projects"
import About from "../components/home/About"
import Footer from "../components/home/Footer"

const HomePage = () => (
  <div>
    <Header />

    <div className="px-[20px] py-[35px]">
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
