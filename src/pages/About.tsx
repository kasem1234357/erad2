//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, Users, Award, Target } from 'lucide-react';
import { mockData } from '../data/mock';
import certificate1 from '../assets/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg';
import certificate2 from '../assets/photo_2026-01-24_11-28-33.jpg';
import certificate3 from '../assets/لقطة شاشة 2026-01-24 113705.png'
import { CertificateCard } from '../components/ui/Certifications';
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
    image: certificate3,
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

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Erad
            </h1>
            <p className="text-xl text-muted-foreground">
              Accounting-first ERP implementation for UAE SMEs
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                We are a team of experts in both accounting and automation, with a blend of experiences in multiple industries: trading, property management, distribution, contracting, services (shipping and clearance, admin services), hospitality (restaurants and hotels), and startups.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over 15+ years in the UAE and Middle East, we have been able to deliver robust accounting and tax consultancies and services along with solid automation systems with the help of the Odoo framework.
              </p>
              <p className="text-lg text-muted-foreground">
                Our approach is practical, not theoretical — we understand real business challenges because we've solved them across dozens of companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why We're Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Accounting-First ERP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most ERP projects fail because accounting is an afterthought. At Erad, accountants lead the Odoo implementation — not just IT guys.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>SME-Focused Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand the unique challenges of small and medium businesses. Our solutions scale with your growth, not against it.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>TAX & TAX Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deep understanding of UAE tax regulations ensures your business stays compliant and protected from penalties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Practical, Not Theoretical</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We deliver real-world solutions that work for your business today, with the flexibility to grow tomorrow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Experience</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Years in UAE & Middle East</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">6+</div>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">SME-Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mockData.industries.map((industry, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border text-center hover:border-secondary transition-colors">
                  <p className="font-medium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Call Us Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Speak to one of our experts and discover how we can help your business
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Contact an Expert
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
