import { Card } from "@/components/ui/card";
import communityImage from "@/assets/community.jpg";
import { Users, Target, Sparkles } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      title: "Jovens Adultos (18-35 anos)",
      description: "Geração conectada, familiarizada com tecnologia, buscando desenvolvimento pessoal e gestão do estresse acadêmico/profissional",
      needs: ["Prevenção de burnout", "Gestão de ansiedade", "Desenvolvimento de habilidades emocionais"]
    },
    {
      title: "Pessoas em Áreas Remotas",
      description: "Indivíduos sem acesso facilitado a serviços psicológicos presenciais em suas regiões",
      needs: ["Acesso a informação de qualidade", "Conexão com profissionais online", "Recursos de autocuidado"]
    },
    {
      title: "Buscadores de Autoconhecimento",
      description: "Pessoas interessadas em crescimento pessoal e bem-estar emocional, mesmo sem diagnóstico clínico",
      needs: ["Ferramentas de reflexão", "Conteúdo educativo", "Prevenção e promoção de saúde"]
    },
    {
      title: "Familiares e Cuidadores",
      description: "Pessoas que convivem ou cuidam de indivíduos com questões de saúde mental",
      needs: ["Informação especializada", "Suporte e orientação", "Rede de apoio"]
    }
  ];

  const differentials = [
    {
      title: "Abordagem Integrativa",
      description: "Não somos apenas um app de meditação nem apenas um marketplace. Oferecemos um ecossistema completo de cuidado"
    },
    {
      title: "Base Científica",
      description: "Todo conteúdo é desenvolvido ou revisado por psicólogos, garantindo qualidade e aderência às evidências científicas"
    },
    {
      title: "Personalização",
      description: "Algoritmos de recomendação sugerem conteúdos e profissionais de acordo com necessidades individuais"
    },
    {
      title: "Acessibilidade",
      description: "Modelo freemium permite acesso básico gratuito, democratizando recursos fundamentais de psicoeducação"
    },
    {
      title: "Segurança e Ética",
      description: "Conformidade total com LGPD e diretrizes do CFP, incluindo verificação rigorosa de profissionais cadastrados"
    },
    {
      title: "Comunidade Moderada",
      description: "Espaços de troca supervisionados por profissionais, garantindo ambiente seguro e acolhedor"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Público-Alvo & Diferenciais</h2>
        
        <div className="space-y-12">
          {/* Target Audience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary rounded-lg">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Público-Alvo</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {audiences.map((audience, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">{audience.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{audience.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Necessidades Principais:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {audience.needs.map((need, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-8 bg-gradient-to-br from-card to-secondary/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-semibold text-xl mb-4">Perfil Demográfico Detalhado</h4>
                  <div className="space-y-3 text-sm">
                    <p><strong>Idade:</strong> Principalmente 18-45 anos</p>
                    <p><strong>Classe Socioeconômica:</strong> B, C e D (modelo freemium permite acesso amplo)</p>
                    <p><strong>Escolaridade:</strong> Ensino médio completo ou superior (em curso ou completo)</p>
                    <p><strong>Localização:</strong> Áreas urbanas e rurais, com ênfase em regiões com déficit de profissionais</p>
                    <p><strong>Comportamento:</strong> Uso frequente de smartphones, familiaridade com apps, interesse em saúde e bem-estar</p>
                  </div>
                </div>
                <img 
                  src={communityImage}
                  alt="Comunidade diversa"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </Card>
          </div>

          {/* Differentials */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Diferenciais Competitivos</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {differentials.map((differential, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">{differential.title}</h4>
                  <p className="text-sm text-muted-foreground">{differential.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
