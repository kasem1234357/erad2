//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, FileSearch, AlertTriangle, ClipboardCheck } from 'lucide-react';
import { mockData } from '../data/mock';

export const VATHealthCheck = () => {
  const whatWeReview = [
    'VAT returns accuracy and completeness',
    'Tax invoices format and compliance',
    'Accounting records and reconciliation',
    'VAT codes and rate applications',
    'Input and output VAT calculations'
  ];

  const deliverables = [
    { title: 'Risk Assessment Report', description: 'Comprehensive analysis of VAT compliance status', icon: FileSearch },
    { title: 'List of Errors & Gaps', description: 'Detailed identification of all issues found', icon: AlertTriangle },
    { title: 'Clear Corrective Actions', description: 'Step-by-step remediation plan', icon: ClipboardCheck }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              VAT Health Check for UAE SMEs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A VAT health check identifies risks before the FTA does. Get peace of mind with a comprehensive review of your VAT compliance.
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Book a Free VAT Health Check
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What We Review</h2>
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {whatWeReview.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why You Need It */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why You Need a VAT Health Check</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">Without VAT Health Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Hidden VAT errors accumulating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Risk of FTA penalties and fines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Unprepared for audits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Business disruption from compliance issues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary">
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">With VAT Health Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span>Identify and fix errors early</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span>Avoid costly penalties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span>Audit-ready at all times</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span>Peace of mind and confidence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Erad Gives You</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Book Your Check', description: 'Contact us via WhatsApp or phone to schedule your VAT health check' },
                { step: 2, title: 'Share Documents', description: 'Provide VAT returns, invoices, and accounting records for review' },
                { step: 3, title: 'Expert Analysis', description: 'Our team conducts comprehensive analysis of your VAT compliance' },
                { step: 4, title: 'Receive Report', description: 'Get detailed report with findings and action plan' },
                { step: 5, title: 'Fix Issues', description: 'We help you implement corrections and achieve full compliance' }
              ].map((item) => (
                <Card key={item.step} className="border-l-4 border-l-secondary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
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

      {/* Who Should Get It */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who Should Get a VAT Health Check?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Businesses registered for VAT in the UAE',
                'Companies preparing for FTA audits',
                'SMEs with frequent accounting changes',
                'Businesses that have received FTA notices',
                'Companies planning ERP implementation',
                'Startups ensuring VAT compliance from day one'
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Wait for an FTA Audit</h2>
            <p className="text-xl mb-8 text-white/90">
              Book a free VAT health check now and identify risks before they become penalties
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book Free Check Now — Call Erad!
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VATHealthCheck;
