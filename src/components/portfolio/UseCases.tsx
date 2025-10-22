import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart, Users2 } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: GraduationCap,
      title: "Estudantes Universitários",
      persona: "Maria, 22 anos, universitária",
      challenge: "Ansiedade relacionada ao desempenho acadêmico e pressão social",
      solution: [
        "Acesso a conteúdos sobre gestão de ansiedade e técnicas de estudo",
        "Conexão com psicólogo especializado em jovens adultos",
        "Grupos de apoio com estudantes em situações similares",
        "Exercícios diários de mindfulness adaptados à rotina acadêmica"
      ],
      result: "Maria reduziu seus níveis de ansiedade em 60% após 3 meses, melhorou seu rendimento acadêmico e desenvolveu estratégias saudáveis de enfrentamento."
    },
    {
      icon: Briefcase,
      title: "Profissionais em Burnout",
      persona: "Carlos, 35 anos, gerente de projetos",
      challenge: "Esgotamento profissional, insônia e dificuldade em desconectar do trabalho",
      solution: [
        "Avaliação inicial de sintomas de burnout",
        "Plano de acompanhamento semanal com psicólogo organizacional",
        "Biblioteca de recursos sobre equilíbrio trabalho-vida",
        "Ferramentas de tracking de hábitos saudáveis"
      ],
      result: "Carlos aprendeu a estabelecer limites, melhorou sua qualidade de sono e recuperou o prazer nas atividades profissionais sem comprometer sua saúde."
    },
    {
      icon: Heart,
      title: "Pessoas em Relacionamentos",
      persona: "Ana e João, casal há 5 anos",
      challenge: "Dificuldades de comunicação e conflitos frequentes",
      solution: [
        "Sessões de terapia de casal online",
        "Exercícios de comunicação não-violenta",
        "Conteúdos sobre inteligência emocional no relacionamento",
        "Espaço individual para reflexão e crescimento pessoal"
      ],
      result: "O casal desenvolveu habilidades de comunicação empática, compreendeu melhor as necessidades do outro e fortaleceu o vínculo afetivo."
    },
    {
      icon: Users2,
      title: "Pessoas em Vulnerabilidade Social",
      persona: "Júlia, 28 anos, mãe solo desempregada",
      challenge: "Depressão pós-parto, isolamento social e dificuldades financeiras",
      solution: [
        "Acesso gratuito ao plano básico por programa social",
        "Psicóloga especializada em maternidade e depressão pós-parto",
        "Conexão com grupos de apoio de mães na mesma situação",
        "Recursos psicoeducativos sobre parentalidade consciente"
      ],
      result: "Júlia encontrou apoio emocional, desenvolveu rede de suporte, melhorou sua relação com o bebê e começou a reconstruir sua autoestima."
    }
  ];

  return (
    <section className="min-h-screen p-8 md:p-16 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Casos de Uso Práticos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exemplos reais de como a MenteSerena transforma vidas através do acesso facilitado à saúde mental
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                      <CardDescription className="text-base">
                        <strong className="text-foreground">Persona:</strong> {useCase.persona}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-destructive/80">Desafio</h4>
                    <p className="text-muted-foreground">{useCase.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Como a MenteSerena Ajudou</h4>
                    <ul className="space-y-2">
                      {useCase.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">✓</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/20 p-4 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span>💚</span> Resultado
                    </h4>
                    <p className="text-muted-foreground italic">{useCase.result}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Impacto Coletivo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Estes casos demonstram a versatilidade da plataforma MenteSerena em atender diferentes perfis e necessidades. 
              A plataforma não apenas conecta pessoas a profissionais qualificados, mas cria um ecossistema completo de 
              suporte à saúde mental, combinando:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">Atendimento profissional individualizado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">Recursos de autoajuda e psicoeducação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">Comunidades de apoio mútuo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">Ferramentas práticas para o dia a dia</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UseCases;
