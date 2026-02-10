//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, AlertTriangle, Shield } from 'lucide-react';
import { mockData } from '../data/mock';
import ModernSection from '../components/ui/Test';
import {  features3, vat_consultant_cards_style } from '../assets/constants';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';
import { useSelector } from 'react-redux';

export const VATConsultant = () => {
  const {vat_consultant}:DictionaryType = useGetDictionary()
  const lang = useSelector((state: any) => state?.control?.lang);
  const services = [
    'TAX registration & deregistration',
    'TAX return preparation & filing',
    'TAX health checks',
    'Review of tax invoices & records',
    'TAX audit preparation & support'
  ];

  const risks = [
    { issue: 'Wrong invoices and incorrect TAX rates', consequence: 'Penalty fines from TAX' },
    { issue: 'Missing or invalid tax invoices', consequence: 'Audit triggers and business disruption' },
    { issue: 'Late or incorrect TAX filings', consequence: 'Accumulated penalties and interest' },
    { issue: 'Poor record-keeping', consequence: 'Compliance failures during audits' }
  ];
  return (
    <div className="min-h-screen" style={{
      direction:lang === 'ar'? 'rtl' : 'ltr'
    }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {vat_consultant.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {vat_consultant.hero.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {vat_consultant.hero.ctaText}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Our TAX Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{vat_consultant.services.title}</h2>
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {vat_consultant.services.list.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common TAX Risks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ModernSection content={vat_consultant.risks.items} stylesList={vat_consultant_cards_style} titleKey={"issue"} descKey={"consequence"} title={vat_consultant.risks.title} desc={vat_consultant.risks.subtitle} numberOfColumn={2} />
          {/* <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Common TAX Risks We Fix</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't let these common mistakes put your business at risk
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {risks.map((risk, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg mb-2">{risk.issue}</CardTitle>
                        <CardDescription className="text-destructive">
                          ⚠️ {risk.consequence}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Why Act Now */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-secondary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{
                      vat_consultant.penalties_section.title
                      }</CardTitle>
                    <CardDescription className="text-base">
                      {vat_consultant.penalties_section.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {vat_consultant.penalties_section.stats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                 
                 
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{vat_consultant.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">
              {vat_consultant.cta.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                {vat_consultant.cta.cta_button}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VATConsultant;
