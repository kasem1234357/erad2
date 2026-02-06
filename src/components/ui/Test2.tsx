import  { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useGetDictionary, type DictionaryType } from '../../hooks/useGetDictionary';

export default function Test2() {
  const [isVisible, setIsVisible] = useState(false);
  const {Home}:DictionaryType = useGetDictionary();
  useEffect(() => {
    setIsVisible(true);
  }, []);

  

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className={`relative z-10 max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
          <Sparkles size={16} />
          <span>Our Process</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-2 leading-tight">
          {Home.How_We_Work_section.title}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {Home.How_We_Work_section.description}
        </p>
      </div>

      {/* Process Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          
          {Home.How_We_Work_section.cards.map((step, index) => (
            <div 
              key={step.id}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              {/* Gradient Top Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-[${step.color}] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              {/* Number Watermark */}
              <div className="absolute -right-4 -top-[80px] text-[200px] font-bold text-slate-100 opacity-50 group-hover:text-slate-100 group-hover:scale-110 transition-all duration-500 select-none z-0">
                {step.id}
              </div>

              <div className="relative z-10">
                {/* Step Number Badge */}
                <div className={`w-14 h-14 rounded-2xl bg-[${step.color}] shadow-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">{step.id}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action Card (Fills the last slot nicely) */}
          <div 
            className={`flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg text-white transition-all duration-700 delay-700 ease-out hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 animate-pulse">
              <CheckCircle2 size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{Home.How_We_Work_section.next_step_card.title}</h3>
            <p className="text-blue-100 mb-6 text-sm">{Home.How_We_Work_section.next_step_card.description}</p>
            <button className=" px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-md" style={{
              backgroundColor:Home.How_We_Work_section.next_step_card.background_color,
              color:Home.How_We_Work_section.next_step_card.text_color
            }}>
              {Home.How_We_Work_section.next_step_card.button}
            </button>
          </div>

        </div>
      </div>
      
      {/* CSS for Blob Animation */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}