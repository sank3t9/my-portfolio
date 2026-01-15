"use client"

import { useState, useEffect, useCallback } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sticky Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Sanket Shigaonkar</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">Software Engineer</h2>
              <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              Open to SWE/MLE/Data roles. <br/>Learning Multi-Agent Systems & GraphRAG Architectures.<br/>Open to Relocate | F-1 STEM OPT
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {[
                    { id: "about", label: "ABOUT ME" },
                    { id: "experience", label: "EXPERIENCE" },
                    { id: "projects", label: "PROJECTS" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`group flex items-center py-3 cursor-pointer`}
                      >
                        <span
                          className={`mr-4 h-px transition-all ${
                            activeSection === item.id
                              ? "w-16 bg-foreground"
                              : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                          }`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${
                            activeSection === item.id
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li>
                <a
                  href="https://github.com/sank3t9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/sanketshigaonkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:sanketalt09@gmail.com"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Scrollable Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About Me</h2>
              </div>
              <div className="text-muted-foreground">
                <p className="mb-4">
                  I am a Software Engineer currently pursuing my MS in Computer Science at SUNY Buffalo, driven by the
                  challenge of making complex systems feel simple. My work sits right at the edge of{" "}
                  <span className="font-medium text-foreground">AI and Backend Engineering</span>, where I focus on
                  turning experimental models into reliable, high-speed software.
                </p>
                <p className="mb-4">
                  Right now, I am deep into <span className="font-medium text-foreground">RAG pipelines</span> and{" "}
                  <span className="font-medium text-foreground">real-time data infrastructure</span>. I love working
                  across the entire stack—whether that means optimizing a database query for speed or fine-tuning an LLM
                  for better accuracy. My goal is always the same: build tools that work flawlessly in the real world.
                </p>
                <p className="mb-4">
                  Previously, I engineered scalable solutions at{" "}
                  <span className="font-medium text-foreground">NetCore Solutions</span> and built privacy-focused
                  synthetic data pipelines at <span className="font-medium text-foreground">Dentite</span>, tackling
                  everything from automated risk assessments to HIPAA-compliant AI systems.
                </p>
                <p>
                  In my spare time I am usually shooting hoops, watching the Warriors game (Steph is the GOAT), or
                  unwinding to The Weeknd.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {/* Dentite */}
                  <li className="mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="group relative pb-1">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="relative z-10">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-medium leading-snug text-foreground">
                            <span className="font-medium leading-tight text-foreground text-base">
                              Software Engineer Intern · Dentite
                            </span>
                          </h3>
                          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap">
                            Jan 2025 — Jun 2025
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Buffalo, NY</p>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Engineered a synthetic data generation pipeline creating thousands of insurance card images via SVG/PNG templates.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Optimized extraction accuracy by benchmarking and prompt-engineering multiple LLMs across 6 major US insurance providers.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Reduced model latency by 30% through optimization techniques.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Architected an automated claim reclamation feature that utilized extracted data to identify missed revenue, contributing to a 15% projected uplift for dental practices.</span>
                          </li>
                        </ul>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {["Python", "LLMs", "REST APIs", "HIPAA Compliance", "Data Pipelines"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-[#122b39] px-3 py-1 text-xs font-medium leading-5 text-[#5eead4]">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* NetCore Solutions */}
                  <li className="mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="group relative pb-1">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="relative z-10">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-medium leading-snug text-foreground">
                            <span className="font-medium leading-tight text-foreground text-base">
                              Software Engineer · NetCore Solutions Pvt Ltd
                            </span>
                          </h3>
                          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap">
                            Jan 2023 — Jul 2024
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Mumbai, India</p>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Drove a 10% efficiency gain in collections by engineering a multilingual intent classification pipeline (5 Indic languages) using OpenAI Whisper and Llama, optimizing repayment forecasting.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Automated credit risk assessment by configuring Experian PowerCurve strategies, eliminating manual underwriting for standard applications and ensuring real-time compliance.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Streamlined customer onboarding by implementing Business Rules Engine (BRE) workflows, reducing processing overhead and accelerating loan disbursement cycles.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>Architected an internal Loan Management System (LMS), validating credit-bureau APIs with Postman/SoapUI for 100% integrity.</span>
                          </li>
                        </ul>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {["Python", "OpenAI Whisper", "Llama", "Experian PowerCurve", "Postman"].map(
                            (tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-[#122b39] px-3 py-1 text-xs font-medium leading-5 text-[#5eead4]">
                                  {tech}
                                </div>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>

                </ol>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {/* Accio AI */}
                  <li className="mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="group relative pb-1">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="relative z-10">
                        <h3>
                          <a
                            href="https://github.com/sank3t9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                          >
                            <span>Accio AI - Conversational RAG Agent</span>
                            <span className="inline-block ml-1">
                              <svg
                                className="w-4 h-4 inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-muted-foreground">
                          Engineered a Generative AI agent by fine-tuning Qwen-4B on 25,200+ samples via QLoRA-SFT for
                          domain-specific reasoning. Architected a sub-100ms RAG pipeline with FAISS and Flash Attention
                          2. Achieved 77% accuracy and 56% loss reduction via RLHF alignment.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {["Qwen-4B", "Hugging Face", "FAISS", "LangChain", "Streamlit"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-[#122b39] px-3 py-1 text-xs font-medium leading-5 text-[#5eead4]">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Tickr */}
                  <li className="mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="group relative pb-1">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="relative z-10">
                        <h3>
                          <a
                            href="https://github.com/sank3t9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                          >
                            <span>Tickr - Live Crypto Price Monitor</span>
                            <span className="inline-block ml-1">
                              <svg
                                className="w-4 h-4 inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-muted-foreground">
                          Architected a real-time streaming platform with FastAPI and Kafka, ingesting high-frequency
                          market data via Docker. Engineered a sub-millisecond alert engine using Redis for O(1)
                          lookups. Deployed an event-driven AWS Lambda backend with DynamoDB for auto-scaling
                          reliability.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {["FastAPI", "Apache Kafka", "Redis", "AWS Lambda", "Docker", "DynamoDB"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-[#122b39] px-3 py-1 text-xs font-medium leading-5 text-[#5eead4]">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* DeepDish */}
                  <li className="mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="group relative pb-1">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="relative z-10">
                        <h3>
                          <a
                            href="https://github.com/sank3t9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                          >
                            <span>DeepDish - Deep Learning Calorie Estimator</span>
                            <span className="inline-block ml-1">
                              <svg
                                className="w-4 h-4 inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-muted-foreground">
                          Engineered a multi-view food recognition pipeline using YOLOv8 on ECUST Dataset, achieving
                          0.975 mAP on 19 classes. Architected a volumetric engine using GrabCut and coin calibration to
                          solve 2D-to-3D depth ambiguity. Deployed a real-time Streamlit calorie tracker with less than
                          10% error.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {["Python", "PyTorch", "YOLOv8", "OpenCV", "Streamlit"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-[#122b39] px-3 py-1 text-xs font-medium leading-5 text-[#5eead4]">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Smart YOLO Traffic System */}
                  <li className="mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="group relative pb-1">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="relative z-10">
                        <h3>
                          <div className="inline-flex items-baseline font-medium leading-tight text-foreground group/link text-base">
                            <span>Smart YOLO Intersection Traffic System</span>
                            <span className="ml-2 inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                              Patent Filed
                            </span>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-muted-foreground">
                          Co-invented a real-time congestion controller utilizing YOLOv8 for vehicle detection and
                          Residual LSTMs for predictive signal timing. The system optimizes traffic flow at
                          intersections using computer vision and deep learning.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {["YOLOv8", "Residual LSTM", "Computer Vision", "Deep Learning"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-[#122b39] px-3 py-1 text-xs font-medium leading-5 text-[#5eead4]">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  Tailwind CSS
                </a>
                , deployed on{" "}
                <a
                  href="https://vercel.com"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
