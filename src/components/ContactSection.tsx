// src/components/ContactSection.tsx
'use client'

import Link from 'next/link'
import { Mail, Download, Linkedin, Github, Instagram } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-10">
          Interested in collaborating, offering an internship, or just want to say hi? Let’s chat!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Email & Résumé */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Email */}
            <Link
              href="mailto:aimaanjkhaan@gmail.com"
              className="w-full md:w-auto px-8 py-3 
                         bg-gradient-to-r from-blue-500 to-blue-700 
                         hover:from-blue-700 hover:to-black 
                         rounded-full text-white font-semibold text-center 
                         transition"
            >
              <Mail className="inline-block w-5 h-5 mr-2 align-middle" />
              <span className="align-middle">Email Me</span>
            </Link>

            {/* Download Résumé */}
            <Link
              href="/docs/resume/Resume_AimaanKhan.pdf"
              target="_blank"
              className="w-full md:w-auto px-8 py-3 
                         bg-gradient-to-r from-teal-400 to-teal-600 
                         hover:from-teal-600 hover:to-black 
                         rounded-full text-white font-semibold text-center 
                         transition"
            >
              <Download className="inline-block w-5 h-5 mr-2 align-middle" />
              <span className="align-middle">Download Résumé</span>
            </Link>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/aimaan-khan"
              target="_blank"
              className="w-full md:w-auto px-8 py-3 
                         bg-gradient-to-r from-[#0077B5] to-[#005582] 
                         hover:from-[#005582] hover:to-black 
                         rounded-full text-white font-semibold text-center 
                         transition"
            >
              <Linkedin className="inline-block w-5 h-5 mr-2 align-middle" />
              <span className="align-middle">/in/aimaan-khan</span>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/AiMk937"
              target="_blank"
              className="w-full md:w-auto px-8 py-3 
                         bg-gradient-to-r from-gray-700 to-gray-900 
                         hover:from-gray-900 hover:to-black 
                         rounded-full text-white font-semibold text-center 
                         transition"
            >
              <Github className="inline-block w-5 h-5 mr-2 align-middle" />
              <span className="align-middle">@AiMk937</span>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/__aimaan_k__/"
              target="_blank"
              className="w-full md:w-auto px-8 py-3 
                         bg-gradient-to-r from-pink-400 to-pink-600 
                         hover:from-pink-600 hover:to-black 
                         rounded-full text-white font-semibold text-center 
                         transition"
            >
              <Instagram className="inline-block w-5 h-5 mr-2 align-middle" />
              <span className="align-middle">@__aimaan_k__</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}