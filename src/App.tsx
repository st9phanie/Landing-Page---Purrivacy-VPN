import { Layout } from "./components/shared/Layout"
import { Hero } from "./components/sections/Hero"
import { Features } from "./components/sections/Features"
import { Pricing } from "./components/sections/Pricing"
import { CTA } from "./components/sections/CallToAction"

function App() {

  return (
    <>
      <Layout title="PurrivacyVPN" >
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </Layout>
    </>
  )
}

export default App
