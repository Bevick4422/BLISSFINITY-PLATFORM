
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"
import Performance from "@/components/home/Performance"
import HowItWorks from "@/components/home/HowItWorks"
import Community from "@/components/home/Community"
import Roadmap from "@/components/home/Roadmap"
import FAQ from "@/components/home/FAQ"
import CTA from "@/components/home/CTA"
import Footer from "@/components/home/Footer"
import DashboardPreview from "@/components/home/DashboardPreview"
import Testimonials from "@/components/home/Testimonials"
import Integrations from "@/components/home/Integrations"

export default function Home() {
  return (
 <>
  <Navbar />
  <Hero />
  <Features />
  <Performance />
  <HowItWorks />
  <Community />
  <Roadmap />
  <FAQ />
  <CTA />
  <DashboardPreview />
  <Testimonials />
  <Integrations />
  <Footer />
</>

  )
}