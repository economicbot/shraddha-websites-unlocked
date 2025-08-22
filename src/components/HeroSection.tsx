import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
const portraitImage = "/lovable-uploads/80af4b0c-afd5-4484-b3ec-af2f4adec0a2.png";

const HeroSection = () => {
  return (
    <section id="home" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={portraitImage}
                alt="Shraddha Yadav - Academic Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-academic-text">
              Shraddha Yadav
            </h1>
            
            <div className="text-lg text-academic-text-light leading-relaxed space-y-4">
              <p>
                Hello! Welcome to my webpage!
              </p>
              
              <p>
                I am a dedicated researcher and educator specializing in economics, 
                development studies, and policy analysis. My research focuses on 
                sustainable development, economic policy, and social impact assessment. 
                I hold a Ph.D. in Economics and have extensive experience in both 
                academic research and practical policy implementation.
              </p>
              
              <p>
                My work spans various aspects of economic development, with particular 
                emphasis on evidence-based policy recommendations and their real-world 
                applications. I am committed to bridging the gap between theoretical 
                research and practical solutions that can make a meaningful difference 
                in people's lives.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-academic-text">
                <Mail size={18} />
                <span>Email:</span>
                <a 
                  href="mailto:shraddha@example.com" 
                  className="text-academic-blue hover:underline"
                >
                  shraddha@example.com
                </a>
              </div>
            </div>

            {/* Social Links and CV */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" asChild>
                <a href="#" className="flex items-center space-x-2">
                  <Download size={16} />
                  <span>CV</span>
                </a>
              </Button>
              
              <Button variant="ghost" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Button>
              
              <Button variant="ghost" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="ghost" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
              </Button>
              
              <Button variant="ghost" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  ResearchGate
                </a>
              </Button>
              
              <Button variant="ghost" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  ORCID
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;