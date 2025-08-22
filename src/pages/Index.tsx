import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Additional sections can be added here */}
      <section id="research" className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-academic-text mb-8">Research</h2>
          <p className="text-academic-text-light">
            Research content will be added here. This section will showcase 
            ongoing and completed research projects, publications, and academic contributions.
          </p>
        </div>
      </section>
      
      <section id="teaching" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-academic-text mb-8">Teaching</h2>
          <p className="text-academic-text-light">
            Teaching experience and educational contributions will be detailed here.
          </p>
        </div>
      </section>
      
      <section id="media" className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-academic-text mb-8">Media</h2>
          <p className="text-academic-text-light">
            Media appearances, interviews, and public engagement activities will be showcased here.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
