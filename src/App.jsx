import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from '../src/component/Button'
import Hero from '../src/component/Hero'
import heroImage1 from '../src/assets/hero1.png'

function App() {

  return (
    <>
      <Hero
        img={heroImage1}
        title="9Volt Logistics"
        text="Reliable logistics solutions connecting shippers with trusted carriers nationwide."
        subtext={[
          "Fast and dependable freight coordination",
          "Professional carrier partnerships",
          "Real-time communication and shipment updates",
          "Transportation solutions tailored to your business needs",
        ]}
      >
        <Button variant="gold">
          Get a Freight Quote
        </Button>

        <Button variant="dark">
          Become a Carrier
        </Button>
      </Hero>
    </>
  )
}

export default App
