import { ThemeToggle } from "../components/ThemeToggle";    
import { Navbar } from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactsSection } from "../components/ContactsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
        <ThemeToggle />

        {/*Background Effects */}
        <StarBackground />

        {/*NavBar */}
        <Navbar />

        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactsSection /> 
        </main>

        {/*Footer*/}
        <Footer />
    </div>
    );
};
