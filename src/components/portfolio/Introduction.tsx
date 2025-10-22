import { Card } from "@/components/ui/card";
import { Brain, Heart, Users, Sparkles } from "lucide-react";

const Introduction = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Introdução ao Projeto</h2>
        
        <div className="space-y-8">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary rounded-lg">
                <Brain className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">A Ideia Central</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">MenteSerena</strong> é uma plataforma digital inovadora que une tecnologia e psicologia 
                  para democratizar o acesso a recursos de saúde mental. Através de uma abordagem integrativa, 
                  oferecemos psicoeducação de qualidade, ferramentas de autoconhecimento baseadas em evidências 
                  científicas, e conexão facilitada com profissionais qualificados.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              A plataforma funciona como um ecossistema de apoio psicológico, onde usuários podem acessar conteúdos 
              educativos sobre saúde mental, utilizar ferramentas interativas para monitoramento emocional e desenvolvimento 
              pessoal, e quando necessário, conectar-se com psicólogos para acompanhamento profissional. Tudo isso em um 
              ambiente digital seguro, acolhedor e cientificamente fundamentado.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-card to-secondary/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">Justificativa</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-accent" />
                      Relevância para a Psicologia
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Segundo a Organização Mundial da Saúde (OMS), transtornos mentais afetam mais de 1 bilhão de pessoas 
                      globalmente, e a pandemia de COVID-19 intensificou significativamente essa demanda. No Brasil, dados 
                      do Ministério da Saúde apontam aumento de 25% nos casos de ansiedade e depressão. Contudo, barreiras 
                      como custo elevado, estigma social e falta de profissionais em regiões remotas limitam o acesso aos 
                      cuidados necessários.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-accent" />
                      Contribuição Social
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      MenteSerena democratiza o acesso à informação de qualidade sobre saúde mental e oferece ferramentas 
                      preventivas que podem reduzir o agravamento de quadros clínicos. A plataforma atua como ponte entre 
                      a população e profissionais de psicologia, promovendo prevenção, psicoeducação e facilitando o 
                      primeiro contato com cuidados especializados quando necessário.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      Inovação
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ao integrar conteúdo psicoeducativo, ferramentas de autoavaliação validadas cientificamente, 
                      recursos de monitoramento emocional e marketplace de profissionais verificados, MenteSerena oferece 
                      uma solução holística ainda pouco explorada no mercado brasileiro. A plataforma une o rigor científico 
                      da psicologia com a praticidade e alcance das tecnologias digitais, respeitando princípios éticos 
                      e diretrizes do Conselho Federal de Psicologia (CFP).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
