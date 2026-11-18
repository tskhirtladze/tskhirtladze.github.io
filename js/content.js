/* ==========================================================
   ALL SITE CONTENT LIVES HERE. Edit this file to update the site.
   See README.md for how to add projects, categories and tabs.
   ========================================================== */
window.SITE = {
  name: ["Tornike", "Skhirtladze"],
  /* Portrait shown next to the name. Put the file in the images/ folder, e.g. photo: "images/me.jpeg".
     Leave as "" to show no photo. */
  photo: "images/me.jpeg",
  photoAlt: "",
  email: "skhirtladze.tornike@gmail.com",
  lead: "I am a data analyst and python developer. I build data pipelines, dashboards, research software and AI chatbots.",
  now: {
    text: "Currently building a Linked Open Data chat assistant as part of COST Action CA23147.",
    url: "https://github.com/tskhirtladze/sztaki-lod-chatbot",
    label: "See the project"
  },

  /* Each section becomes a tab, in this order.
     type: "text" | "list" | "projects" | "groups" | "contact"  */
  sections: [
    {
      id: "work", title: "Work", type: "projects",
      /* category = any text, or a list for several: category: ["Web app", "Education"]
                    A filter button appears for each different one.
         with     = optional collaborators: with: ["Name One", "Name Two"]  (shown as "With ...")
         color  = blue | coral | sun | mint | lilac (or any hex code)
         art    = web | dashboard | package | network | sim | chat  (see js/art.js) */
      projects: [
        {
          title: "QueryLab", url: "https://querylab.ge/", category: ["Web app", "Education"], color: "#F4C96B", art: "web",
          text: "An interactive platform for learning MySQL, with tutorials, quizzes, MySQL exercises and a live database sandbox.",
          tech: "Flask, PostgreSQL, Docker"
        },
        {
          title: "Institution Research Dashboard", url: "https://institution-research-dashboard-ts.streamlit.app/", category: ["Dashboard", "Research"], color: "#91AEE8", art: "dashboard",
          text: "Explore research output, citations, topics, collaborations and growth of academic institutions worldwide.",
          tech: "OpenAlex API, Streamlit"
        },
        {
          title: "Num2GeoText", url: "https://pypi.org/project/num2geotext/", category: "Python package", color: "#83C9B0", art: "package",
          text: "A python package: converts numbers and floats (up to 15 digits) into Georgian text, and floats into Georgian currency text.",
          badge: { src: "https://static.pepy.tech/personalized-badge/num2geotext?period=total&units=INTERNATIONAL_SYSTEM&left_color=BLACK&right_color=GREEN&left_text=downloads", alt: "PyPI downloads" }
        },
        {
          title: "CoARA Tracker", url: "https://kfphcn9sd4noq5zjzqhgyr.streamlit.app/", category: ["Dashboard", "Research"], color: "#91B99A", art: "research", with: "Nino Gogadze",
          text: "Explore CoARA signatories, action plans, geographical distribution, organizational participation, and membership growth over time.",
          tech: "Streamlit, Pandas"
        },
        {
          title: "Linked Open Data Chat Assistant", url: "https://github.com/tskhirtladze/sztaki-lod-chatbot", category: ["AI", "Web app", "Knowledge graphs"], color: "#C5B5DD", art: "chat", with: "Cost Action CA23147, WG4.5",
          text: "A chat assistant that answers questions over Linked Open Data, using RAG and a knowledge graph. In progress.",
          tech: "Flask, Claude"
        },
        {
          title: "Co-authorship Network", url: "https://github.com/tskhirtladze/agruni-network", category: "Data pipeline", color: "#8EBBC4", art: "network",
          text: "This project scrapes publication authors from the Agricultural University of Georgia research publications page and builds an interactive co-authorship network.",
          tech: "Selenium, NetworkX, PyVis"
        },
        {
          title: "Agent-Based Voter Behavior Simulation", url: "https://github.com/tskhirtladze/ABM-Voter-Behavior-and-Opinion-Spread", category: ["Simulation", "Agent-based Modeling"], color: "#E5A18F", art: "sim",
          text: "Simulates voter interactions and visualizes shifts in voting preferences over time.",
          tech: "Mesa, NetworkX, NumPy, Pandas"
        },
        {
          title: "Research Grant Application Portal", url: "https://github.com/tskhirtladze/django-grants-portal", category: "Web app", color: "#A5BCE0", art: "web",
          text: "Lets researchers register, manage profiles and submit grant proposals.",
          tech: "Django"
        },
        {
          title: "Scopus Article Explorer", url: "https://fetching-research-articles-ocaussfx2j6kqkfewiwxry.streamlit.app/", category: ["Data pipeline", "Research"], color: "#73BDB9", art: "pipeline",
          text: "Explore Scopus publications, research topics, publication trends, author contributions, and academic output over a selected range of publication years.",
          tech: "Streamlit, Scopus"
        }
      ]
    },
    {
      id: "academic", title: "Academic", type: "groups",
      /* Each group has a heading and entries. Entry fields (all optional except title):
         period, title, org, text, url */
      groups: [
        {
          heading: "Publications",
          entries: [
            {
              period: "2026", title: "Advancing open science through research assessment reform? Content analysis of CoARA action plans",
              org: "Scientometrics", text: "With A. Rushforth, N. Gogadze and J. Pölönen.", url: "https://doi.org/10.1007/s11192-026-05650-w"
            }
          ]
        },
        {
          heading: "Research activity",
          entries: [
            {
              period: "2025 – now", title: "Working Group on Knowledge Graph Engineering", org: "COST Action CA23147",
              text: "Developing knowledge-graph-based applications for querying Linked Open Data, including an assistant that turns natural-language questions into SPARQL."
            },
            {
              period: "2017 – 2024", title: "Chief Specialist, Science Department", org: "National Science Foundation of Georgia",
              text: "Built data and automation tools for research grant allocation and analysis, working closely with researchers."
            }
          ]
        },
        {
          heading: "Teaching",
          entries: [
            {
              period: "2023 – now", title: "Lecturer", org: "Georgian National University SEU",
              text: "Graduate courses on Analytical Services in Databases and AI, with a focus on Python-based practical work."
            },
            {
              period: "2022 – 2024", title: "Lecturer", org: "Agricultural University of Georgia",
              text: "Network Programming and Python Fundamentals, including hands-on desktop application development."
            }
          ]
        },
        {
          heading: "Education",
          entries: [
            { title: "Master’s degree in Computer Engineering", org: "Agricultural University of Georgia" },
            { title: "Bachelor’s degree in Social Sciences", org: "Ivane Javakhishvili Tbilisi State University" }
          ]
        }
      ]
    },
    {
      id: "skills", title: "What I do", type: "list",
      items: [
        { title: "Data engineering", text: "Pipelines for collecting, processing, validating and transforming data." },
        { title: "Data analysis", text: "Finding patterns in data and turning them into insights people can act on." },
        { title: "Visualization", text: "Interactive charts and dashboards." },
        { title: "Web development", text: "Web applications and APIs with Python-based frameworks." },
        { title: "Research software", text: "Software for academic and scientific use." },
        { title: "AI chatbots", text: "Chatbots with RAG and knowledge graph integration." },
        { title: "Automation", text: "Repetitive research and administrative workflows, handled by code." }
      ]
    },
    {
      id: "about", title: "About", type: "text",
      paragraphs: [
        "I enjoy building things with data and code, from pipelines and dashboards to web applications, research software and AI chatbots.",
        "I’m based in Leiden, the Netherlands. These are the areas I care about most:"
      ],
      chips: ["Open Science", "Research Software", "AI", "Agent-Based Modelling", "Research Infrastructure"]
    },
    {
      id: "contact", title: "Contact", type: "contact",
      links: [
        { label: "Email", text: "skhirtladze.tornike@gmail.com", url: "mailto:skhirtladze.tornike@gmail.com" },
        { label: "LinkedIn", text: "Tornike Skhirtladze", url: "https://www.linkedin.com/in/tornike-skhirtladze-463120b6/" },
        { label: "GitHub", text: "tskhirtladze", url: "https://github.com/tskhirtladze" },
        { label: "Location", text: "Leiden, Netherlands" }
      ]
    }
  ]
};