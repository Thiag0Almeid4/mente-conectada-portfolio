import { Card } from "@/components/ui/card";
import platformMockup from "@/assets/platform-mockup.jpg";
import { BookOpen, Activity, UserCheck, MessageCircle } from "lucide-react";

const ServiceDescription = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Biblioteca Psicoeducativa",
      description: "Artigos, vídeos e guias sobre temas como ansiedade, depressão, autoestima, relacionamentos e desenvolvimento pessoal, todos revisados por profissionais"
    },
    {
      icon: Activity,
      title: "Ferramentas de Autoconhecimento",
      description: "Diário emocional, rastreador de humor, exercícios de mindfulness, técnicas de respiração e questionários validados para autoavaliação"
    },
    {
      icon: UserCheck,
      title: "Conexão com Psicólogos",
      description: "Marketplace de profissionais verificados pelo CFP, com perfis detalhados, especialidades, disponibilidade e agendamento facilitado"
    },
    {
      icon: MessageCircle,
      title: "Comunidade de Apoio",
      description: "Fóruns moderados por profissionais onde usuários podem compartilhar experiências, trocar apoio e participar de grupos temáticos"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Descrição do Serviço</h2>
        
        <div className="space-y-8">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">O que é MenteSerena?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              MenteSerena é um ecossistema digital de cuidado em saúde mental que integra educação, prevenção e 
              conexão profissional. A plataforma funciona como um hub centralizado onde pessoas podem aprender sobre 
              saúde mental, desenvolver habilidades de autocuidado emocional, monitorar seu bem-estar psicológico e, 
              quando necessário, conectar-se facilmente com psicólogos qualificados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Diferente de aplicativos focados apenas em meditação ou plataformas que apenas conectam profissionais, 
              MenteSerena oferece uma jornada completa: desde a prevenção através da psicoeducação até o encaminhamento 
              e facilitação do acompanhamento clínico especializado.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Como Funciona?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cadastro e Perfil</h4>
                    <p className="text-sm text-muted-foreground">
                      Usuário cria conta gratuita, responde breve questionário sobre interesses e necessidades
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Exploração de Conteúdo</h4>
                    <p className="text-sm text-muted-foreground">
                      Acesso a biblioteca psicoeducativa personalizada de acordo com interesses e necessidades identificadas
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ferramentas Práticas</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilização de diário emocional, rastreadores e exercícios para autoconhecimento
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Conexão Profissional</h4>
                    <p className="text-sm text-muted-foreground">
                      Quando desejado, busca e agendamento com psicólogos compatíveis com suas necessidades
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comunidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Participação em fóruns e grupos de apoio para troca de experiências
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div>
              <img 
                src={platformMockup}
                alt="Interface da plataforma MenteSerena"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <feature.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;
