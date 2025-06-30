// src/components/Hero.tsx
'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'motion'
import Link from 'next/link'

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)

  // Subtle upward fade on load via Motion One
  useEffect(() => {
    if (!textRef.current || window.matchMedia('(prefers-reduced-motion)').matches)
      return
    animate(
      textRef.current.children,
      { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
      { duration: 0.6, delay: 0.2, easing: 'ease-out', stagger: 0.1 }
    )
  }, [])

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* animated dot-texture */}
      <div className="absolute inset-0 bg-[url('/background-dots.svg')] opacity-5 animate-pulse-slow" />

      <div ref={textRef} className="relative z-10 space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Aimaan Khan
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
          Full-Stack Engineer · AI & ML Enthusiast · Cybersecurity Researcher
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
          >
            View Projects
          </Link>
          <Link
            href="/docs/resume/Resume_AimaanKhan.pdf"
            target="_blank"
            className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            Download Résumé
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}