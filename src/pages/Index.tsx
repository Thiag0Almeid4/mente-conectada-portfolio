import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Cover from "@/components/portfolio/Cover";
import About from "@/components/portfolio/About";
import Introduction from "@/components/portfolio/Introduction";
import ServiceDescription from "@/components/portfolio/ServiceDescription";
import TargetAudience from "@/components/portfolio/TargetAudience";
import BusinessPlan from "@/components/portfolio/BusinessPlan";
import ExpectedImpact from "@/components/portfolio/ExpectedImpact";
import CriticalReflection from "@/components/portfolio/CriticalReflection";
import References from "@/components/portfolio/References";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sections = [
  { id: 0, title: "Capa", component: Cover },
  { id: 1, title: "Sobre a Autora", component: About },
  { id: 2, title: "Introdução ao Projeto", component: Introduction },
  { id: 3, title: "Descrição do Serviço", component: ServiceDescription },
  { id: 4, title: "Público-Alvo & Diferenciais", component: TargetAudience },
  { id: 5, title: "Plano de Estruturação", component: BusinessPlan },
  { id: 6, title: "Impacto Esperado", component: ExpectedImpact },
  { id: 7, title: "Reflexão Crítica", component: CriticalReflection },
  { id: 8, title: "Referências", component: References },
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const CurrentComponent = sections[currentSection].component;

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const NavigationMenu = () => (
    <nav className="space-y-2">
      <h3 className="font-semibold text-sm text-muted-foreground mb-4">Navegação</h3>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setCurrentSection(section.id)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            currentSection === section.id
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="mt-8">
                  <NavigationMenu />
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="text-lg font-semibold">Portfólio MenteSerena</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentSection + 1} / {sections.length}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <CurrentComponent />
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card border border-border rounded-full px-6 py-3 shadow-lg">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSection}
          disabled={currentSection === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <span className="text-sm font-medium min-w-[200px] text-center">
          {sections[currentSection].title}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSection}
          disabled={currentSection === sections.length - 1}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
