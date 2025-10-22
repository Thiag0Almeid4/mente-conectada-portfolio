import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield, Scale } from "lucide-react";

const CriticalReflection = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Reflexão Crítica</h2>
        
        <div className="space-y-8">
          {/* Challenges */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-semibold">Desafios e Limitações</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-destructive/30 pl-6">
                <h4 className="font-semibold text-lg mb-3 text-foreground">1. Desafios Técnicos e Operacionais</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Segurança de Dados:</strong> Plataformas de saúde lidam com informações 
                      sensíveis. É fundamental garantir conformidade rigorosa com a LGPD, implementando criptografia de ponta, 
                      armazenamento seguro e políticas claras de privacidade. Vazamentos podem causar danos irreparáveis à 
                      confiança dos usuários.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Qualidade de Conteúdo:</strong> Manter um fluxo constante de conteúdo 
                      atualizado, cientificamente validado e acessível requer investimento contínuo em equipe especializada. 
                      Informações desatualizadas ou imprecisas podem prejudicar usuários.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Moderação de Comunidade:</strong> Fóruns e grupos de apoio exigem 
                      moderação ativa por profissionais para prevenir disseminação de desinformação, crises não manejadas 
                      adequadamente e interações prejudiciais entre usuários.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Escalabilidade:</strong> Crescimento rápido pode comprometer qualidade 
                      do serviço se infraestrutura e equipe não acompanharem a demanda. É necessário planejamento cuidadoso 
                      de expansão.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-destructive/30 pl-6">
                <h4 className="font-semibold text-lg mb-3 text-foreground">2. Desafios de Mercado e Sustentabilidade</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Concorrência:</strong> O mercado de saúde mental digital está em 
                      crescimento, com entrada constante de novos players. Diferenciação e qualidade serão essenciais para 
                      manter relevância.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Monetização:</strong> Equilibrar acesso gratuito (missão social) com 
                      sustentabilidade financeira é delicado. Modelos muito restritivos afastam usuários vulneráveis; muito 
                      permissivos podem inviabilizar operação.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Aquisição de Usuários:</strong> Conquistar confiança em saúde mental 
                      digital exige investimento significativo em marketing educativo e construção de credibilidade.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-destructive/30 pl-6">
                <h4 className="font-semibold text-lg mb-3 text-foreground">3. Limitações da Plataforma Digital</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Não Substitui Atendimento Clínico:</strong> É fundamental comunicar 
                      claramente que a plataforma complementa, mas não substitui psicoterapia presencial em casos de transtornos 
                      graves ou crises agudas. Usuários em risco precisam ser adequadamente encaminhados.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Exclusão Digital:</strong> Parte da população-alvo pode ter acesso 
                      limitado a smartphones ou internet, especialmente em comunidades vulneráveis. Estratégias de inclusão 
                      digital precisam ser consideradas.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Diagnóstico e Avaliação:</strong> Ferramentas online de autoavaliação 
                      não substituem avaliação clínica formal. É crucial evitar promessas de diagnóstico através da plataforma.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Ethical Responsibilities */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Responsabilidades Éticas e Sociais</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    Ética Profissional
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong className="text-foreground">Conformidade com CFP:</strong> Todo conteúdo, ferramenta e 
                        interação deve respeitar o Código de Ética Profissional do Psicólogo e resoluções específicas 
                        sobre orientação psicológica mediada por tecnologia
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong className="text-foreground">Sigilo e Confidencialidade:</strong> Garantir proteção absoluta 
                        das informações dos usuários, com políticas claras sobre coleta, uso e compartilhamento de dados
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong className="text-foreground">Qualificação Profissional:</strong> Verificação rigorosa de 
                        registro ativo no CRP de todos os psicólogos cadastrados na plataforma
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong className="text-foreground">Limite de Atuação:</strong> Comunicar claramente que a plataforma 
                        oferece psicoeducação e facilitação de contato, não psicoterapia online completa (que requer 
                        cadastro no e-Psi)
                      </div>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Responsabilidade Social
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">→</span>
                      <div>
                        <strong className="text-foreground">Acessibilidade:</strong> Manter modelo freemium que garanta acesso 
                        básico gratuito, promovendo equidade no acesso à informação sobre saúde mental
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">→</span>
                      <div>
                        <strong className="text-foreground">Combate ao Estigma:</strong> Produzir conteúdos que desmistifiquem 
                        transtornos mentais e promovam aceitação e compreensão sobre saúde mental
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">→</span>
                      <div>
                        <strong className="text-foreground">Prevenção ao Suicídio:</strong> Implementar protocolos de 
                        identificação de risco e encaminhamento para serviços de emergência (CVV, CAPS, etc.)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">→</span>
                      <div>
                        <strong className="text-foreground">Diversidade e Inclusão:</strong> Garantir representatividade em 
                        conteúdos e profissionais, atendendo diferentes perfis culturais, étnicos, de gênero e orientação sexual
                      </div>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold mb-4">Compromisso Ético Contínuo</h4>
                <p className="text-muted-foreground leading-relaxed">
                  MenteSerena deve estabelecer um Comitê de Ética composto por psicólogos, especialistas em tecnologia 
                  e representantes da sociedade civil para avaliar continuamente as práticas da plataforma, revisar 
                  conteúdos e protocolos, e garantir alinhamento permanente com os mais altos padrões éticos. A 
                  transparência sobre limitações, riscos e benefícios deve ser prioridade, evitando promessas irreais 
                  ou sensacionalismo sobre saúde mental digital.
                </p>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CriticalReflection;
