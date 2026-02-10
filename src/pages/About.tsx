//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, Users, Award, Target } from 'lucide-react';
import { mockData } from '../data/mock';

import aboutBg from '../assets/4.jpg'
import { CertificateCard } from '../components/ui/Certifications';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';
import CarouselSection from '../components/ui/CarouselSection';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import CertificationsSection from '../components/ui/CertificationsSection';


export const About = () => {
  const {About,Certifications}:DictionaryType = useGetDictionary()
  const lang = useSelector((state: any) => state.control.lang);
  
  return (
    <div className="min-h-screen" style={{
      direction:lang === 'ar'?"rtl":'ltr'
    }}>
      {/* Hero */}
      <section className="relative bg-linear-to-br from-slate-50 via-white to-secondary/10 py-20 pb-0 lg:py-32 min-h-screen flex">
      <div className="absolute inset-0 w-full h-full   bg-black/60">
        <img src={aboutBg} alt="" className='w-full h-full object-cover opacity-50'/>
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-30 grid place-content-center" >
          <div className="max-w-4xl mx-auto text-center">
           
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {About.hero.title}
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {About.hero.subtitle}
            </p>
            
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{About.who_we_are.title}</h2>
            <div className="prose prose-lg max-w-none">
               {typeof About.who_we_are.description === 'object'? About.who_we_are.description?.map((item,index)=>{
                return<p className="text-lg text-muted-foreground">
                  {parse(item)}
              </p>
               }):<p className="text-lg text-muted-foreground">
                  {parse(About?.who_we_are?.description || '')}
              </p>}
              
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{About.differentiators.title}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {About.differentiators.items?.map((item,index)=>{
                return (
                  <Card key={index}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {parse(item.content)}
                  </p>
                </CardContent>
              </Card>
                )
              })}
              

              
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center"></h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{About.experience_stats[0].value}</div>
                <p className="text-muted-foreground">{About.experience_stats[0].label}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">{About.experience_stats[1].value}</div>
                <p className="text-muted-foreground">{About.experience_stats[1].label}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">{About.experience_stats[2].value}</div>
                <p className="text-muted-foreground">{About.experience_stats[2].label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
     <CarouselSection/>
      {/* Certifications */}
      <CertificationsSection/>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{About.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">
              {About.cta.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                {About.cta.buttonText}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
