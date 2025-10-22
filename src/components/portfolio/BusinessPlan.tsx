import { Card } from "@/components/ui/card";
import { DollarSign, Users, Laptop, TrendingUp, Megaphone } from "lucide-react";

const BusinessPlan = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Plano de Estruturação</h2>
        
        <div className="space-y-8">
          {/* Business Model */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Modelo de Negócio</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Modelo Freemium</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Plano Gratuito:</strong> Acesso a biblioteca básica de conteúdos, ferramentas limitadas 
                    de rastreamento emocional, participação em fóruns públicos
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Plano Premium (R$ 29,90/mês)</h4>
                  <p className="text-sm text-muted-foreground">
                    Acesso completo à biblioteca, ferramentas avançadas de autoconhecimento, prioridade em grupos 
                    temáticos, conteúdos exclusivos, relatórios personalizados de progresso
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Comissão em Conexões</h4>
                  <p className="text-sm text-muted-foreground">
                    15% de comissão sobre sessões agendadas através da plataforma, valor agregado para profissionais 
                    (visibilidade, gestão de agenda, pagamentos integrados)
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Parcerias B2B</h4>
                  <p className="text-sm text-muted-foreground">
                    Licenciamento da plataforma para empresas como benefício de saúde mental para colaboradores, 
                    modelo de licença anual
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Resources */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary rounded-lg">
                <Laptop className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Recursos Necessários</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Recursos Humanos
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Psicólogos para curadoria de conteúdo e moderação (3-5 profissionais)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Desenvolvedores web/mobile (equipe de 4-6 pessoas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Designer UX/UI (2 profissionais)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Especialista em marketing digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Atendimento ao cliente (2-3 pessoas)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-primary" />
                  Recursos Tecnológicos
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Desenvolvimento de aplicativo mobile (iOS/Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Plataforma web responsiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Infraestrutura de servidores em nuvem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Sistema de pagamentos integrado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Ferramentas de análise de dados e IA para personalização</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Recursos Financeiros
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Investimento inicial: R$ 500.000 - R$ 800.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Desenvolvimento: R$ 300.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Marketing e aquisição: R$ 150.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Operacional (12 meses): R$ 200.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Reserva emergencial: R$ 100.000</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Partnerships & Marketing */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent rounded-lg">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Parcerias Estratégicas</h3>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <strong className="text-foreground">Conselhos Regionais de Psicologia:</strong>
                    <p className="text-muted-foreground">Validação ética e divulgação entre profissionais</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <strong className="text-foreground">Universidades:</strong>
                    <p className="text-muted-foreground">Pesquisa, validação de ferramentas e recrutamento de psicólogos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <strong className="text-foreground">Empresas e RHs:</strong>
                    <p className="text-muted-foreground">Oferta B2B de licenças corporativas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    4
                  </div>
                  <div>
                    <strong className="text-foreground">ONGs de Saúde Mental:</strong>
                    <p className="text-muted-foreground">Projetos sociais e acesso gratuito para populações vulneráveis</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Megaphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Estratégias de Divulgação</h3>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Marketing de Conteúdo:</strong>
                    <p className="text-muted-foreground">Blog, Instagram e YouTube com conteúdo educativo sobre saúde mental</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Parcerias com Influenciadores:</strong>
                    <p className="text-muted-foreground">Colaboração com criadores de conteúdo focados em bem-estar</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">SEO e Anúncios Digitais:</strong>
                    <p className="text-muted-foreground">Otimização para buscas e campanhas no Google Ads e redes sociais</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Eventos e Palestras:</strong>
                    <p className="text-muted-foreground">Participação em congressos de psicologia e eventos corporativos</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlan;
