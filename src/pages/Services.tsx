import { GraduationCap, BookOpen, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import heroServices from '@/assets/hero-services.jpg';

const services = [
  {
    icon: GraduationCap,
    title: "MHT CET Classes",
    description: "Comprehensive preparation for Maharashtra Common Entrance Test with expert guidance and proven strategies.",
    features: ["Physics, Chemistry, Biology/Maths", "Mock Tests & Analysis", "Previous Year Papers", "Doubt Clearing Sessions"],
    duration: "1 Year Program",
    batchSize: "15-20 Students",
    color: "bg-blue-500"
  },
  {
    icon: BookOpen,
    title: "NEET Preparation",
    description: "Medical entrance exam coaching with specialized focus on Physics, Chemistry, and Biology.",
    features: ["Conceptual Clarity", "NCERT Based Teaching", "Regular Assessment", "All India Mock Tests"],
    duration: "1-2 Year Program", 
    batchSize: "12-15 Students",
    color: "bg-green-500"
  },
  {
    icon: Award,
    title: "JEE Classes",
    description: "Engineering entrance exam preparation for JEE Main & Advanced with comprehensive coverage.",
    features: ["Mathematics, Physics, Chemistry", "Problem Solving Techniques", "Online Test Series", "Mentorship Program"],
    duration: "1-2 Year Program",
    batchSize: "15-20 Students", 
    color: "bg-purple-500"
  },
  {
    icon: Users,
    title: "11th & 12th Science",
    description: "Complete board exam preparation with conceptual clarity and practical understanding.",
    features: ["Board Exam Pattern", "Internal Assessment Help", "Practical Sessions", "Revision Classes"],
    duration: "Academic Year",
    batchSize: "20-25 Students",
    color: "bg-orange-500"
  },
];

const additionalServices = [
  {
    title: "8th, 9th & 10th CBSE",
    description: "Foundation building for CBSE students with focus on conceptual understanding",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    icon: BookOpen
  },
  {
    title: "8th, 9th & 10th State Board",
    description: "State board curriculum coverage with emphasis on board exam preparation",
    subjects: ["Mathematics", "Science", "English", "Regional Language"],
    icon: GraduationCap
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={heroServices} 
            alt="Educational services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Comprehensive coaching programs designed to help students excel in their academic journey
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entrance Exam Preparation</h2>
            <p className="text-xl text-muted-foreground">
              Specialized coaching for competitive exams with proven success rates
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Users className="w-3 h-3 mr-1" />
                            {service.batchSize}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Course Features:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Classes */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Foundation Classes</h2>
            <p className="text-xl text-muted-foreground">
              Building strong academic foundations for middle and high school students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Services Stand Out</h2>
            <p className="text-xl text-muted-foreground">
              What makes our coaching programs effective and successful
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
              <p className="text-muted-foreground text-sm">
                Experienced teachers with subject expertise and proven track records
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Material</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive study materials and practice tests designed by experts
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground text-sm">
                High success rates and excellent performance by our students
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Individual Care</h3>
              <p className="text-muted-foreground text-sm">
                Personalized attention and regular progress monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join our proven coaching programs and achieve your academic goals
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;