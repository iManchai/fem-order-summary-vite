import React from "react"
import HeroImage from '/images/illustration-hero.svg'
import Plan from "./components/Plan"
import CtaButton from "./components/CtaButton"
import CancelButton from "./components/CancelButton"


function App() {

  return (
    <main className="px-6 h-screen w-full grid place-content-center bg-[url('/images/pattern-background-mobile.svg')] bg-cover bg-no-repeat lg:bg-[url('/images/pattern-background-desktop.svg')]">
      <div className="flex flex-col rounded-2xl overflow-hidden max-w-xs lg:max-w-sm ">
        <img src={HeroImage} alt="" />
        <div className="bg-neutrals-100 text-center font-main p-5 lg:p-8">
          <h1 className="text-xl text-neutrals-400 font-black mb-4 lg:text-2xl">Order Summary</h1>
          <p className="text-sm text-neutrals-300">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <Plan />
          <CtaButton />
          <CancelButton />
        </div>
      </div>
    </main>
  )
}

export default App
