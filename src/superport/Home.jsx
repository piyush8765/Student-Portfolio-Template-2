import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import About from './pages/About'
import PersonalAssistant from './pages/PersonalAssistant'
import HireMe from './pages/HireMe'
import Projects from './pages/Projects'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Experience from './pages/Experience'


const Home = () => {
  const [isDark, setIsDark] = useState(true)
  const [active, setActive] = useState("home")

  return (
    <div
      style={{
        background: isDark ? "#020617" : "#f8fafc",
        color: isDark ? "#ffffff" : "#020617",
        transition: "0.3s"
      }}
    >
      {/* ================= NAVBAR ================= */}
      <NavBar
        portfolioName="TechHub"
        isDark={isDark}
        setIsDark={setIsDark}
        active={active}
        setActive={setActive}
      />

      {/* ================= HERO ================= */}


<Hero
  name="Piyush Shakya"
  roles={[
    "Frontend Developer",
    "React Developer",
    "CSE Student"
  ]}
  description="I am a 3rd year Computer Science Engineering student focused on building clean, modern and user-friendly web interfaces."
  phone="919876543210"
/>



{/* ---============= about me ================ */}
<About
  title="About Me"
  storyTitle="Who I Am"
  story="I am a 3rd year Computer Science Engineering student and a frontend developer who enjoys turning ideas into clean, functional and visually appealing web applications."
  bgImage={""}
  identity={{
    Role: "Frontend Developer",
    Education: "B.Tech CSE (3rd Year)",
    Location: "Uttar Pradesh, India",
    Focus: "React & UI Development",
  }}
  highlights={[
    {
      title: "Strong Frontend Foundation",
      text: "Comfortable with HTML, CSS, JavaScript, React and Tailwind CSS.",
    },
    {
      title: "Learning Mindset",
       text: "Actively learning MERN stack and improving problem-solving skills.",
    },
    {
      title: "Design Awareness",
      text: "I care about spacing, colors, responsiveness and user experience.",
    },
  ]}
/>
{/* =====================why Choose Me =======================*/}

<HireMe
  points={[
    {
      title: "Clean & Scalable Code",
      description:
        "I focus on writing maintainable and scalable code that follows best practices.",
      tags: ["Clean Code", "Reusable Components", "Best Practices"],
    },
    {
      title: "Modern UI / UX",
      description:
        "I build responsive and user-friendly interfaces with a strong focus on UX.",
      tags: ["Responsive Design", "Tailwind CSS", "Accessibility"],
    },
    {
      title: "Strong Communication",
      description:
        "Clear communication and collaboration with teams and clients.",
      tags: ["Teamwork", "Communication", "Problem Solving"],
    },
    {
      title: "Reliable & Dedicated",
      description:
        "Committed to deadlines and delivering quality work consistently.",
      tags: ["On Time", "Focused", "Responsible"],
    },
  ]}
  phone="919876543210"
/>


   
   
{/* ================= Experience ================= */}
     

<Experience
  title="Experience"
  subtitle="Hands-on learning and real-world practice"
  experiences={[
    {
      role: "Frontend Developer Intern",
      company: "XYZ Tech Solutions",
      duration: "June 2024 – Aug 2024",
      work:
        "Worked on building responsive UI components using React and Tailwind CSS.",
      impact:
        "Improved page load performance and enhanced overall UI consistency.",
      learning:
        "Gained real-world experience in component-based architecture and teamwork.",
    },
    {
      role: "Academic Project",
      company: "College Project – MERN Stack",
      duration: "2023 – 2024",
      work:
        "Developed a full-stack web application with authentication and CRUD features.",
      impact:
        "Helped peers understand full-stack workflow and improved development efficiency.",
      learning:
        "Learned backend integration, REST APIs, and database design.",
    },
  ]}
/>

   

  {/* ================= projects ================== */}

<Projects
  title="Projects"
  subtitle="Some of the work that shaped my development journey"
  projects={[
    {
      name: "Personal Portfolio",
      summary:
        "A modern portfolio website to present my skills, projects, and contact information.",
      idea:
        "Create a professional online identity with clean UI and smooth navigation.",
      implementation:
        "Built using React and Tailwind CSS with reusable components.",
      result:
        "Improved personal branding and provided a single place to showcase my work.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      live: "https://your-portfolio.com",
      github: "https://github.com/username/portfolio",
    },
    {
      name: "MERN Stack App",
      summary:
        "A full-stack application with authentication and CRUD functionality.",
      idea:
        "Replace manual data handling with an automated web-based solution.",
      implementation:
        "Used MongoDB, Express, React, and Node.js to build a scalable app.",
      result:
        "Simplified workflows and enhanced data management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/username/mern-app",
    },
  ]}
/>



  {/* ================= SKILLS ================= */}

<Skill
  categories={[
    {
      title: "Frontend Development",
      description: "Building responsive and modern user interfaces",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      description: "Understanding of server-side and data handling",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "Soft Skills",
      description: "Collaboration and communication abilities",
      skills: ["Problem Solving", "Teamwork", "Time Management"],
    },
    {
      title: "Tools & Workflow",
      description: "Daily development tools and best practices",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ]}
/>


  
  {/* ================= contact ================= */} 

<Contact  
  title="Get In Touch"
  subtitle="Let’s talk about your project"
  slug="piyush-shakya"
  phone="+919876543210"
  whatsapp="919876543210"
  location="Farrukhabad, Uttar Pradesh"
  availability="Available for <b>Internships</b> & <b>Frontend Roles</b>"
/>



  {/* ================= footer ================= */}
<Footer
  name="Piyush Shakya"
  role="Frontend Developer | CSE Student"
  description="A Computer Science Engineering student focused on building modern, responsive web interfaces and growing as a full-stack developer."
  skills={[
    "React & Tailwind CSS",
    "JavaScript (ES6+)",
    "Responsive UI Design",
    "Component-Based Architecture",
    "Learning MERN Stack",
  ]}
  socials={[
    { href: "https://github.com/username", icon: "🐙" },
    { href: "https://linkedin.com/in/username", icon: "💼" },
    { href: "mailto:piyush@example.com", icon: "✉️" },
  ]}
/>



  {/* ================= personal assistant ================= */}


<PersonalAssistant
  ownerName="Piyush shakya"
  role="Full Stack Developer & SaaS Builder"
  location="Lucknow, India"
  experience="2+ years"
  skills={[
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "Android",
    "Tailwind",
    "Express",
    "Firebase"
  ]}
  projects={[
    { title: "WeboraX - SaaS Portfolio Builder" },
    { title: "AI Resume Builder" },
    { title: "IQGalaxy Platform" },
    { title: "Fitness App" }
  ]}
/>


    </div>
  )
}

export default Home
