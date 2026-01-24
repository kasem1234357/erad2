//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, AlertTriangle, Shield } from 'lucide-react';
import { mockData } from '../data/mock';

export const VATConsultant = () => {
  const services = [
    'VAT registration & deregistration',
    'VAT return preparation & filing',
    'VAT health checks',
    'Review of tax invoices & records',
    'FTA audit preparation & support'
  ];

  const risks = [
    { issue: 'Wrong invoices and incorrect VAT rates', consequence: 'Penalty fines from FTA' },
    { issue: 'Missing or invalid tax invoices', consequence: 'Audit triggers and business disruption' },
    { issue: 'Late or incorrect VAT filings', consequence: 'Accumulated penalties and interest' },
    { issue: 'Poor record-keeping', consequence: 'Compliance failures during audits' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              VAT Compliance Without Penalties
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              VAT compliance in the UAE is not optional. Mistakes can lead to fines, audits, and business disruption. Erad provides end-to-end VAT consultancy services to help SMEs stay compliant, accurate, and protected.
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Book a Free VAT Health Check
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Our VAT Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our VAT Services</h2>
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {services.map((service, index) => (
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

      {/* Common VAT Risks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Common VAT Risks We Fix</h2>
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
          </div>
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
                    <CardTitle className="text-2xl mb-2">Protect Your Business Today</CardTitle>
                    <CardDescription className="text-base">
                      The Federal Tax Authority conducts regular audits. Don't wait for a penalty notice to fix your VAT compliance.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-destructive mb-1">20%</div>
                    <p className="text-sm text-muted-foreground">Penalty on VAT amount</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-destructive mb-1">AED 15K</div>
                    <p className="text-sm text-muted-foreground">Fine for late filing</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-destructive mb-1">300%</div>
                    <p className="text-sm text-muted-foreground">Penalty for tax evasion</p>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">Don't Risk VAT Penalties</h2>
            <p className="text-xl mb-8 text-white/90">
              Book a free VAT health check now and identify risks before the FTA does
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book Free VAT Health Check
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VATConsultant;
