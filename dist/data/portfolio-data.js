/* ==========================================================
   PORTFOLIO DATA - Single Source of Truth
   ========================================================== */

export const portfolioData = {
    profile: {
        name: "Jerry van den Berg",
        image: "assets/profiel-foto.jpg",
        roles: [
            "ICT & Data Analist",
            "Manager Logistiek Planner",
            "Back-end Developer",
            "Account Manager specialisatie Glastuinbouw"
        ]
    },
    about: [
        {
            icon: "💼",
            text: "Ervaren professional met een sterke achtergrond in ICT, data-analyse en logistieke planning binnen de glastuinbouwsector. Sinds 1997 actief bij Vreugdenhil Young Plants."
        },
        {
            icon: "📊",
            text: "Ik analyseer data, ontwikkel rapportages en vertaal cijfers naar bruikbare inzichten voor management en productie. Verantwoordelijk voor planning, logistiek en ICT-systemen, waaronder Microsoft Dynamics 365."
        },
        {
            icon: "⚙️",
            text: "Ik combineer een praktische aanpak met moderne digitale kennis: Power BI, Excel en back-end development met JavaScript (Node.js). Focus op procesoptimalisatie en efficiëntie door automatisering."
        },
        {
            icon: "🤝",
            text: "Mijn werkstijl kenmerkt zich door betrouwbaarheid, nauwkeurigheid en samenwerking. Ik neem initiatief, denk analytisch en heb oog voor detail zonder het geheel uit het oog te verliezen."
        }
    ],
    certificates: [
        {
            title: "Back-end Development with JavaScript",
            year: 2024,
            category: "Backend",
            link: "assets/certificaat-backend-js.pdf",
            description: "Working as a back-end developer requires knowledge of programming and the ability to approach programming with a problem-solving mindset. The recipient of this certificate is proficient in back-end development, mastering Javascript (Node.js), Git, Express, Deployment, Databases, Object Relational Mapping, and Testing. They can build robust server-side applications, manage databases, ensure data integrity, and implement testing strategies."
        },
        {
            title: "Power BI Dynamics",
            year: 2022,
            category: "Data",
            link: "assets/certificaat-powerbi.pdf"
        },
        {
            title: "Excel Expert",
            year: 2021,
            category: "Data",
            link: "assets/certificaat-excel-expert.pdf"
        }
    ],
    skills: [
        {
            category: "Backend & Development",
            items: ["JavaScript (Node.js)", "Express", "Git", "Deployment", "Databases", "Object Relational Mapping", "Testing", "SQL", "Python", "API Development", "C# .NET"]
        },
        {
            category: "Data & Analytics",
            items: ["Power BI", "Excel Expert", "Data Analysis", "Rapportages", "Dashboard Development"]
        },
        {
            category: "ERP & ICT",
            items: ["Microsoft Dynamics 365", "ERP Systems", "ICT Management", "Procesoptimalisatie"]
        },
        {
            category: "Logistiek & Planning",
            items: ["Logistieke Planning", "Procesoptimalisatie", "Automatisering", "Kwaliteitsverbetering"]
        },
        {
            category: "Tools",
            items: ["Git", "VS Code", "Postman", "Docker", "Cursor"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Microsoft Dynamics 365 Implementatie",
            description: "Beheer en optimalisatie van ERP-systeem voor logistiek en planning.",
            details: "Verantwoordelijk voor het beheer van Microsoft Dynamics 365 binnen Vreugdenhil Young Plants. Optimalisatie van bedrijfsprocessen, integratie met andere systemen en ondersteuning bij dagelijks gebruik voor planning en logistiek.",
            date: "2019-heden",
            tags: ["Backend", "Data"],
            link: "#"
        },
        {
            id: 2,
            title: "Power BI Dashboard Suite",
            description: "Interactieve dashboards voor management en productie-inzichten.",
            details: "Ontwikkeling van Power BI dashboards die data uit verschillende bronnen combineren. Vertaling van complexe datasets naar bruikbare inzichten voor management en productieteams. Automatische updates en real-time monitoring van KPI's.",
            date: "2022-heden",
            tags: ["Data"],
            link: "#"
        },
        {
            id: 3,
            title: "Excel Dashboard & Rapportages",
            description: "Geautomatiseerde Excel-dashboards voor data-analyse en rapportage.",
            details: "Ontwikkeling van geavanceerde Excel-dashboards met geautomatiseerde data-import en berekeningen. KPI-rapportages voor verschillende afdelingen. Gebruik van Power Query, Pivot Tables en geavanceerde formules voor efficiënte dataverwerking.",
            date: "2021-heden",
            tags: ["Data"],
            link: "#"
        },
        {
            id: 4,
            title: "Node.js Back-end Automatisering",
            description: "Back-end services voor procesautomatisering en API-integraties.",
            details: "Ontwikkeling van Node.js applicaties voor automatisering van bedrijfsprocessen. API-ontwikkeling voor integratie tussen systemen. Focus op betrouwbaarheid, logging en error handling voor kritieke bedrijfsprocessen.",
            date: "2024",
            tags: ["Backend", "JavaScript"],
            link: "#"
        },
        {
            id: 5,
            title: "Manager Logistieke Planning Systeem",
            description: "Optimalisatie van logistieke processen en planning workflows.",
            details: "Analyse en verbetering van logistieke planningprocessen binnen de glastuinbouwsector. Ontwikkeling van tools en workflows voor efficiëntere planning. Integratie tussen planning, productie en distributie voor betere doorlooptijden.",
            date: "2017-heden",
            tags: ["Data", "Backend"],
            link: "#"
        }
        ,
        {
            id: 6,
            title: "Account Manager - specialisatie Glastuinbouw (Agent)",
            description: "Account management voor klanten in de glastuinbouw, ondersteund door ons bedrijfsagent-systeem.",
            details: "Verantwoordelijk voor klantrelaties binnen de glastuinbouwsector. Dit project omvat uitvoering van accountmanagement-taken, relatiebeheer, verkoopondersteuning en het inzetten van een intern 'agent' (software/agent persoon) binnen ons bedrijf om klantcommunicatie en follow-ups te automatiseren en te stroomlijnen.",
            date: "2020-heden",
            tags: ["Account Management", "Sales", "Glastuinbouw"],
            link: "#"
        }
    ],
    contact: {
        name: "Jerry van den Berg",
        linkedin: "https://www.linkedin.com/in/jerry-van-den-berg-38938b139",
        email: "gojerry4u@gmail.com", // Update with your actual email
        location: "Nederland",
        available: false
    }
};
