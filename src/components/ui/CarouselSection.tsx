import  { useState,  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGetDictionary, type DictionaryType } from '../../hooks/useGetDictionary';
import ProfessionalServices from '../../assets/Professional Services.jpg';
import parse from 'html-react-parser'

const industries = [
  {
    title: "Trading & Distribution",
    titleAr: "التجارة والتوزيع",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Professional Services",
    titleAr: "الخدمات المهنية",
    image: ProfessionalServices,
  },
  {
    title: "Hospitality",
    titleAr: "الضيافة",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Property Management",
    titleAr: "إدارة العقارات",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Contracting & Construction",
    titleAr: "المقاولات والإنشاءات",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Startups",
    titleAr: "الشركات الناشئة",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
  }
];

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const {Home}:DictionaryType = useGetDictionary()
  //@ts-ignore
  const indutriesKey = Home['industries_section']||Home['Industries_We_Serve_section']
  // حساب عدد العناصر المعروضة بناءً على حجم الشاشة (محاكاة بسيطة)
//   const itemsPerPage = 3; 

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 3) % industries.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 3 + industries.length) % industries.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{indutriesKey?.title}</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4 md:px-12">
          <div className="flex items-center justify-between absolute inset-y-0 left-0 right-0 z-10 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto p-3 rounded-full bg-white shadow-lg text-slate-800 hover:bg-blue-600 hover:text-white transition-all transform -translate-x-2 md:-translate-x-6"
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto p-3 rounded-full bg-white shadow-lg text-slate-800 hover:bg-blue-600 hover:text-white transition-all transform translate-x-2 md:translate-x-6"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % industries.length;
                const item = industries[index];
                return (
                  <motion.div
                    key={`${index}-${offset}`}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative group h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
                  >
                    {/* Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold leading-tight">{indutriesKey?.industries[index]}</h3>
                      <p className="text-sm text-blue-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Solutions &rarr;
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {[0,1].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === idx*3 ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center text-slate-600">
          <p className="text-lg " dir='ltr'>
            {parse(indutriesKey?.description || '')}
          </p>
        </div>
        
      </div>
    </div>
  );
}