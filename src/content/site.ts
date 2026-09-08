export const siteContent = {
  name: "Sejad Sahib",
  role: "Freelance Software Engineer",
  introduction:
    "Building software solutions with a background spanning software development, IT infrastructure, systems and networking.",
  homeAbout: [
    "I am a Freelance Software Engineer with a background spanning software development and professional IT environments.",
    "My on-site IT experience adds a practical understanding of endpoints, systems, networking, and the environments in which software operates.",
  ],
  location: "Netherlands",
  about: [
    "I am a Freelance Software Engineer with a technical background spanning software development and professional IT environments. I work with C#, Java, ASP.NET Core, MySQL, and web technologies.",
    "My work in IT On-Site Support at OGD ict-diensten complements this with hands-on experience across endpoint management, systems, networking, and infrastructure troubleshooting. This broader background gives me a practical understanding of the environments in which software operates.",
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
    description: "HBO-ICT Software Engineering. Propedeuse obtained on 15 July 2021.",
  },
  skills: [
    { category: "Software development", items: ["Java", "C#", "ASP.NET Core", "HTML", "CSS", "JavaScript"] },
    { category: "Data", items: ["MySQL"] },
    { category: "Automation", items: ["PowerShell"] },
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
