//@ts-nocheck
/**
 * CertificationData: A structured array to hold certificate details.
 * This makes it easy to add or remove certifications in the future.
 */


export const CertificateCard = ({ cert, index }) => {
  // Determine if this row should be reversed based on index (Sketch alternating style)
  const isReversed = index % 2 !== 0;

  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
      {/* Text Content */}
      <div className={`flex-1 space-y-4 ${isReversed ? 'text-right md:text-left' : 'text-left'}`}>
        <h3 className="text-2xl font-bold text-blue-900 leading-tight">
          {cert.title}
        </h3>
        <div className="space-y-3 text-gray-600 leading-relaxed">
          <p className="font-semibold text-gray-800 text-lg">{cert.issuer}</p>
          <p>
            Awarded to <span className="text-gray-900 font-semibold">{cert.recipient}</span>. {cert.description}
          </p>
          <ul className="space-y-1">
            {cert.details.map((detail, idx) => (
              <li key={idx}>
                <span className="font-medium text-gray-800">{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 w-full max-w-lg">
        <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-inner transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
            onError={(e) => {
              e.target.src = `https://placehold.co/600x400?text=${encodeURIComponent(cert.fallbackText)}`;
            }}
          />
        </div>
      </div>
    </div>
  );
};
