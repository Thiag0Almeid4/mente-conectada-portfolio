import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Smartphone, TrendingUp, Users, Lock, Zap } from "lucide-react";

const TechnicalFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança e Privacidade",
      description: "Criptografia end-to-end em todas as comunicações",
      details: [
        "Dados armazenados em conformidade com LGPD",
        "Autenticação de dois fatores",
        "Backup automático e recuperação de dados",
        "Anonimização de informações sensíveis"
      ]
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Acesso em qualquer dispositivo, a qualquer momento",
      details: [
        "Aplicativo mobile (iOS e Android)",
        "Versão web responsiva",
        "Sincronização automática entre dispositivos",
        "Modo offline para acesso a conteúdos"
      ]
    },
    {
      icon: TrendingUp,
      title: "Análise de Progresso",
      description: "Acompanhamento detalhado da jornada do usuário",
      details: [
        "Dashboard personalizado com métricas de bem-estar",
        "Gráficos de evolução emocional",
        "Relatórios mensais automáticos",
        "Identificação de padrões e gatilhos"
      ]
    },
    {
      icon: Users,
      title: "Sistema de Matching",
      description: "Algoritmo inteligente para conexão profissional-paciente",
      details: [
        "Compatibilidade baseada em perfil e necessidades",
        "Especialização profissional verificada",
        "Avaliações e feedbacks autênticos",
        "Sugestões personalizadas de psicólogos"
      ]
    },
    {
      icon: Lock,
      title: "Conformidade Ética",
      description: "Alinhamento com o Código de Ética do CFP",
      details: [
        "Validação de registro profissional (CRP)",
        "Termo de consentimento digital",
        "Política clara de confidencialidade",
        "Canal de denúncias e ouvidoria"
      ]
    },
    {
      icon: Zap,
      title: "Recursos Interativos",
      description: "Ferramentas digitais para autocuidado",
      details: [
        "Exercícios de mindfulness guiados",
        "Diário emocional com prompts inteligentes",
        "Biblioteca de técnicas de relaxamento",
        "Notificações de lembretes personalizáveis"
      ]
    }
  ];

  return (
    <section className="min-h-screen p-8 md:p-16 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Recursos Técnicos da Plataforma
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta aliada à experiência humanizada para oferecer o melhor cuidado em saúde mental
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Infraestrutura e Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Escalabilidade</h4>
                <p className="text-sm text-muted-foreground">
                  Arquitetura em nuvem preparada para suportar milhões de usuários simultâneos com alta disponibilidade (99.9% uptime).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Velocidade</h4>
                <p className="text-sm text-muted-foreground">
                  Tempo de carregamento inferior a 2 segundos com CDN global e otimização de recursos para melhor experiência do usuário.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Integração</h4>
                <p className="text-sm text-muted-foreground">
                  APIs abertas para integração com sistemas de saúde, prontuários eletrônicos e plataformas de telemedicina.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechnicalFeatures;
