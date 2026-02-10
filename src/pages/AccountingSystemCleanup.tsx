//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, AlertTriangle, Wrench, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';

export const AccountingSystemCleanup = () => {
  const {system_cleanup}:DictionaryType = useGetDictionary()
  const signs = [
    'TAX returns don\'t match accounting records',
    'Financial reports don\'t make sense',
    'Multiple unreconciled balances',
    'ERP or accounting software misconfigured',
    'Unable to pass TAX audits',
    'Historical data is incomplete or inaccurate'
  ];

  const whatWeFix = [
    { issue: 'Incorrect Postings', description: 'Fix misclassified transactions and journal entries' },
    { issue: 'TAX Errors', description: 'Correct TAX rates, codes, and reconciliation issues' },
    { issue: 'Opening Balances', description: 'Reconcile and validate all opening balances' },
    { issue: 'Chart of Accounts', description: 'Restructure for UAE compliance and clarity' }
  ];

  const benefits = [
    { title: 'Accurate Financial Reports', icon: TrendingUp },
    { title: 'TAX-Ready Records', icon: CheckCircle2 },
    { title: 'Audit-Ready Systems', icon: CheckCircle2 },
    { title: 'Clean Foundation for ERP', icon: Wrench }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {system_cleanup.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {system_cleanup.hero.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {system_cleanup.hero.ctaText}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Signs Your Books Are Broken */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{system_cleanup.warning_signs.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {system_cleanup.warning_signs.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {system_cleanup.warning_signs.signs.map((sign, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{sign}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{system_cleanup.what_we_fix.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {system_cleanup.what_we_fix.items.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-2">
                      <Wrench className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{item.issue}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{system_cleanup.cleanup_process.title}</h2>
            <div className="space-y-4">
              {system_cleanup.cleanup_process.steps.map((item, index) => (
                <Card key={item.step} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Cleanup Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-base">{benefit.title}</CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">The Cost of Doing Nothing</CardTitle>
                <CardDescription className="text-base">
                  Broken accounting systems lead to:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Failed TAX audits and heavy penalties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Poor business decisions based on incorrect data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Inability to implement ERP or automation tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Loss of investor or bank confidence</span>
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
            <h2 className="text-3xl font-bold mb-4">Fix Your Accounting System Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Don't let messy books hold your business back. Call Erad and get your accounting right.
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Call Erad Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountingSystemCleanup;
