import * as React from "react"
import HomeHeader from "../components/home/HomeHeader"
import Projects from "../components/home/Projects"
import About from "../components/home/About"
import Footer from "../components/home/Footer"
import Fun from "../components/home/Fun"

const HomePage = () => (
  <div>
    <HomeHeader />

    <div className="flex flex-col gap-[80px] py-[40px]">
      <About />
      <Projects />
      <Fun />
    </div>

    <Footer />
  </div >
)

export default HomePage

export function Head() {
  return (
    <>
      <title>Teo Tsivranidis</title>
      <meta name="og:title" content="Teo Tsivranidis" />
      <meta name="og:site_name" content="Teo Tsivranidis" />

      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <meta name="description" content="Teo Tsivranidis is a software developer and designer currently based in Brooklyn, NY. This site contains information about Teo Tsivranidis work experience, his interests, and his contact information." />
      <meta name="og:description" content="Teo Tsivranidis is a software developer and designer currently based in Brooklyn, NY. This site contains information about Teo Tsivranidis work experience, his interests, and his contact information." />
    </>
  )
}