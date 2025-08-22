"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Database,
  Globe,
  Server,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Calendar,
  Send,
  MapPin,
  Twitter,
  Instagram,
  Sparkles,
  Zap,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const skills = {
    "Programming Languages": [
      { name: "JavaScript", icon: Code },
      { name: "Python", icon: Code },
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Globe },
      { name: "Express", icon: Server },
      { name: "Node.js", icon: Server },
    ],
    Databases: [{ name: "MongoDB", icon: Database }],
    "Tools & Technologies": [
      { name: "RESTful APIs", icon: Globe },
      { name: "Agile Development", icon: Code },
      { name: "Software Testing", icon: Code },
    ],
  }

  const projects = [
    {
      title: "Internal CRM System",
      description:
        "Developed a comprehensive CRM system for lead tracking and client onboarding, reducing onboarding friction by 20%.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "RESTful APIs"],
      link: "https://portal.clickinpedia.io/",
      icon: Target,
    },
    {
      title: "Responsive UI Components",
      description:
        "Created reusable UI components from Figma prototypes, improving code maintainability and reducing developer onboarding time by 25%.",
      techStack: ["React", "JavaScript", "CSS", "Figma"],
      link: "#",
      icon: Sparkles,
    },
    {
      title: "Testing Framework Optimization",
      description:
        "Developed and optimized testing framework during internship, reducing overall testing time by 35% and achieving 95% code coverage.",
      techStack: ["JavaScript", "Testing Frameworks", "Unit Testing"],
      link: "#",
      icon: Zap,
    },
  ]

  const timeline = [
    {
      type: "experience",
      title: "Front End Developer",
      organization: "Clickinpedia Pvt",
      location: "Noida, India",
      period: "Dec 2023 - Present",
      description: [
        "Collaborated with cross-functional teams to develop an internal CRM system, streamlining lead tracking and client onboarding processes",
        "Engineered and integrated RESTful APIs using the MERN stack, ensuring seamless data flow and supporting responsive front-end implementations",
        "Coordinated with the design team to translate Figma prototypes into responsive, cross-browser interfaces, enhancing UI consistency and performance",
        "Revamped the codebase for improved maintainability and readability, reducing onboarding time for new developers by 25%",
        "Implemented new features to reduce client onboarding friction, contributing to a 20% increase in client acquisition",
      ],
      achievements: [
        "20% increase in client acquisition",
        "25% reduction in developer onboarding time",
        "Improved UI consistency and performance",
      ],
    },
    {
      type: "education",
      title: "Master of Computer Applications",
      organization: "Bennett University",
      location: "Greater Noida, UP",
      period: "Aug 2022 - May 2024",
      description: [
        "Comprehensive study of computer applications, software development, and modern programming paradigms",
        "Focus on web technologies, database management, and software engineering principles",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Electronic Commerce",
      organization: "Rajiv Academy For Technology And Management",
      location: "India",
      period: "Completed May 2022",
      description: [
        "Foundation in electronic commerce, digital business models, and technology integration",
        "Understanding of online business processes and digital marketing strategies",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-emerald-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <header className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <ThemeToggle />
        </motion.div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20 p-1 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img
                  src="/front-end-developer-headshot.png"
                  alt="Ashutosh Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold font-[var(--font-heading)] mb-6 bg-gradient-to-r from-foreground via-primary to-emerald-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ashutosh Yadav
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-primary font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Front End Developer
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting exceptional digital experiences with modern JavaScript frameworks. Passionate about creating
              user-centric, accessible applications that drive business growth and enhance user satisfaction.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="https://github.com/ashutoshyadav7891" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/ashutosh-yadav-825b0b250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="mailto:ashutoshyadav7891@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-12 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me
            </h2>

            <Card className="p-8 md:p-10 shadow-xl border-2 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I'm a dedicated Front End Developer based in Noida, UP, with a Master's in Computer Applications from
                  Bennett University. Currently working at Clickinpedia Pvt, I specialize in building responsive,
                  user-centric web applications using modern technologies like React, Next.js, and the MERN stack.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  My experience includes collaborating with cross-functional teams to develop internal CRM systems,
                  integrating RESTful APIs, and translating Figma prototypes into responsive interfaces. I'm passionate
                  about optimizing user experience and have successfully contributed to reducing client onboarding
                  friction by 20% and improving code maintainability.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    🚀 20% Client Acquisition Increase
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    ⚡ 25% Faster Developer Onboarding
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    🎯 95% Code Coverage Achievement
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-muted/30 to-primary/5" id="skills">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-16 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-muted/10">
                    <h3 className="font-bold font-[var(--font-heading)] mb-6 text-primary text-lg">{category}</h3>
                    <div className="space-y-4">
                      {skillList.map((skill, index) => {
                        const IconComponent = skill.icon
                        return (
                          <motion.div
                            key={skill.name}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-all duration-200 group cursor-pointer"
                            whileHover={{ scale: 1.03, x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-16 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-muted/10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>

                      <div className="relative">
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                            asChild
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </Button>
                        </div>

                        <h3 className="text-xl font-bold font-[var(--font-heading)] group-hover:text-primary transition-colors mb-4">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent border-2"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Timeline Section */}
      <section className="py-20 px-4 bg-muted/30" id="experience">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-12 text-center">
              Experience & Education
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                    <Card className="md:ml-16 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {item.type === "experience" ? (
                            <Briefcase className="w-5 h-5 text-primary" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-semibold font-[var(--font-heading)]">{item.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {item.period}
                            </div>
                          </div>
                          <p className="text-primary font-medium mb-1">{item.organization}</p>
                          <p className="text-sm text-muted-foreground mb-4">{item.location}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {item.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-muted-foreground leading-relaxed">
                            • {desc}
                          </p>
                        ))}
                      </div>

                      {item.achievements && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <h4 className="font-medium mb-2 text-primary">Key Achievements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.achievements.map((achievement, achIndex) => (
                              <Badge key={achIndex} variant="outline" className="text-xs">
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4" id="contact">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-16 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full shadow-xl border-2 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-background to-muted/10">
                  <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6">Let's Connect</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    I'm always interested in new opportunities and exciting projects. Whether you're a recruiter,
                    potential collaborator, or just want to say hello, feel free to reach out!
                  </p>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">ashutoshyadav7891@gmail.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">Noida, UP, India</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-muted-foreground">Connect with me</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 font-medium">Follow me on social media:</p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300"
                        asChild
                      >
                        <a href="https://github.com/ashutoshyadav7891" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/ashutosh-yadav-825b0b250/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300"
                        asChild
                      >
                        <a href="https://x.com/Ashutos98067436" target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent border-2 hover:border-primary transition-all duration-300"
                        asChild
                      >
                        <a href="https://www.instagram.com/ashutosh_yadav6/" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full shadow-xl border-2 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-background to-muted/10">
                  <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all border-2 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all border-2 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Label htmlFor="message" className="text-sm font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all resize-none border-2 focus:border-primary"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-muted/50 to-primary/5 py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Ashutosh Yadav
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Front End Developer passionate about creating exceptional user experiences with modern web technologies.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/ashutoshyadav7891" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/ashutosh-yadav-825b0b250/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://x.com/Ashutos98067436" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://www.instagram.com/ashutosh_yadav6/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  ashutoshyadav7891@gmail.com
                </p>
                <p className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4" />
                  Noida, UP, India
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Ashutosh Yadav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
