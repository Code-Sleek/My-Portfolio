import { TrendingUp, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Undergraduate at Sri Lanka Institute of Information Technology
                    </h3>
                    <p className="text-muted-foreground">
                        I completed my Advanced Level studies in Physical Science and am currently 
                        in my third year as an undergraduate pursuing a degree in Data Science.
                    </p>
                    <p className="text-muted-foreground">
                        My academic journey has equipped me with a strong foundation in mathematics, analytical thinking, and problem-solving, all of which I actively apply in my data science coursework and projects. 
                        I am passionate about leveraging technology and data-driven approaches to develop innovative solutions and gain deeper insights from complex datasets.
                    </p>

                    <div className= "flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact"  className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a 
                        href="/Projects/CV - Yashodha Cooray.pdf" 
                        download = "Yashodha_Cooray.pdf"
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className=" flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <TrendingUp className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Science & Analytics</h4>
                                    <p className="text-muted-foreground">Uncovering insights through data analytics</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className=" flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web & Mobile App Development</h4>
                                    <p className="text-muted-foreground">Building responsive web and mobile apps.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className=" flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Desing</h4>
                                    <p className="text-muted-foreground">Designing creative, user-focused interfaces.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                

            </div>

        </div>
    </section>
    )
}