//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, AlertTriangle, Wrench, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mock';

export const AccountingSystemCleanup = () => {
  const signs = [
    'VAT returns don\'t match accounting records',
    'Financial reports don\'t make sense',
    'Multiple unreconciled balances',
    'ERP or accounting software misconfigured',
    'Unable to pass FTA audits',
    'Historical data is incomplete or inaccurate'
  ];

  const whatWeFix = [
    { issue: 'Incorrect Postings', description: 'Fix misclassified transactions and journal entries' },
    { issue: 'VAT Errors', description: 'Correct VAT rates, codes, and reconciliation issues' },
    { issue: 'Opening Balances', description: 'Reconcile and validate all opening balances' },
    { issue: 'Chart of Accounts', description: 'Restructure for UAE compliance and clarity' }
  ];

  const benefits = [
    { title: 'Accurate Financial Reports', icon: TrendingUp },
    { title: 'VAT-Ready Records', icon: CheckCircle2 },
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
              Fix Broken Accounting Systems Before They Cost You
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Messy books are more than an inconvenience; they're a risk. Erad specializes in accounting system cleanup for UAE businesses.
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Fix Your Accounting System
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Signs Your Books Are Broken */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Signs Your Books Are Broken</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Do any of these sound familiar?
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {signs.map((sign, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold mb-8">What We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whatWeFix.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center">Our Cleanup Process</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Initial Assessment', description: 'Comprehensive review of current accounting records and systems' },
                { step: 2, title: 'Error Identification', description: 'Identify all discrepancies, errors, and compliance gaps' },
                { step: 3, title: 'Data Reconciliation', description: 'Correct postings, reconcile accounts, and validate balances' },
                { step: 4, title: 'System Restructuring', description: 'Reorganize chart of accounts and implement proper controls' },
                { step: 5, title: 'Verification & Documentation', description: 'Final checks and complete documentation for future reference' }
              ].map((item) => (
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
            <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-2 border-destructive">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">The Cost of Doing Nothing</CardTitle>
                <CardDescription className="text-base">
                  Broken accounting systems lead to:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Failed FTA audits and heavy penalties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Poor business decisions based on incorrect data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
                    <span>Inability to implement ERP or automation tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">•</span>
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
