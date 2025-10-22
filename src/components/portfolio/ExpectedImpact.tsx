import { Card } from "@/components/ui/card";
import impactImage from "@/assets/impact.jpg";
import { Heart, Users, TrendingUp, Globe, Sparkles } from "lucide-react";

const ExpectedImpact = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Impacto Esperado</h2>
        
        <div className="space-y-8">
          <Card className="p-8 bg-gradient-to-br from-secondary/20 to-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={impactImage}
                  alt="Crescimento e impacto"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Transformação Social</h3>
                <p className="text-muted-foreground leading-relaxed">
                  MenteSerena tem potencial para democratizar o acesso à saúde mental no Brasil, oferecendo 
                  ferramentas de qualidade para milhões de pessoas que, de outra forma, não teriam acesso a 
                  recursos psicoeducativos ou conexão facilitada com profissionais qualificados.
                </p>
              </div>
            </div>
          </Card>

          {/* Benefits for Individuals */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Benefícios para Indivíduos</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Prevenção e Autocuidado</h4>
                  <p className="text-sm text-muted-foreground">
                    Acesso a informações de qualidade permite identificação precoce de sinais de sofrimento psíquico 
                    e adoção de práticas preventivas, reduzindo agravamento de quadros clínicos
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Empoderamento</h4>
                  <p className="text-sm text-muted-foreground">
                    Ferramentas de autoconhecimento promovem autonomia emocional e desenvolvimento de habilidades 
                    de regulação afetiva
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Redução de Estigma</h4>
                  <p className="text-sm text-muted-foreground">
                    Normalização de conversas sobre saúde mental através de conteúdo acessível e comunidades de apoio
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Acessibilidade Geográfica</h4>
                  <p className="text-sm text-muted-foreground">
                    Pessoas em regiões remotas ou com mobilidade reduzida podem acessar recursos de qualidade 
                    e conectar-se com profissionais
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Acessibilidade Financeira</h4>
                  <p className="text-sm text-muted-foreground">
                    Modelo freemium permite que pessoas de diversas classes socioeconômicas tenham acesso a 
                    recursos básicos gratuitamente
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Conexão Facilitada</h4>
                  <p className="text-sm text-muted-foreground">
                    Redução de barreiras no primeiro contato com profissionais de psicologia, facilitando 
                    busca por ajuda especializada
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Benefits for Organizations */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary rounded-lg">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Benefícios para Organizações</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold mb-3">Para Empresas</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Redução de absenteísmo e presenteísmo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Melhoria do clima organizacional
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Aumento de produtividade
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Retenção de talentos
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold mb-3">Para Psicólogos</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Ampliação de visibilidade profissional
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Gestão facilitada de agendas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Captação de novos pacientes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Ferramentas de apoio à prática
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold mb-3">Para o Sistema de Saúde</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Redução de demanda emergencial
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Prevenção coletiva
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Complemento aos serviços públicos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Dados para políticas públicas
                  </li>
                </ul>
              </Card>
            </div>
          </Card>

          {/* Growth Possibilities */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent rounded-lg">
                <TrendingUp className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Possibilidades de Crescimento e Expansão</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Curto Prazo (1-2 anos)
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      Lançamento em capitais brasileiras
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      Objetivo: 50.000 usuários ativos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      Rede de 500+ psicólogos cadastrados
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      Parcerias com 20 empresas
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Médio Prazo (3-5 anos)
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">→</span>
                      Expansão nacional completa
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">→</span>
                      500.000+ usuários ativos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">→</span>
                      Integração com IA para recomendações avançadas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">→</span>
                      Lançamento em países da América Latina
                    </li>
                  </ul>
                </div>
              </div>
              
              <Card className="p-6 bg-card">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Inovações Futuras
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <strong className="text-foreground block mb-2">Telepsicologia Integrada</strong>
                    <p className="text-muted-foreground">Sessões por vídeo diretamente na plataforma</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <strong className="text-foreground block mb-2">Wearables</strong>
                    <p className="text-muted-foreground">Integração com dispositivos de monitoramento de bem-estar</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <strong className="text-foreground block mb-2">IA Ética</strong>
                    <p className="text-muted-foreground">Chatbots auxiliares com supervisão profissional</p>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExpectedImpact;
