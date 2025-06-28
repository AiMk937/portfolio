// src/app/page.tsx
import {
  getExperience,
  getProjects,
  getCertificates,
  getTechStack,
  getEducation,
} from '@/lib/api';

export default async function Home() {
  // Fetch content from Payload CMS
  const experiences  = (await getExperience())  || [];
  const projects     = (await getProjects())     || [];
  const certificates = (await getCertificates()) || [];
  const techStack    = (await getTechStack())    || [];
  const educations   = (await getEducation())    || [];

  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center leading-tight">
          Aimaan Khan
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-center text-gray-400 max-w-2xl">
          Full-Stack Engineer • AI & ML Enthusiast • Cybersecurity Researcher
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="px-6 py-3 border border-white font-semibold rounded-full hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </a>
        </div>
      </main>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-900 text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {exp.company} • {new Date(exp.startDate).toLocaleDateString()} –{' '}
                {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
              </p>
              <p className="text-gray-300">{exp.description}</p>
              {exp.documents?.length > 0 && (
                <ul className="mt-4 list-disc list-inside text-gray-300">
                  {exp.documents.map((doc, i) => (
                    <li key={i}>
                      <a href={doc.file.url} target="_blank" className="underline hover:text-blue-300">
                        {doc.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-center">
          {techStack.map((tech) => (
            <div key={tech.id} className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-700 capitalize">{tech.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{proj.problemStatement}</p>
              <details className="mb-2">
                <summary className="font-medium">Solution</summary>
                <p className="mt-1 text-gray-600">{proj.solution}</p>
              </details>
              {proj.features?.length > 0 && (
                <ul className="mb-2 list-disc list-inside text-gray-600">
                  {proj.features.map((f, i) => (
                    <li key={i}>{f.feature}</li>
                  ))}
                </ul>
              )}
              {proj.futureEnhancements?.length > 0 && (
                <ul className="mb-4 list-disc list-inside text-gray-600">
                  {proj.futureEnhancements.map((e, i) => (
                    <li key={i}>{e.enhancement}</li>
                  ))}
                </ul>
              )}
              <div className="flex gap-4">
                {proj.link && (
                  <a href={proj.link} target="_blank" className="underline">
                    Live
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" className="underline">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="education" className="bg-gray-100 text-black py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Qualifications</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {educations.map((edu) => (
            <div key={edu.id} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold">{edu.institution}</h3>
              <p className="text-gray-600 mb-2">
                {edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}
              </p>
              <p className="text-sm text-gray-500">
                {edu.startDate && new Date(edu.startDate).getFullYear()} –{' '}
                {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}{edu.score ? ` • ${edu.score}` : ''}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-100 p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {cert.organization} • {new Date(cert.issueDate).getFullYear()}
              </p>
              <a href={cert.certificateFile.url} target="_blank" className="text-blue-600 underline">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-400 mb-6">
            Want to collaborate, offer an internship, or just say hi? Feel free to reach out!
          </p>
          <a href="mailto:aimaanjkhaan@gmail.com" className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition">
            Email Me
          </a>
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/aimaan-khan" target="_blank" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/AiMk937" target="_blank" className="hover:underline">GitHub</a>
            <a href="https://aimk937.github.io/Portfolio1.1" target="_blank" className="hover:underline">Old Portfolio</a>
          </div>
        </div>
      </section>
    </>
  );
}