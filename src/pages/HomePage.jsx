import { useEffect } from 'react'
import Hero from '../components/Hero'
import InfoPills from '../components/InfoPills'
import ProjectGrid from '../components/ProjectGrid'

export default function HomePage() {
  useEffect(() => { document.title = "Megha's Portfolio" }, [])
  return (
    <>
      <Hero />
      <InfoPills />
      <ProjectGrid />
    </>
  )
}
