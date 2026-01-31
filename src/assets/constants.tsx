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
      description: "Accurate bookkeeping, financial reporting, and month-end closing — fully aligned with UAE VAT regulations.",
      color: "bg-[#714B67]"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "VAT & FTA Compliance",
        description: "From VAT registration to filings and audit preparation, we protect your business from penalties.",
      color: "bg-[#714B67]"
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Odoo ERP Implementation",
      description: "Accounting-led ERP implementation designed for SMEs — not generic IT projects.",
      color: "bg-[#714B67]"
    },
  ];