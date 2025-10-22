import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const References = () => {
  const references = [
    {
      type: "Organizações e Órgãos Oficiais",
      items: [
        "Conselho Federal de Psicologia (CFP). Resolução CFP nº 011/2018. Regulamenta a prestação de serviços psicológicos realizados por meios de tecnologias da informação e da comunicação. Brasília, 2018.",
        "Organização Mundial da Saúde (OMS). Mental Health Atlas 2020. Genebra: WHO, 2021.",
        "Ministério da Saúde do Brasil. Boletim Epidemiológico - Saúde Mental na Pandemia de COVID-19. Brasília, 2022."
      ]
    },
    {
      type: "Literatura Científica",
      items: [
        "LINARDON, J.; CUIJPERS, P.; CARLBRING, P. et al. The efficacy of app-supported smartphone interventions for mental health problems: a meta-analysis of randomized controlled trials. World Psychiatry, v. 18, n. 3, p. 325-336, 2019.",
        "TOROUS, J.; WYKES, T. Opportunities from the coronavirus disease 2019 pandemic for transforming psychiatric care with telehealth. JAMA Psychiatry, v. 77, n. 12, p. 1205-1206, 2020.",
        "APOLINÁRIO-HAGEN, J.; VEHRESCHILD, V.; ALKOUDMANI, R. M. Current views and perspectives on e-mental health: an exploratory survey study for understanding public attitudes toward internet-based psychotherapy in Germany. JMIR Mental Health, v. 4, n. 1, e8055, 2017."
      ]
    },
    {
      type: "Livros e Capítulos",
      items: [
        "CHRISTENSEN, H.; REYNOLDS, J.; GRIFFITHS, K. M. The use of e-health applications for anxiety and depression in young people: challenges and solutions. Early Intervention in Psychiatry, v. 5, suppl. 1, p. 58-62, 2011.",
        "KAZDIN, A. E.; BLASE, S. L. Rebooting psychotherapy research and practice to reduce the burden of mental illness. Perspectives on Psychological Science, v. 6, n. 1, p. 21-37, 2011."
      ]
    },
    {
      type: "Legislação e Regulamentação",
      items: [
        "BRASIL. Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de Dados Pessoais (LGPD). Diário Oficial da União, Brasília, DF, 15 ago. 2018.",
        "Conselho Federal de Psicologia (CFP). Código de Ética Profissional do Psicólogo. Brasília: CFP, 2005."
      ]
    },
    {
      type: "Sites e Plataformas de Referência",
      items: [
        "Centro de Valorização da Vida (CVV). Disponível em: https://www.cvv.org.br",
        "Associação Brasileira de Psicologia da Saúde (ABPSA). Disponível em: https://www.abpsa.com.br",
        "Instituto Brasileiro de Geografia e Estatística (IBGE). Pesquisa Nacional de Saúde 2019: informações sobre domicílios, acesso e utilização dos serviços de saúde. Rio de Janeiro: IBGE, 2020."
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-primary">Referências</h2>
        
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-muted-foreground">
              As referências abaixo fundamentaram o desenvolvimento conceitual do projeto MenteSerena, 
              fornecendo embasamento científico, ético e legal para a proposta apresentada.
            </p>
          </div>

          <div className="space-y-8">
            {references.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-primary border-b border-border pb-2">
                  {section.type}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed pl-6 relative">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-secondary/10 rounded-lg border border-secondary/20">
            <h4 className="font-semibold mb-3">Nota sobre as Referências</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Este portfólio apresenta uma proposta fictícia desenvolvida para fins acadêmicos na disciplina de 
              Empreendedorismo e Gestão em Psicologia. As referências citadas são reais e representam a literatura 
              relevante para fundamentação de projetos dessa natureza. Em um projeto real de implementação, seria 
              necessário aprofundamento bibliográfico adicional e consulta a especialistas em saúde mental digital, 
              ética profissional e tecnologia.
            </p>
          </div>
        </Card>

        {/* Final Note */}
        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-secondary/10 text-center">
          <h3 className="text-2xl font-bold mb-4">Portfólio Desenvolvido por</h3>
          <p className="text-xl font-semibold text-primary mb-2">Gabriela Dutra Emerich</p>
          <p className="text-muted-foreground mb-4">8° Período de Psicologia - Ênfase Clínica</p>
          <p className="text-muted-foreground text-sm">
            Universidade Vila Velha (UVV)<br />
            Disciplina: Empreendedorismo e Gestão em Psicologia<br />
            2024/2
          </p>
        </Card>
      </div>
    </section>
  );
};

export default References;
