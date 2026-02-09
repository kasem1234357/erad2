import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../lib/redux/slices/controlSlice';

const LanguageSwitcher = () => {
  const lang = useSelector((state: any) => state.control.lang);
  const dispatch = useDispatch();

  // تحديث اتجاه الصفحة عند تغيير اللغة
  useEffect(() => {
    const htmlTag = document.documentElement;
    if (lang === 'en') {
    //   htmlTag.dir = 'ltr';
      htmlTag.lang = 'en';
    } else {
    //   htmlTag.dir = 'rtl';
      htmlTag.lang = 'ar';
    }
  }, [lang]);

  const toggleLanguage = (lang:"en"|"ar") => {
   
    dispatch(setLang(lang));
  };

  return (
    <div className="flex items-center justify-center">
      <div
        
        className="relative flex items-center w-20 h-9 p-1 bg-white border border-slate-200 rounded-full cursor-pointer shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none group overflow-hidden"
      >
        {/* الحل الجذري للحركة: 
            استخدام left بنسبة مئوية ثابتة بدلاً من translateX 
            لضمان أن الحركة لا تتأثر بتغير dir="rtl" 
        */}
        <div
          style={{ 
            backgroundColor: '#34598E',
            left: lang === 'en' ? '50%' : '4px',
            width: 'calc(50% - 4px)'
          }}
         
          className="absolute top-1 bottom-1 rounded-full shadow-md transition-all duration-300 ease-in-out z-10"
        />

        {/* خيار اللغة العربية */}
        <div
          onClick={()=>toggleLanguage('ar')}
          className={`relative z-20 flex-1 text-center text-xs font-black tracking-wider transition-colors duration-300 ${
            lang === 'ar' ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'
          }`}
        >
          AR
        </div>

        {/* خيار اللغة الإنجليزية */}
        <div
          onClick={()=>toggleLanguage('en')}
          className={`relative z-20 flex-1 text-center text-xs font-black tracking-wider transition-colors duration-300 ${
            lang==='en' ? 'text-white' : 'text-slate-400 group-hover:text-slate-500'
          }`}
        >
          EN
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;