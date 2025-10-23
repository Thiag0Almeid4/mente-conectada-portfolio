import authorPortrait from "@/assets/author-portrait.jpg";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Sobre a Autora</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img 
              src={authorPortrait}
              alt="Gabriela Dutra Emerich"
              className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Gabriela Dutra Emerich</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estudante do 8° período de Psicologia na Centro Universitário Unifacig, escolhi a ênfase em Psicologia Clínica utilizando a abordagem humanista-existencialista. 
                Ao longo da minha trajetória acadêmica, desenvolvi profundo interesse pela interseção entre saúde mental 
                e tecnologia, reconhecendo o potencial transformador das plataformas digitais no acesso democratizado 
                aos cuidados psicológicos.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground">Áreas de Interesse</h4>
                  <p className="text-muted-foreground">
                    Psicologia Clínica, Saúde Mental Digital, Psicoeducação e Promoção de Bem-estar
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground">Experiência Acadêmica</h4>
                  <p className="text-muted-foreground">
                    Estágios em clínicas-escola, participação em grupos de pesquisa sobre prevenção em saúde mental, 
                    e desenvolvimento de projetos de extensão.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground">Visão Profissional</h4>
                  <p className="text-muted-foreground">
                    Acredito que a psicologia deve ser acessível a todos. A tecnologia, quando utilizada com responsabilidade 
                    ética e embasamento científico, pode ser uma poderosa aliada na promoção da saúde mental, complementando 
                    o atendimento clínico tradicional e ampliando o alcance de intervenções preventivas
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
