import { AlertCircle, BarChart3, Calculator, FileCheck, Network, Settings, Shield } from "lucide-react";

export const features = [
    {
      icon: <FileCheck className="w-8 h-8 text-white" />,
      title: "VAT compliance & FTA audits", 
      description: "Ensure seamless tax filing and full compliance with UAE tax laws, staying ready for any FTA audit with precise documentation.",
      color: "bg-blue-500"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-white" />,
      title: "Manual accounting errors",
      description: "Replace risky manual entries with automated workflows to eliminate discrepancies and ensure 100% data integrity.",
      color: "bg-indigo-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Slow reporting & cash flow visibility",
      description: "Gain real-time access to financial health and cash flow movements through instant, automated reporting dashboards.",
      color: "bg-sky-500"
    },
    {
      icon: <Network className="w-8 h-8 text-white" />,
      title: "Complex multi-branch or multi-company management",
      description: "Consolidate operations across multiple entities and branches into one unified system for centralized control and visibility.",
      color: "bg-blue-600"
    }
  ];
export const features2 = [
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: "Accounting Services", 
      description: `Accounting Services
Accurate bookkeeping, financial reporting, and period-end closing — fully aligned with UAE Tax and AML regulations.`,
      color: "bg-[#714B67]"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "TAX and AML Compliance",
        description: "From VAT registration to filings and audit preparation for Taxes and AML, we help protecting your business from penalties.",
      color: "bg-[#714B67]"
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: " Odoo Business framework:",
      description: <p>Odoo is not just an ERP, it is a platform where Erad can develop the right solutions to:<br/>
1- cover your accounting requirements <br/>
2- handle all of your departments <br/>
3- Automate your business like you always dreamed to ddo. </p>,
      color: "bg-[#714B67]"
    },
  ];