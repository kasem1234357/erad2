//@ts-nocheck
import parse from 'html-react-parser';

const ModernSection = ({features,title,desc,numberOfColumn=2,customContainerClass,customCardClass}:any) => {
  // ⚠️ يرجى تعبئة النصوص أدناه من الصورة التي لديك لضمان التطابق التام
  

  return (
    <div className="min-h-80vh  font-sans" dir="ltr">
      {/* Decorative Background Shape */}
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-r from-blue-700 to-indigo-800 rounded-b-[3rem] shadow-xl -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-4">
          
          <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
         <p className="text-center text-muted-foreground mb-6">{parse(desc)}</p>
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-${numberOfColumn} lg:grid-cols-${numberOfColumn} gap-4 w-[90%]  mx-auto ${customContainerClass ? customContainerClass : ''}`}>
          {features.map((feature, index) => {
            const isLastOddItem = features.length % 2 !== 0 && index === features.length - 1;
            return(
            <div 
              key={index} 
              className={`group bg-white rounded-2xl p-8 lg:p-4  shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 relative overflow-hidden ${customCardClass}  `}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${feature.color.replace('bg-', 'bg-linear-to-r from-transparent to-')}`}></div>
              
              {/* Icon Container */}
              <div className='w-full flex gap-4 items-start '>
                 <div className={`w-16 h-16 aspect-square rounded-2xl ${feature.color} flex items-center justify-center  shadow-md transform group-hover:rotate-6 transition-transform duration-300`}>
                {feature.icon}
                
              </div>
              <div className='flex flex-col gap-2'>
                  <h3 className="text-xl font-bold text-slate-800  group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>
               <p className="text-slate-600  leading-6">
                {feature.description}
              </p>
              </div>
             
              </div>
             

             
              
             

              {/* Decorative Corner Circle */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${feature.color} opacity-5 group-hover:scale-150 transition-transform duration-500`}></div>
            </div>
          )})}
        </div>

        {/* Bottom CTA */}
      

      </div>
    </div>
  );
};

export default ModernSection;