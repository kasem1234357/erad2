//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import { mockData } from '../data/mock';
import { useSelector } from 'react-redux';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';

export const SmallBusinessAccounting = () => {
  const lang = useSelector((state: any) => state?.control?.lang);
  const {small_business_accounting}:DictionaryType = useGetDictionary();
  const challenges = [
    'Limited accounting staff or expertise',
    'Difficulty staying TAX-compliant',
    'Manual processes prone to errors',
    'Lack of real-time financial visibility',
    'Inability to scale systems as business grows'
  ];
  const why_smes_choose_erad_icons=[
    Users,
    TrendingUp,
    Shield,
  ]
  const smeApproach = [
    { title: 'Scalable Accounting Systems', description: 'Start simple, grow as you need', icon: TrendingUp },
    { title: 'TAX-Ready from Day One', description: 'Compliant from your first transaction', icon: Shield },
    { title: 'Automation Using Odoo', description: 'Eliminate manual work and errors', icon: Zap },
    { title: 'Clear Reporting for Owners', description: 'Understand your numbers at a glance', icon: Users }
  ].map((item, index) => {
      if(small_business_accounting.sme_approach.items[index]){
        return Object.assign(item, {title:small_business_accounting.sme_approach.items[index].title, description:small_business_accounting.sme_approach.items[index].description,})
      }

  })

  return (
    <div className="min-h-screen" style={{
      direction:lang === 'ar'?"rtl":"ltr"
    }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
               {small_business_accounting.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {small_business_accounting.hero.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {small_business_accounting.hero.ctaText}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SME Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{small_business_accounting.challenges.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {small_business_accounting.challenges.description}
            </p>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {small_business_accounting.challenges.list.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span className="text-lg">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our SME Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{small_business_accounting.sme_approach.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {smeApproach.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
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

      {/* Services for SMEs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{small_business_accounting.sme_services.title}</h2>
            <div className="space-y-6">
              {small_business_accounting.sme_services.list.map((service, index) => (
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

      {/* Why SMEs Choose Erad */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{small_business_accounting.why_smes_choose_erad.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {small_business_accounting.why_smes_choose_erad.reasons.map((feature, index) => {
                  const Icon = why_smes_choose_erad_icons[index];
                return(
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )})}

              
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{small_business_accounting.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">
              {small_business_accounting.cta.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                {small_business_accounting.cta.buttonText}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusinessAccounting;
