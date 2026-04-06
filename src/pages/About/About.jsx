import { RESUME_URL } from "../../config/site";

const skillGroups = [
  {
    title: "Frontend",
    items:
      "React, TypeScript, Angular, JavaScript, HTML5, CSS3, Tailwind, Redux",
  },
  {
    title: "Backend",
    items: "Node.js, Express.js, REST APIs, GraphQL, Go",
  },
  {
    title: "Databases",
    items: "MongoDB, PostgreSQL, Redis",
  },
  {
    title: "Infra & Systems",
    items: "Docker, Elasticsearch, KrakenD",
  },
  {
    title: "Tools & Observability",
    items: "Postman, JIRA, Kibana, New Relic, Git, npm/yarn",
  },
  {
    title: "UI & Delivery",
    items:
      "Responsive Design, CSS Grid, Flexbox, SCSS, Figma, Framer Motion, GSAP",
  },
];

const experience = {
  company: "Itobuz Technologies",
  role: "Software Developer",
  period: "Jan 2023 - Present",
  summary: [
    "At Itobuz, I work as a full stack software developer building scalable web applications, dashboards, and internal systems across both frontend and backend layers.",
    "My work spans React-based user interfaces, backend APIs, system integrations, and production-focused workflows, with a strong emphasis on performance, clean architecture, and delivering reliable product experiences end to end.",
    "Alongside design-to-code frontend work, I have contributed to backend services in Node.js and Go, built APIs and real-time job workflows, and used tools like Kibana and New Relic to investigate issues and improve operational efficiency.",
  ],
};

const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "UEM Kolkata, West Bengal",
    period: "2019 - 2023",
  },
];

export default function About() {
  return (
    <div className="flex justify-center flex-col items-center p-5 w-screen md:mt-[5rem] pb-10">
      <p className="heading">About</p>

      <div className="surface-section box-bg lg:w-1/2">
        <div className="section-header box-border">
          <h2>Profile Summary</h2>
        </div>
        <div className="px-6 py-4 text-start leading-7">
          <p>
            I&apos;m a{" "}
            <span className="accent-text font-semibold">
              full stack developer
            </span>{" "}
            with 3+ years of experience building scalable web applications using
            React, Node.js, and Go.
          </p>
          <p className="mt-3">
            I enjoy working across the full product stack, from designing
            responsive interfaces and dashboards to building APIs, backend
            services, and systems that improve performance and operational
            efficiency.
          </p>
          <a
            href={RESUME_URL}
            download
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-5 inline-flex"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="surface-section box-bg lg:w-1/2">
        <div className="section-header">
          <h2>Technical Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3 p-4 w-full">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border border-slate-500/60 rounded-md p-4 text-start interactive-panel"
            >
              <p className="font-semibold accent-text">{group.title}</p>
              <p className="mt-2 leading-7">{group.items}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="surface-section box-bg lg:w-1/2">
        <div className="section-header">
          <h2>Work Experience</h2>
        </div>
        <div className="p-4 w-full">
          <div className="text-start border border-slate-500/60 rounded-md p-4 interactive-panel">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <div>
                <h3 className="text-lg font-semibold">{experience.company}</h3>
                <p className="accent-text">{experience.role}</p>
              </div>
              <p className="text-sm opacity-80">{experience.period}</p>
            </div>

            <div className="mt-4 space-y-3 leading-7">
              {experience.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="surface-section box-bg lg:w-1/2">
        <div className="section-header">
          <h2>Education & Achievement</h2>
        </div>
        <div className="p-4 w-full grid md:grid-cols-2 gap-4 text-start">
          <div className="border border-slate-500/60 rounded-md p-4 interactive-panel">
            <p className="font-semibold accent-text">Education</p>
            {education.map((item) => (
              <div key={item.degree} className="mt-3">
                <p className="font-semibold">{item.degree}</p>
                <p>{item.school}</p>
                <p className="text-sm opacity-80">{item.period}</p>
              </div>
            ))}
          </div>

          <div className="border border-slate-500/60 rounded-md p-4 interactive-panel">
            <p className="font-semibold accent-text">Achievement</p>
            <div className="mt-3">
              <p className="font-semibold">Winner - VR Hackathon</p>
              <p>Itobuz Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
