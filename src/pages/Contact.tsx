import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';
import heroContact from '@/assets/hero-contact.jpg';

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: "Behind Bus Stop, Near Satwa Mata Mandir, Saoner, Maharashtra 441107",
    description: "Main campus with all facilities"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98233 09877",
    description: "Call us during business hours"
  },
  {
    icon: Mail,
    title: "Email",
    details: "shabdaprakash88@gmail.com",
    description: "Send us your queries anytime"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon - Sat: 8:00 AM - 8:00 PM",
    description: "Sunday: Closed"
  }
];

const Contact = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={heroContact} 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Get in touch with us for admissions, course information, or any queries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">{info.details}</p>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form 
                className="space-y-6"
                action={`https://api.whatsapp.com/send?phone=919823309877`}
                method="get"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const firstName = formData.get('firstName');
                  const lastName = formData.get('lastName');
                  const email = formData.get('email');
                  const phone = formData.get('phone');
                  const course = formData.get('course');
                  const message = formData.get('message');
                  
                  const whatsappMessage = `Hello! I'm interested in Shabdashri Tuition Classes.%0A%0AName: ${firstName} ${lastName}%0AEmail: ${email}%0APhone: ${phone}%0ACourse Interest: ${course}%0A%0AMessage: ${message}`;
                  
                  window.open(`https://api.whatsapp.com/send?phone=919823309877&text=${whatsappMessage}`, '_blank');
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                
                <div>
                  <Label htmlFor="course">Course of Interest</Label>
                  <Input id="course" name="course" placeholder="e.g., MHT CET, NEET, JEE" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your requirements or any questions you have..."
                    rows={5}
                  />
                </div>
                
                <Button size="lg" className="w-full" type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message via WhatsApp
                </Button>
              </form>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <p className="text-muted-foreground mb-6">
                Visit our campus to learn more about our courses and facilities.
              </p>
              
              <div className="bg-gradient-card rounded-lg shadow-soft overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4567890123456!2d78.8888889!3d21.1111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA2JzQwLjAiTiA3OMKwNTMnMjAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shabdashri Tuition Classes Location"
                  className="w-full h-96 md:h-[400px]"
                ></iframe>
              </div>

              {/* Location Details */}
              <Card className="bg-gradient-card border-0 shadow-soft mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Behind Bus Stop,<br />
                    Near Satwa Mata Mandir,<br />
                    Saoner, Maharashtra<br />
                    441107
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-gray text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="bg-green-100 rounded-t-2xl p-8 text-black text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-6 text-black/90">
              Call us now for immediate assistance or to schedule a visit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91 9823309877
              </Button>
              {/* <Button size="lg" variant="outline" className="bg-transparent border-white text-black hover:bg-white hover:text-green-600"> */}
               <Button size="lg" variant="secondary">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;