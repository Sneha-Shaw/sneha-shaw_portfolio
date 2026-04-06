const projects = [
  {
    id: 0,
    name: "Leads Dashboard",
    type: "Backend API & Call Intelligence",
    role: "Backend Developer",
    summary:
      "Built backend APIs to support lead activity visibility, call logs, and call recording workflows for internal business operations.",
    stack: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Backend Integrations",
    ],
    highlights: [
      "Designed backend APIs to ingest call logs and call recordings from the mobile application.",
      "Implemented multi-number contact handling by linking phone numbers to leads and call activity.",
      "Improved backend support for lead tracking and operational visibility.",
    ],
  },
  {
    id: 1,
    name: "ERO-EV Admin",
    type: "EV Charging System",
    role: "Frontend Developer",
    summary:
      "Built high-accuracy admin dashboards and reusable React components for an EV charging platform.",
    stack: ["React", "TypeScript", "Responsive UI", "Accessibility", "Figma to Code"],
    highlights: [
      "Translated Figma designs into scalable and reusable components.",
      "Built data-intensive dashboards for charging sessions and system activity.",
      "Implemented semantic HTML and keyboard navigation support.",
    ],
  },
  {
    id: 2,
    name: "Jobbora",
    type: "Job Search Platform",
    role: "Frontend Developer",
    summary:
      "Created a responsive job portal experience for search, filter, and apply workflows across multiple categories and locations.",
    stack: ["React", "Responsive Design", "Performance Optimization", "Reusable Components"],
    highlights: [
      "Built job search, filter, and application flows for multiple categories and locations.",
      "Created a reusable lazy-loading image component.",
      "Reduced network requests by 50% and improved load speed.",
    ],
  },
  {
    id: 3,
    name: "Leadhawk",
    type: "Lead Management System",
    role: "Frontend Developer",
    summary:
      "Delivered workflow-heavy UI for lead exploration and access-controlled experiences.",
    stack: ["React", "Search & Filter UX", "Role-based Access", "Subscription Logic"],
    highlights: [
      "Implemented search, filter, and sorting for large lead datasets.",
      "Integrated subscription-based access control based on plan availability.",
      "Built dynamic UI logic for role-based and pricing-based access control systems.",
    ],
  },
  {
    id: 4,
    name: "SNAP E-Cabs",
    type: "Kolkata Cab Service",
    role: "Backend Developer",
    summary:
      "Worked on real-time dispatch and production issue resolution for a cab service platform, focusing on reliability and faster backend operations.",
    stack: [
      "Go",
      "Real-time Job Dispatch",
      "New Relic",
      "Kibana",
      "Backend Debugging",
    ],
    highlights: [
      "Designed and enforced a real-time job dispatch engine in Go, improving dispatch efficiency by 90% and reducing driver idle time by 70%.",
      "Applied proactive log analysis workflows using New Relic to trace reported issues.",
      "Resolved 99% of incidents by tracing them back to system events and significantly reducing incident resolution time.",
    ],
  },
];

const Project = () => {
  return (
    <div className="flex flex-col items-center md:pt-[4rem] pb-8 px-5 min-h-[92vh]">
      <p className="heading">Projects</p>

      <div className="w-full lg:w-3/4 mt-4 text-center">
        <p className="sub-text max-w-3xl mx-auto leading-7">
          Selected professional work from my experience building responsive products,
          backend services, APIs, dashboards, and workflow-heavy systems at Itobuz
          Technologies.
        </p>
      </div>

      <div className="w-full lg:w-3/4 grid gap-4 mt-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="surface-card box-bg w-full p-5 text-start"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <p className="accent-text mt-1">
                  {project.type} • {project.role}
                </p>
              </div>
              <span className="info-chip w-fit">
                Professional Project
              </span>
            </div>

            <p className="mt-4 leading-7">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="info-chip"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <p className="font-semibold">Highlights</p>
              <ul className="list-disc pl-5 mt-3 space-y-2 leading-6">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
