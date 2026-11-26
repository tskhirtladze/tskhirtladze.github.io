/* ==========================================================
   ALL SITE CONTENT LIVES HERE. Edit this file to update the site.
   See README.md for how to add projects, categories and sections.
   ========================================================== */
window.SITE = {
  /* The "Home" block at the top of the page */
  profile: {
    name: ["Tornike", "Skhirtladze"],
    role: "Data Analyst & Python Developer",
    /* Portrait: put the file in images/ and set e.g. photo: "images/me.jpg".
       Leave "" to show your initials instead. */
    photo: "images/me.jpeg",
    photoAlt: "",
    affiliations: [
      { text: "Georgian National University SEU" }
    ],
    location: "Leiden, Netherlands",
    /* icon: mail | github | linkedin | link */
    social: [
      { label: "Email", icon: "mail", url: "mailto:skhirtladze.tornike@gmail.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/tskhirtladze" },
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/tornike-skhirtladze-463120b6/" },
      { label: "ORCID", icon: "orcid", url: "https://orcid.org/my-orcid?orcid=0009-0007-5836-6135" }
    ],
    bio: [
      "I am interested in research data and how it can be made easier to find, connect, and understand. Much of my work involves developing tools and applications that help researchers explore and make better use of data. These include data pipelines, interactive dashboards, research software, knowledge graph applications, and agent-based models for simulation.",
      "I value open science principles and believe that research tools and data should be as accessible as possible. I work with open data sources such as OpenAlex and publish much of my code on GitHub.",
      "Besides software development, I also enjoy teaching at university."
    ],
    now: {
      text: "Currently building a Linked Open Data chat assistant as part of COST Action CA23147.",
      url: "https://github.com/tskhirtladze/sztaki-lod-chatbot",
      label: "See the project"
    },
    interests: ["Data Analysis", "Research Software", "Open Science", "Agent-Based Modelling"],
    education: [
      { title: "Master’s degree in Computer Engineering", org: "Agricultural University of Georgia" },
      { title: "Bachelor’s degree in Social Sciences", org: "Ivane Javakhishvili Tbilisi State University" }
    ]
  },

  /* Each section becomes a block on the page and a link in the top menu, in this order.
     type: "text" | "list" | "projects" | "groups" | "contact"
     Optional on any section: subtitle: "one line under the heading" */
  sections: [
    {
      id: "projects", title: "Projects", type: "projects",
      /* category = any text, or a list for several: category: ["Web app", "Education"]
                    A filter button appears for each different one.
         with     = optional collaborators: with: ["Name One", "Name Two"]  (shown as "With ...")
         color  = any hex code for the picture background
         art    = web | dashboard | package | pipeline | network | sim | research | chat  (see js/art.js) */
      projects: [
        {
          title: "QueryLab", url: "https://querylab.ge/", category: ["Web app", "Education"], color: "#F4C96B", art: "web",
          text: "An interactive platform for learning MySQL, with tutorials, quizzes, MySQL exercises and a live database sandbox.",
          tech: "Flask, JavaScript, PostgreSQL, Docker"
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
          title: "CoARA Tracker", url: "https://kfphcn9sd4noq5zjzqhgyr.streamlit.app/", category: ["Web scraping", "Dashboard", "Research"], color: "#91B99A", art: "research", with: "Nino Gogadze",
          text: "Explore CoARA signatories, action plans, geographical distribution, organizational participation, and membership growth over time.",
          tech: "BeautifulSoup, Pandas, Streamlit"
        },
        {
          title: "Linked Open Data Chat Assistant", url: "https://github.com/tskhirtladze/sztaki-lod-chatbot", category: ["AI", "Web app", "Knowledge graphs"], color: "#C5B5DD", art: "chat", with: "Cost Action CA23147, WG4.5",
          text: "A chat assistant that answers questions over Linked Open Data, using RAG and a knowledge graph. In progress.", tech: "Flask, Claude, SPARQL"
        },
        {
          title: "Milgram Obedience Experiment: An Agent-Based Model", url: "https://milgram-experiment-abm-ts.streamlit.app/", category: ["Agent-based modeling", "Simulation", "Web app"], color: "#E2A3BC", art: "agent",
          text: "An open and interactive agent-based model exploring Milgram's obedience experiments, computational modelling, model assumptions, calibration, and reproducibility.",
          tech: "Mesa, Streamlit"
        },
        {
          title: "Co-authorship Network", url: "https://github.com/tskhirtladze/agruni-network", category: ["Web scraping", "Data pipeline"], color: "#8EBBC4", art: "network",
          text: "A pipeline and network analysis for collecting, processing and visualizing academic collaboration data.",
          tech: "Selenium, NetworkX, PyVis"
        },
        {
          title: "Agent-Based Voter Behavior Simulation", url: "https://github.com/tskhirtladze/ABM-Voter-Behavior-and-Opinion-Spread", category: ["Agent-based modeling", "Simulation"], color: "#E5A18F", art: "sim",
          text: "Simulates voter interactions and visualizes shifts in voting preferences over time.",
          tech: "Mesa, NetworkX"
        },
        {
          title: "Research Grant Application Portal", url: "https://github.com/tskhirtladze/django-grants-portal", category: "Web app", color: "#A5BCE0", art: "web",
          text: "Enables researchers to register, manage their profiles, and submit grant proposals, while allowing administrators to view and manage researcher profiles and projects.",
          tech: "Django, JavaScript, SQLite"
        },
        {
          title: "Scopus Article Explorer", url: "https://fetching-research-articles-ocaussfx2j6kqkfewiwxry.streamlit.app/", category: ["Data pipeline", "Research"], color: "#73BDB9", art: "pipeline",
          text: "Explore Scopus publications, research topics, publication trends, author contributions, and academic output over a selected range of publication years.",
          tech: "Streamlit, Metadata, Scopus"
        }
      ]
    },
    {
      id: "research", title: "Research", type: "groups",
      /* Each group has a heading and entries. Entry fields (all optional except title):
         period, title, org, text, url */
      groups: [
        {
          heading: "Research outputs",
          entries: [
            {
              period: "2026", type: "Journal article",
              title: "Advancing open science through research assessment reform? Content analysis of CoARA action plans",
              org: "Scientometrics", text: "With A. Rushforth, N. Gogadze and J. Pölönen.",
              url: "https://doi.org/10.1007/s11192-026-05650-w"
            },
            {
              period: "2026",
              type: "Software", title: "Institution Research Dashboard", org: "Zenodo",
              text: "An interactive dashboard for exploring research output, citation impact, research topics, and institutional profiles worldwide using the OpenAlex API.",
              url: "https://zenodo.org/records/24177249"
            },
            {
              period: "2026",
              type: "Software", title: "Milgram Obedience Experiment: An Agent-Based Model", org: "Zenodo",
              text: "An open and interactive agent-based model exploring Milgram's obedience experiments, computational modelling, model assumptions, calibration, and reproducibility.",
              url: "https://zenodo.org/records/22724177"
            },
            {
              period: "2024",
              type: "Software", title: "Num2GeoText", org: "Python package on PyPI",
              text: "A Python package for converting numbers and floats into Georgian text, and for converting floats into Georgian currency text representations.",
              url: "https://pypi.org/project/num2geotext/"
            }
          ]
        },
        {
          heading: "Research activity",
          entries: [
            {
              period: "2025 – now", title: "Working Group on Knowledge Graph Engineering", org: "COST Action CA23147",
              text: "Developing knowledge-graph-based applications for querying Linked Open Data, including a natural-language-to-SPARQL assistant and data visualization capabilities."
            },
            {
              period: "2017 – 2024", title: "Chief Specialist, Science Department", org: "National Science Foundation of Georgia",
              text: "Coordinated scientific grant calls and bilateral programmes, and developed data and automation tools to support research grant allocation and analysis, working closely with researchers and research institutions."
            }
          ]
        },
        {
          heading: "Workshops",
          entries: [
            {
              period: "2026",
              title: "Enhancing Equitable Collaborations through Open Science",
              org: "Universitait Leiden, Leiden, Netherlands",
              url: "https://www.universiteitleiden.nl/en/events/2026/09/equitablecollaborations-openscience"
            }
          ]
        },
        {
          heading: "Hackathons",
          entries: [
            {
              period: "2026",
              title: "Making Replication Count Hackathon",
              org: "Universität Münster, Münster, Germany",
              text: "Contribute to the FORRT Flora Explorer project.",
              url: "https://indico.uni-muenster.de/event/4370/"
            }
          ]
        }
      ]
    },
    {
      id: "teaching", title: "Teaching", type: "groups",
      groups: [
        {
          heading: "University courses",
          entries: [
            {
              period: "2023 – now", title: "Lecturer", org: "Georgian National University SEU",
              text: "Graduate-level courses in Data Analysis and Visualization, Web Scraping Frameworks, Databases, and Python, with a strong focus on practical, hands-on applications."
            },
            {
              period: "2022 – 2024", title: "Lecturer", org: "Agricultural University of Georgia",
              text: "Graduate-level courses in Network Programming and Python Fundamentals, with a strong focus on practical programming exercises and desktop application development."
            }
          ]
        }
      ]
    },
    {
      id: "skills", title: "What I do", type: "list",
      items: [
        { title: "Research software", text: "Software for academic and scientific use." },
        { title: "Data analysis", text: "Exploring data to discover patterns and relationships." },
        { title: "Visualization", text: "Interactive charts and dashboards." },
        { title: "Web development", text: "Web applications and APIs with Python-based frameworks." },
        { title: "Data engineering", text: "Pipelines for collecting, processing, validating and transforming data." },
        { title: "AI chatbots", text: "Chatbots with RAG and knowledge graph integration." },
        { title: "Automation", text: "Repetitive research and administrative workflows, handled by code." }
      ]
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