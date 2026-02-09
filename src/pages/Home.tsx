//@ts-nocheck
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calculator, Shield, Settings, Award, BookCheck, Users, Target, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';
import bg4 from '../assets/4.jpg'
import parse from 'html-react-parser';
import bg2 from '../assets/2.jpg'
import bg3 from '../assets/3.jpg'
import certificate1 from '../assets/لقطة شاشة 2026-01-24 113705.png';
import certificate2 from '../assets/photo_2026-01-24_11-28-33.jpg';
import ModernSection from '../components/ui/Test';
import { StarButton } from '../components/ui/CustmBusston';
import { CertificateCard } from '../components/ui/Certifications';
import Test2 from '../components/ui/Test2';
import { Core_Services_section_cards_style, SME_Challenge_section_cards_style } from '../assets/constants';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';
import CarouselSection from '../components/ui/CarouselSection';
import { useSelector } from 'react-redux';
import { cn } from '../lib/utils';
const Why_Erad_Odoo_sectionIcons = ["Award","BookCheck","Users","Target"];
const iconMap = {
  Calculator,
  Shield,
  Settings,
  Award,
  BookCheck,
  Users,
  Target
};
const certifications = [
  {
    id: 1,
    title: "Diploma in UAE Corporate Tax",
    issuer: "Association of Tax Technicians (ATT)",
    recipient: "Abdulraouf Abbas",
    description: "Awarded for successfully completing the professional requirements in UAE Corporate Tax legislation and practice.",
    details: [
      { label: "Issue Date", value: "08/05/23" },
      { label: "Certificate No", value: "266116" }
    ],
    image: certificate1,
    fallbackText: "Diploma in UAE Corporate Tax"
  },
  {
    id: 2,
    title: "Fellowship Certificate",
    issuer: "Emirates Association for Accountants & Auditors",
    recipient: "Abdulraouf Abdollatif Abbas",
    description: "Awarded as \"Fellow Member\" based on Board Decision. Accredited in the United Arab Emirates under the UAE Professional Fellowship Programme.",
    details: [
      { label: "Fellowship No", value: "505" },
      { label: "Validity", value: "25/01/2024 - 25/01/2025" }
    ],
    image: certificate2,
    fallbackText: "Fellowship Certificate"
  }
];

export const Home = () => {
  const { Header,Home }: DictionaryType = useGetDictionary();
  const lang = useSelector((state: any) => state.control.lang);
   console.log(Home);
   
  return (
    <div className={cn("min-h-screen ")} style={{
      direction:lang === 'ar'?"rtl":'ltr'
    }}>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-50 via-white to-secondary/10 py-20 pb-0 lg:py-32 min-h-screen flex">
      <div className="absolute inset-0 w-full h-full   bg-black/60">
        <img src={bg2} alt="" className='w-full h-full object-cover opacity-50'/>
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-30">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[#714B67] text-white">Odoo Ready Partner</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {Home.h1_title}
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {Home.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-secondary scaleHover">
                  {Home.buttons.Free_TAX_Health_Check}
                </Button>
              </a>
              <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                {/* <Button size="lg" className="bg-white hover:bg-white/90 text-primary">
                  Talk to an Accounting Expert
                </Button> */}
                <StarButton>{Home.buttons.Talk_to_an_Accounting_Expert}</StarButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className={cn(" bg-white ")}>
       
          <ModernSection content={Home.SME_Challenge_section.cards} stylesList={SME_Challenge_section_cards_style} title={Home.SME_Challenge_section.title} desc={Home.SME_Challenge_section.description}/>
         
      </section>
           <section className=" bg-white">
       
          <ModernSection content={Home.Core_Services_section.cards} stylesList={Core_Services_section_cards_style} title={Home.Core_Services_section.title} desc={Home.Core_Services_section.description}/>
         
      </section>
     

      {/* Why Erad + Odoo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{Home.Why_Erad_Odoo_section.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {Home.Why_Erad_Odoo_section.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {Home?.Why_Erad_Odoo_section?.cards?.map((item, index) => {
                const Icon = iconMap[Why_Erad_Odoo_sectionIcons[index]];
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 rounded-full bg-[#D5872D] flex items-center justify-center mb-4 ">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
            <header className="text-center mt-24 mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Official Certifications
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Certification Entries */}
        <main className="space-y-32">
          {certifications.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </main>
           
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{Home?.Our_UAE_Specific_Packages_section.title}</h2>
            <p className="text-xl text-slate-300">
              {Home?.Our_UAE_Specific_Packages_section.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Home?.Our_UAE_Specific_Packages_section?.Packages.map((pkg) => (
              <Card key={pkg.id} className={`${pkg.popular ? 'border-secondary border-2' : ''} bg-white flex flex-col justify-between `}>
                {pkg.popular && (
                  <div className="bg-secondary text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className='flex flex-col'>
                   <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-lg">{pkg.target}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
              
                <CardContent >
                  <ul className="space-y-3 ">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                 
                </CardContent>
                </div>
                
                 <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer" className='block px-6 mb-4'>
                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90 ">
                      {pkg.button}
                    </Button>
                  </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">{Home?.Statictics_section?.title}</h2>
            <p className="text-center text-muted-foreground mb-12">
              {Home.Statictics_section?.company} - {Home.Statictics_section?.number_of_customers}
            </p>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>{ Home.Statictics_section?.challenge}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {Home.Statictics_section?.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="text-sm text-muted-foreground">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
            <div className="space-y-6">
              {mockData.process.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Test2/>

      {/* Industries */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{Home.industries_section.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Home.industries_section.industries.map((industry, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border hover:border-secondary transition-colors">
                  <p className="font-medium">{industry}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground">
              {parse(Home.industries_section.description)}
            </p>
          </div>
        </div>
      </section> */}
      <CarouselSection/>

      {/* CTA Section */}
      <section className={`py-20 text-white ` } style={{
        backgroundColor:Home?.connect_section?.background_color
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{Home.connect_section?.title}</h2>
            <p className="text-xl mb-8 text-white/90">
              {Home.connect_section?.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                {Home.connect_section?.button}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
