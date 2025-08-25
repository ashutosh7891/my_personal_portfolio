"use client";

import type React from "react";

import { motion } from "framer-motion";
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
  X,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Hidden field that bots will fill
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Added state for success modal

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting: prevent submissions within 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setSubmitStatus("error");
      return;
    }

    // Honeypot check
    if (formData.honeypot) {
      // Bot detected, silently fail
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setLastSubmitTime(now);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      console.log("[v0] Access key:", accessKey ? "Found" : "Missing");

      const formDataToSend = new FormData();
      formDataToSend.append("access_key", accessKey || "");
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("message", formData.message.trim());

      formDataToSend.append("autoresponse", "true");
      formDataToSend.append(
        "autoresponse_subject",
        "✨ Thanks for reaching out! I'll be in touch soon"
      );
      formDataToSend.append(
        "autoresponse_message",
        `Hi ${formData.name.trim()},

🚀 Thank you for reaching out! Your message just landed in my inbox and I'm genuinely excited to connect with you.

I've received your inquiry and will get back to you within 24 hours. I believe in meaningful conversations, so expect a thoughtful response!

While you wait, feel free to:
• Explore my latest projects on my portfolio
• Connect with me on LinkedIn for professional updates
• Follow my coding journey on Instagram for behind-the-scenes content

Looking forward to our conversation and potentially working together!

Best regards,
Ashutosh Yadav 💻

🔗 Portfolio: https://ashutoshyadav.tech
💼 LinkedIn: https://www.linkedin.com/in/ashutosh-yadav-825b0b250/
📸 Instagram: https://www.instagram.com/ashutosh_yadav6/

P.S. - Great developers respond fast, and I'm no exception! 😉`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      console.log("[v0] Web3Forms response:", result);
      console.log("[v0] Response status:", response.status);

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setShowSuccessModal(true); // Show modal instead of inline message
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        console.log("[v0] Form submission failed:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log("[v0] Error during submission:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
  };

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
  ];

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-br from-background to-muted/10 rounded-2xl shadow-2xl border-2 border-primary/20 p-8 max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/20 transition-colors group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Success content */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold font-[var(--font-heading)] mb-4 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent"
              >
                Message Sent Successfully! 🚀
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-foreground/80 mb-6 leading-relaxed font-medium"
              >
                Your message just landed in my inbox faster than a developer
                fixing bugs on Friday evening! I'll get back to you quicker than
                you can say "Hello World" ⚡
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-muted/30 rounded-lg p-4 mb-6"
              >
                <p className="text-sm text-foreground/70 font-medium">
                  Meanwhile, why not slide into my DMs like a smooth Git merge?
                  Hit me up on{" "}
                  <a
                    href="https://instagram.com/ashutosh_yadav6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary/80 transition-colors underline decoration-2 underline-offset-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>{" "}
                  for some behind-the-scenes coding chaos and maybe a few
                  developer memes! 📱💻✨
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Awesome!
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <header className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle />
        </motion.div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
              Ashutosh
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-primary font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Developer
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting exceptional digital experiences with modern JavaScript
              frameworks. Passionate about creating user-centric, accessible
              applications that drive business growth and enhance user
              satisfaction.
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
              <a
                href="https://github.com/ashutosh7891"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://www.linkedin.com/in/ashutosh-yadav-825b0b250/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a href="mailto:contact@ashutoshyadav.tech">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Email Me
              </a>
            </Button>
            <a href="/resume.pdf" download="Ashutosh's_resume.pdf">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6 bg-gradient-to-r from-foreground via-primary to-emerald-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <Card className="p-8 md:p-10 shadow-xl border-2 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I'm a dedicated Front End Developer based in Noida, UP, with a
                  Master's in Computer Applications from Bennett University.
                  Currently working at Clickinpedia Pvt, I specialize in
                  building responsive, user-centric web applications using
                  modern technologies like React, Next.js, and the MERN stack.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  My experience includes collaborating with cross-functional
                  teams to develop internal CRM systems, integrating RESTful
                  APIs, and translating Figma prototypes into responsive
                  interfaces. I'm passionate about optimizing user experience
                  and have successfully contributed to reducing client
                  onboarding friction by 20% and improving code maintainability.
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

      <section
        className="py-24 px-4 bg-gradient-to-br from-muted/30 to-primary/5"
        id="skills"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-muted/10">
                    <h3 className="font-bold font-[var(--font-heading)] mb-6 text-primary text-lg">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {skillList.map((skill, index) => {
                        const IconComponent = skill.icon;
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
                            <span className="font-medium group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-24 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
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
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </Button>
                      </div>

                      <h3 className="text-xl font-bold font-[var(--font-heading)] group-hover:text-primary transition-colors mb-4">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

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
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline Section */}
      <section className="py-20 px-4 bg-muted/30" id="experience">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-12 bg-gradient-to-r from-primary via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Experience & Education
            </h2>
          </motion.div>

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
                          <h3 className="text-xl font-semibold font-[var(--font-heading)]">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-primary font-medium mb-1">
                          {item.organization}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <p
                          key={descIndex}
                          className="text-muted-foreground leading-relaxed"
                        >
                          • {desc}
                        </p>
                      ))}
                    </div>

                    {item.achievements && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="font-medium mb-2 text-primary">
                          Key Achievements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <Badge
                              key={achIndex}
                              variant="outline"
                              className="text-xs"
                            >
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
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6 bg-gradient-to-r from-primary via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to turn your ideas into reality? Drop me a message and let's
              create something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-xl border-2 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-background to-muted/10">
                <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-emerald-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">
                        contact@ashutoshyadav.tech
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Noida, UP, India</p>
                    </div>
                  </motion.div>

                  <div className="pt-6 border-t border-muted/20">
                    <p className="text-sm text-muted-foreground mb-4">
                      Follow me on social media
                    </p>
                    <div className="flex space-x-4">
                      {[
                        {
                          icon: Github,
                          href: "https://github.com/ashutosh7891",
                          color: "hover:text-gray-600",
                        },
                        {
                          icon: Linkedin,
                          href: "https://www.linkedin.com/in/ashutosh-yadav-825b0b250/",
                          color: "hover:text-blue-600",
                        },
                        {
                          icon: Twitter,
                          href: "https://x.com/Ashutos98067436",
                          color: "hover:text-blue-400",
                        },
                        {
                          icon: Instagram,
                          href: "https://www.instagram.com/ashutosh_yadav6/",
                          color: "hover:text-pink-600",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full shadow-xl border-2 hover:border-primary/20 transition-all duration-300 bg-gradient-to-br from-background to-muted/10">
                <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6">
                  Send a Message
                </h3>

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      ❌ Failed to send message. Please try again or email me
                      directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden honeypot field for spam protection */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
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
                      disabled={isSubmitting}
                      minLength={2}
                      maxLength={100}
                      className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all border-2 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
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
                      disabled={isSubmitting}
                      maxLength={100}
                      className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all border-2 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Label htmlFor="message" className="text-sm font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      minLength={10}
                      maxLength={1000}
                      className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all resize-none border-2 focus:border-primary"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full group bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <footer className="bg-gradient-to-br from-muted/50 to-primary/5 py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Ashutosh Yadav
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Front End Developer passionate about creating exceptional user
                experiences with modern web technologies.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/ashutosh7891"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://x.com/Ashutos98067436"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/ashutosh_yadav6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  contact@ashutoshyadav.tech
                </p>
                <p className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4" />
                  Noida, UP, India
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Ashutosh Yadav. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
