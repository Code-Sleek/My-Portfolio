import { Linkedin, Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import { cn } from "../lib/utils"; 
import React, {useRef} from "react"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ContactsSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_x4aw98a",
            "template_fk9ryes",
            form.current,
            "KdmVLeYRjzleIaFBT"
        )
        .then(
            () => {
                console.log("✅ Email sent! Triggering toast...")
                toast.success("✅ Message sent successfully!");
                e.target.reset();
            },
            (error) => {
                console.error(error);
                toast.error("❌ Failed to send message. Please try again!");
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setTimeout(() => {
            
        }, 1500);
    };
    
    return (
        <section 
        id="contact" 
        className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In{" "}
                    <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    Feel free to reach out to me through any of the platforms below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold b-6">
                            {" "}
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex item-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary "/>{" "}
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:coorayyashodha@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    coorayyashodha@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex item-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary "/>{"   "}
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+94706080877" className="text-muted-foreground hover:text-primary transition-colors">
                                    +94 706 80877
                                    </a>
                            </div>
                            </div>
                            <div className="flex item-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary "/>{" "}
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Colombo, Sri Lanka
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4> Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/yashodha-cooray/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </a>
                                <a href="https://www.instagram.com/lavy_bliss/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Instagram className="h-6 w-6 text-primary" />
                                </a>
                            </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className=" text-2xl font-semibold mb-6">Send me a message</h3>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Yash..." />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="john@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <input 
                            type="text" 
                            id="message" 
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello, I would like to..." />
                        </div>
                        <button type="submit"
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Send Message
                            <Send size={16} />
                        </button>
                    </form>

                    {/* Toast Notification Container */}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        pauseOnHover
                        draggable
                        theme="dark"/>
                </div>
            </div>
            </div>
            
        </section>
    );
};