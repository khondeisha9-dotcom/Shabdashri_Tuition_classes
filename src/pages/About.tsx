import { Users, Award, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroAbout from '@/assets/hero-about.jpg';

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for academic excellence and help students achieve their highest potential."
  },
  {
    icon: Heart,
    title: "Care",
    description: "We provide personalized attention and care for each student's individual needs."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use innovative teaching methods and modern educational technology."
  },
];

const stats = [
  { number: "500+", label: "Students Taught" },
  { number: "95%", label: "Success Rate" },
  { number: "10+", label: "Years Experience" },
  { number: "25+", label: "Expert Teachers" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={heroAbout} 
            alt="Educational institution" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shabdashri Tuition Classes</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Nurturing minds, shaping futures, and building the leaders of tomorrow through quality education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded with a vision to provide quality education accessible to all
              </p>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                Shabdashri Tuition Classes was established with a simple yet powerful mission: to provide 
                quality education that empowers students to achieve their academic goals and realize their 
                full potential. Over the years, we have grown from a small tutoring center to a recognized 
                institution that has helped hundreds of students succeed in their academic pursuits.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our founder's vision was to create an educational environment where every student receives 
                personalized attention, where learning is engaging and effective, and where success is 
                measured not just by grades but by the confidence and knowledge students gain.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we continue to uphold these values while embracing modern teaching methodologies 
                and technology to enhance the learning experience. Our commitment to excellence has made 
                us a trusted name in education, and we take pride in being part of our students' success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}


     
     <section className="py-16 bg-muted">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
      <p className="text-xl text-muted-foreground">
        The principles that guide everything we do
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <Card
          key={index}
          className="bg-white border-0 shadow-soft text-center transition-colors duration-300 hover:bg-blue-500"
        >
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <value.icon className="w-8 h-8 text-black" />
            </div>
            <CardTitle className="text-2xl">{value.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              {value.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      {/* Our Approach */}
<section className="py-16  text-primary-foreground">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-4xl mx-auto mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Our Teaching Approach</h2>

      <p className="text-xl mb-8 opacity-90">
        We believe in making learning engaging, effective, and enjoyable
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Small Batch Sizes Card */}
      <Card className="bg-gradient-card border-0 shadow-soft text-center">
        <CardHeader>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Small Batch Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Limited students per batch ensure personalized attention for every student
          </CardDescription>
        </CardContent>
      </Card>

      {/* Comprehensive Material Card */}
      <Card className="bg-gradient-card border-0 shadow-soft text-center">
        <CardHeader>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Comprehensive Material</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Well-researched study materials and regular practice tests
          </CardDescription>
        </CardContent>
      </Card>

      {/* Expert Faculty Card */}
      <Card className="bg-gradient-card border-0 shadow-soft text-center">
        <CardHeader>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Expert Faculty</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Experienced teachers with proven track records in their subjects
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default About;