export const mockData = {
  company: {
    name: "Erad",
    tagline: "Compliance. Automation. Growth.",
    phone: "+971561647647",
    whatsapp: "971561647647",
    email: "info@erad-uae.com",
    address: "Dubai, United Arab Emirates"
  },
  
  packages: [
    {
      id: 1,
      name: "Starter Pack: ",
      target: "5 - 15 Employee",
      price: "Contact for Pricing",
      features: [
        "Setup Odoo Accounting + 2 essential modules to your business (3 Odoo Users - 1 year)",
        "TAX and Tax setup",
        "Chart of accounts setup",
        "9 hours of executive training",
        "Periodic Tax filling"
      ],
      button:"Enjoy this Package now for 799 AED / Month",
    },
    {
      id: 2,
      name: "Growth ERP",
      target: "16 - 30 Employee",
      price: "Contact for Pricing",
      features: [
        "Setup Odoo Accounting + 4 essential modules to your business (5 Odoo Users - 1 year)",
        "TAX and Tax setup",
        "Chart of accounts setup",
        "15 hours of executive training",
        "Periodic Tax filling",
        "Weekly Accounting Review"
      ],
      button:'Enjoy this Package now for 1399 AED / Month',
      popular: true
    },
    {
      id: 3,
      name: "Compliance & Automation Pro",
      target: "Multi branch SME",
      price: "Contact for Pricing",
      features: [
        "Multi-company / multi-branch setup",
        "Custom Automation for your business needs",
        "Advanced inventory & asset management",
        "Tax and AML compliance and filing",
        "Weekly Accounting Audit and review",
        "Priority support"
      ],
      button:'Contact for pricing'
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Accounting Services",
      description: "Accurate bookkeeping, financial reporting, and month-end closing — fully aligned with UAE TAX regulations.",
      icon: "Calculator",
      link: "/accounting-services-uae"
    },
    {
      id: 2,
      title: "TAX & TAX Compliance",
      description: "From TAX registration to filings and audit preparation, we protect your business from penalties.",
      icon: "Shield",
      link: "/tax-consultant-uae"
    },
    {
      id: 3,
      title: "Odoo ERP Implementation",
      description: "Accounting-led ERP implementation designed for SMEs — not generic IT projects.",
      icon: "Settings",
      link: "/odoo-accounting-implementation-uae"
    }
  ],
  
  industries: [
    "Trading & Distribution",
    "Professional Services",
    "Hospitality",
    "Property Management",
    "Contracting & Construction",
    "Startups"
  ],
  
  whyErad: [
    {
      title: "Odoo Ready Partner",
      description: "Certified Odoo Partner to flawlessly accomplish your ERP implementation and delivery the automation you laways dreamed about for your business.",
      icon: "Award"
    },
    {
      title: "UAE TAX-Compliance  Masters",
      description: "15+ years of experience with UAE tax regulations",
      icon: "BookCheck"
    },
    {
      title: "SME-Focused",
      description: "Our  target is to help businesses with 5 - 100 employee, we focus on SMEs because we have a proven success history here.",
      icon: "Users"
    },
    {
      title: "Practical, Not Theoretical",
      description: `Erad offers its enormous experience in: Hospitality, Logistics, Business Services, Trading and Distribution, Property Management, Contracting and Construction, Car service... and many other industries to support your business management, automation and Tax compliance.`,
      icon: "Target"
    }
  ],
  
  process: [
    {
      step: 1,
      title: "Discovery & TAX Health Check",
      description: "Comprehensive review of your current accounting and TAX compliance"
    },
    {
      step: 2,
      title: "Accounting System Cleanup",
      description: "Fix errors, reconcile accounts, and prepare clean books"
    },
    {
      step: 3,
      title: "Odoo ERP Implementation",
      description: "Custom setup and configuration for your business needs"
    },
    {
      step: 4,
      title: "Staff Training & Support",
      description: "Comprehensive training to ensure your team is ready"
    },
    {
      step: 5,
      title: "Ongoing Advisory",
      description: "Continuous support and compliance monitoring"
    }
  ],
  
  caseStudy: {
    company: "UAE Trading Company",
    staff: "25 staff",
    challenge: "Manual accounting with frequent TAX errors",
    results: [
      { metric: "TAX errors reduced", value: "90%" },
      { metric: "Monthly reporting time", value: "5 days → 1 day" },
      { metric: "Annual cost savings", value: "AED 50,000+" }
    ]
  }
};
