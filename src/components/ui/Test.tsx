
import {  FileCheck, AlertCircle, BarChart3, Network } from 'lucide-react';

const ModernSection = () => {
  // ⚠️ يرجى تعبئة النصوص أدناه من الصورة التي لديك لضمان التطابق التام
  const features = [
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans" dir="ltr">
      {/* Decorative Background Shape */}
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-r from-blue-700 to-indigo-800 rounded-b-[3rem] shadow-xl -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-4">
          
          <h2 className="text-3xl font-bold text-center mb-4">The UAE SME Challenge :</h2>
         <p className="text-center text-muted-foreground mb-6">Running a business in the UAE is challenging enough — these issues shouldn't slow you down</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-[90%] lg:w-[80%] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 lg:p-4 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${feature.color.replace('bg-', 'bg-linear-to-r from-transparent to-')}`}></div>
              
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-md transform group-hover:rotate-6 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner Circle */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${feature.color} opacity-5 group-hover:scale-150 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
      

      </div>
    </div>
  );
};

export default ModernSection;