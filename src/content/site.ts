export const siteContent = {
  name: "Sejad Sahib",
  role: "Junior Software Engineer",
  introduction:
    "Software Engineering student with hands-on experience across software development, IT infrastructure, systems and networking.",
  location: "Netherlands",
  about: [
    "I am working toward a career in Software Engineering, with a development background that includes Java, C#, ASP.NET Core, MySQL, and foundational web technologies.",
    "Alongside that direction, I work in IT On-Site Support at OGD ict-diensten. In the Lineage client environment, I support endpoint, system, network, and CCTV infrastructure using technologies including Active Directory, Microsoft Intune, Microsoft Exchange, Meraki switching, and VLANs.",
    "I earned my HBO-ICT Software Engineering propedeuse at The Hague University of Applied Sciences in 2021. After time away from study, I am currently preparing to resume the program and continue developing toward a professional software engineering role.",
  ],
  experience: [
    {
      role: "IT On-Site Support",
      organization: "OGD ict-diensten",
      context: "Client environment: Lineage",
      period: "2024–Present",
      summary: "Supporting endpoint, system, network, and CCTV infrastructure in an on-site environment.",
      highlights: [
        "Manage Intune kiosk profiles, Active Directory permissions, and company device deployments.",
        "Support Meraki switching, VLAN-connected IP cameras, and CCTV management infrastructure.",
        "Troubleshoot SMTP relay, Power over Ethernet, switch-port, and Windows Registry issues.",
      ],
    },
    {
      role: "Customer-service experience",
      organization: "American Express, Netflix through Majorel, and Coolblue",
      context: "",
      period: "2019–2024",
      summary:
        "Built a strong foundation in communication and structured problem solving by investigating customer issues, handling complaints, and coordinating resolutions across departments.",
      highlights: [],
    },
  ],
  education: {
    program: "HBO-ICT — Software Engineering",
    institution: "The Hague University of Applied Sciences",
    started: "Started 2020",
    description:
      "Propedeuse obtained on 15 July 2021. Currently preparing to resume the program after a period away from study.",
  },
  skills: [
    { category: "Software development", items: ["Java", "C#", "ASP.NET Core", "MySQL", "HTML", "CSS", "JavaScript"] },
    { category: "Systems & endpoint management", items: ["Active Directory", "Microsoft Intune", "Microsoft Exchange", "Windows Registry", "Device imaging and deployment"] },
    { category: "Networking & infrastructure", items: ["Meraki switching", "VLANs", "Switch-port management", "SMTP relay troubleshooting", "Power over Ethernet", "IP cameras and CCTV infrastructure"] },
  ],
  certifications: [
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft 365 Certified: Fundamentals",
    "ITIL 4 Foundation",
    "Microsoft 365 Certified: Endpoint Administrator Associate",
  ],
  contact: {
    email: "sejad.16_@hotmail.com",
    github: "https://github.com/sejadAres",
    linkedin: "https://www.linkedin.com/in/sejad-s-ares/",
  },
} as const;
