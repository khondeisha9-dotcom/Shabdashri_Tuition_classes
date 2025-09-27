import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, GraduationCap, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroStudents from '@/assets/hero-students.jpg';

const services = [
  {
    icon: GraduationCap,
    title: "MHT CET Classes",
    description: "Comprehensive preparation for Maharashtra Common Entrance Test",
  },
  {
    icon: BookOpen,
    title: "NEET Preparation",
    description: "Medical entrance exam coaching with expert faculty",
  },
  {
    icon: Award,
    title: "JEE Classes",
    description: "Engineering entrance exam preparation for JEE Main & Advanced",
  },
  {
    icon: Users,
    title: "11th & 12th Science",
    description: "Complete board exam preparation with conceptual clarity",
  },
];

const features = [
  "Expert Faculty",
  "Small Batch Size",
  "Personalized Attention",
  "Regular Mock Tests",
  "Study Material",
  "Performance Tracking",
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={heroStudents} 
            alt="Students studying" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excellence in Education at{" "}
              <span className="text-accent">Shabdashri Tuition Classes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Empowering students with quality education, personalized attention, 
              and innovative teaching methodologies for academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">
                  Explore Our Courses
                  <ChevronRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coaching programs designed to help students achieve their academic goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Shabdashri Tuition Classes?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are committed to providing quality education with a focus on individual 
                student growth and academic excellence. Our proven teaching methods and 
                experienced faculty ensure the best learning outcomes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-accent fill-current" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="mt-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-secondary rounded-2xl p-8 text-secondary-foreground">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">500+</div>
                <div className="text-xl mb-6">Successful Students</div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of successful students who achieved their dreams with us
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get Started Today
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;