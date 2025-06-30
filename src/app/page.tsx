// src/app/page.tsx
import Hero from '@/components/Hero'
import ExperienceSection from '@/components/ExperienceSection'
import TechStackSection from '@/components/TechStackSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import CertificatesSection from '@/components/CertificatesSection'
import PublicationsSection from '@/components/PublicationsSection'
import ContactSection from '@/components/ContactSection'
import {
  experiences,
  techStack,
  projects,
  educations,
  certificates,
  publications,
} from '@/data/data'

export default function Home() {
  return (
    <>
      <Hero />

      <ExperienceSection items={experiences} />

      <TechStackSection items={techStack} />

      <ProjectsSection items={projects} />

      <EducationSection items={educations} />

      <CertificatesSection items={certificates} />

      <PublicationsSection items={publications} />

      <ContactSection />

     
    </>
  )
}