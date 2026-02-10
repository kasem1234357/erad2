//@ts-nocheck
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Settings, Users, Database, BarChart3, Package, ShoppingCart, Warehouse, DollarSign } from 'lucide-react';
import { mockData } from '../data/mock';
import { useGetDictionary, type DictionaryType } from '../hooks/useGetDictionary';
import { useSelector } from 'react-redux';

export const OdooImplementation = () => {
  const {odoo_services}:DictionaryType = useGetDictionary()
  const lang = useSelector((state: any) => state?.control?.lang);
  const modules = [
    { name: 'Accounting', icon: BarChart3, description: 'Complete financial management' },
    { name: 'Sales', icon: ShoppingCart, description: 'CRM and sales pipeline' },
    { name: 'Purchase', icon: Package, description: 'Procurement automation' },
    { name: 'Inventory', icon: Warehouse, description: 'Stock and warehouse management' },
    { name: 'HR & Payroll', icon: Users, description: 'Employee management' },
    { name: 'Projects', icon: Settings, description: 'Project tracking' },
  ].map((item:any,index:number)=>{ 
    if(odoo_services.implementation?.modules[index]){
      return Object.assign(item,{name:odoo_services.implementation?.modules[index]?.name,description:odoo_services.implementation?.modules[index]?.description})
    }
    
  });
  const whyErad = [
    'Official Odoo Ready Partner',
    'UAE TAX-first setup',
    'Implementation based on your specific business requirements',
    'Practical training and ongoing support',
    'Accountants leading the implementation, not just IT'
  ];

  return (
    <div className="min-h-screen" style={{
      direction:lang === 'ar'?"rtl":"ltr"
    }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-white">Odoo Ready Partner</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {odoo_services.implementation?.hero?.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {odoo_services.implementation?.hero?.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {odoo_services.implementation?.hero?.ctaText}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is Odoo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{odoo_services.implementation?.what_is_odoo?.title}</h2>
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                {odoo_services.implementation?.what_is_odoo?.description.map((item,index)=>{
                  return <p className="text-lg mb-4" key={index}>{item}</p>
                })
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Odoo Modules */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Odoo Modules for Your Business</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => {
                const Icon = module.icon || Database;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{module.name}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Erad */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{odoo_services.implementation?.why_erad_partner?.title}</h2>
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {odoo_services.implementation?.why_erad_partner?.features.map((item, index) => (
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

      {/* Implementation Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{odoo_services.implementation?.implementation_process?.title}</h2>
            <div className="space-y-4">
              {odoo_services.implementation?.implementation_process?.steps.map((item, index) => (
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{odoo_services.implementation?.benefits?.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {odoo_services.implementation?.benefits?.benefits_list.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
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
            <h2 className="text-3xl font-bold mb-4">{odoo_services.implementation?.cta?.title}</h2>
            <p className="text-xl mb-8 text-white/90">
              {odoo_services.implementation?.cta?.description}
            </p>
            <a href={`https://wa.me/${mockData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                {odoo_services.implementation?.cta?.button_text}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooImplementation;
