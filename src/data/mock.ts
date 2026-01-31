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
      name: "Starter VAT & Accounting",
      target: "10 – 25 Staff",
      price: "Contact for Pricing",
      features: [
        "Odoo Accounting & Invoicing",
        "VAT setup & filing",
        "Chart of Accounts setup",
        "Basic staff training",
        "Monthly VAT returns"
      ]
    },
    {
      id: 2,
      name: "Growth ERP",
      target: "25 – 50 Staff",
      price: "Contact for Pricing",
      features: [
        "Odoo Accounting, Inventory, Sales, Purchase",
        "Automated reports & dashboards",
        "Staff training (up to 5 users)",
        "VAT & FTA compliance review",
        "Custom workflows"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Compliance & Automation Pro",
      target: "Multi-branch SME",
      price: "Contact for Pricing",
      features: [
        "Multi-company / multi-branch setup",
        "Advanced inventory & asset management",
        "Automated bank reconciliation",
        "FTA-ready VAT automation",
        "Accounting system cleanup",
        "Priority support"
      ]
    }
  ],
  
  services: [
    {
      id: 1,
      title: "Accounting Services",
      description: "Accurate bookkeeping, financial reporting, and month-end closing — fully aligned with UAE VAT regulations.",
      icon: "Calculator",
      link: "/accounting-services-uae"
    },
    {
      id: 2,
      title: "VAT & FTA Compliance",
      description: "From VAT registration to filings and audit preparation, we protect your business from penalties.",
      icon: "Shield",
      link: "/vat-consultant-uae"
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
      title: "Discovery & FTA Health Check",
      description: "Comprehensive review of your current accounting and VAT compliance"
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
    challenge: "Manual accounting with frequent VAT errors",
    results: [
      { metric: "VAT errors reduced", value: "90%" },
      { metric: "Monthly reporting time", value: "5 days → 1 day" },
      { metric: "Annual cost savings", value: "AED 50,000+" }
    ]
  }
};
