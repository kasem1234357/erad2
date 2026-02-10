//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, FileCheck, Shield, AlertCircle } from 'lucide-react';
import { mockData } from '../data/mock';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';

export const FTACompliance = () => {
  const {fta_compliance}:DictionaryType = useGetDictionary()
  const iconMap = {
    AlertCircle,
    FileCheck,
    CheckCircle2,
    Shield
  }
  const benefitIcons = [Shield,FileCheck,CheckCircle2];
  // const ftaReviews = [
  //   'TAX returns & calculations',
  //   'Tax invoices & credit notes',
  //   'Accounting records',
  //   'TAX reconciliation',
  //   'Supporting documentation'
  // ];

  // const complianceProcess = [
  //   {
  //     step: 'TAX Risk Assessment',
  //     description: 'Identify potential compliance gaps and audit triggers',
  //     icon: AlertCircle
  //   },
  //   {
  //     step: 'Records & Invoice Review',
  //     description: 'Verify all tax invoices and documentation meet TAX standards',
  //     icon: FileCheck
  //   },
  //   {
  //     step: 'System Reconciliation',
  //     description: 'Ensure accounting records match TAX returns accurately',
  //     icon: CheckCircle2
  //   },
  //   {
  //     step: 'Compliance Report & Action Plan',
  //     description: 'Detailed findings with clear steps to achieve full compliance',
  //     icon: Shield
  //   }
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {fta_compliance.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {fta_compliance.hero.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {fta_compliance.hero.ctaText}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What TAX Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{fta_compliance.audit_areas.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              During an audit, the Federal Tax Authority scrutinizes these critical areas
            </p>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {fta_compliance.audit_areas.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{fta_compliance.process.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fta_compliance.process.steps.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">{item.step}</CardTitle>
                          <CardDescription className="text-base">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{fta_compliance.Benefits.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fta_compliance.Benefits.cards.map((item, index) => {
                const Icon = benefitIcons[index];
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}

  
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Don't Wait for the Audit</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  TAX audits can happen at any time. Being unprepared can result in:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Heavy financial penalties and interest charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Business disruption during prolonged audit processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Reputation damage and loss of business credibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Potential legal consequences for serious violations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Prepare Before the TAX Audits You</h2>
            <p className="text-xl mb-8 text-white/90">
              Get a comprehensive compliance review and action plan to protect your business
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Compliance Review
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FTACompliance;
