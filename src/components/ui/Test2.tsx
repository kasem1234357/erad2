import  { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useGetDictionary, type DictionaryType,  } from '../../hooks/useGetDictionary';

/**
 * تم تعديل الكود ليعمل بشكل مستقل في بيئة العرض (Preview) 
 * مع الحفاظ على هيكلية البيانات الأصلية (Home.How_We_Work_section).
 */

export default function Test2() {
  const [isVisible, setIsVisible] = useState(false);
  const {Home}:DictionaryType = useGetDictionary()
  console.log(Home);
  
  const images =[
       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
       "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"

  ]
  // المحتوى الأصلي كما هو دون أي تغيير في النصوص أو المفاتيح
 
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 overflow-hidden relative selection:bg-blue-100">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
            <Sparkles size={16} />
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            {Home.How_We_Work_section.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {Home.How_We_Work_section.description}
          </p>
        </div>

        {/* Vertical Journey Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-[400px] bottom-64 w-px -translate-x-1/2 z-0 border-l-2 border-dashed border-slate-200"></div>

        {/* Process Flow - Zig Zag */}
        <div className="relative z-10 space-y-24 lg:space-y-40">
          {Home?.How_We_Work_section.cards?.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div 
                key={step.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content Area */}
                <div className={`flex-1 w-full text-center lg:text-left ${isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                  <div className="relative group p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white hover:bg-white transition-all duration-500 hover:shadow-2xl overflow-hidden">
                    {/* Step ID Watermark */}
                    <div className="absolute -top-6 -right-4 text-[120px] font-black text-slate-100/50 group-hover:text-slate-100 transition-colors pointer-events-none select-none z-0">
                      {step.id}
                    </div>

                    <div className="relative z-10">
                      <div 
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white font-bold mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.id}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="flex items-center justify-center lg:justify-start text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all cursor-pointer">
                        Learn more <ArrowRight size={18} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Node (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 z-20 shadow-xl transition-transform hover:scale-125" style={{ borderColor: step.color }}></div>

                {/* Image Area */}
                <div className={`flex-1 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl aspect-video lg:aspect-square max-h-[400px] mx-auto">
                    <div 
                      className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 z-10"
                      style={{ backgroundColor: step.color }}
                    ></div>
                    <img 
                      src={images[index] || ''} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Call to Action Card */}
          <div 
            className={`max-w-4xl mx-auto p-12 text-center bg-[#2D538A] rounded-[3rem] shadow-2xl text-white relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            {/* Background Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{Home.How_We_Work_section.next_step_card.title}</h3>
              <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">{Home.How_We_Work_section.next_step_card.description}</p>
              
              <button 
                className="px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-blue-900/40" 
                style={{
                  backgroundColor: Home.How_We_Work_section.next_step_card.background_color,
                  color: Home.How_We_Work_section.next_step_card.text_color
                }}
              >
                {Home.How_We_Work_section.next_step_card.button}
              </button>
            </div>
          </div>
        </div>
      </div>

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