//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

import { mockData } from '../data/mock';
import { useSelector } from 'react-redux';
import CarouselSection from '../components/ui/CarouselSection';
import CertificationsSection from '../components/ui/CertificationsSection';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';

export const OdooPartner = () => {
  const lang = useSelector((state: any) => state?.control?.lang);
  const {odoo_services}:DictionaryType = useGetDictionary()
  return (
    <div className="min-h-screen" style={{
      direction:lang === 'ar'?"rtl":"ltr"
    }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-white">{odoo_services.partner_status.badge}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {odoo_services.partner_status.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {odoo_services.partner_status.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {odoo_services.partner_status.button_text}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is Odoo Ready Partner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{ odoo_services.partner_status.definition_title }</h2>
            <Card className="shadow-none border-none">
              <CardContent className="pt-6 ">
                {odoo_services.partner_status.definition.map((item,index)=>{
                  return <p className="text-lg mb-4" key={index}>{item}</p>
                })
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{odoo_services.partner_status.odoo_services_title}</h2>
            <div className="space-y-6">
              {odoo_services.partner_status.service_list.map((service, index) => (
                <Card key={index} className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Badge */}
     <CertificationsSection/>

      {/* Industries */}
     <CarouselSection/>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{odoo_services.partner_status.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">
              {odoo_services.partner_status.cta.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                {odoo_services.partner_status.cta.cta_button}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooPartner;
