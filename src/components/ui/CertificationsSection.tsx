

import { useGetDictionary, type DictionaryType } from '../../hooks/useGetDictionary';
import certificate2 from '../../assets/photo_2026-01-24_11-28-33.jpg';
import certificate3 from '../../assets/لقطة شاشة 2026-01-24 113705.png'
import { CertificateCard } from './Certifications';
type Props = {}

function CertificationsSection({}: Props) {
    const certificateImages = [ 
       certificate3,certificate2
    ]
    const {Certifications}:DictionaryType = useGetDictionary()

  return (
   <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <header className="text-center mt-24 mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                      {Certifications.title}
                    </h2>
                    <div className="mt-4 h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                  </header>
          
                  {/* Certification Entries */}
                  <main className="space-y-32">
                    {Certifications.Certificate_list.map((cert, index) => (
                      <CertificateCard key={cert.id} cert={{...cert,image:certificateImages[index]}} index={index} />
                    ))}
                  </main>
          </div>
        </div>
      </section>
  )
}

export default CertificationsSection