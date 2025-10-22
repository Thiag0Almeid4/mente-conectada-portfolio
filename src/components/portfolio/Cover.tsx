import heroImage from "@/assets/hero-image.jpg";

const Cover = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2 text-primary-foreground/90 text-sm tracking-wide">
            <p>Centro Universitário Unifacig</p>
            <p>Curso de Psicologia</p>
            <p>Disciplina: Empreendedorismo e Gestão em Psicologia</p>
            <p>Professora: [Nome da Professora]</p>
          </div>

          <div className="space-y-6 py-12">
            <h1 className="text-6xl font-bold text-primary-foreground tracking-tight">
              MenteSerena
            </h1>
            <p className="text-2xl text-primary-foreground/90 font-light">
              Plataforma Digital de Apoio Psicológico e Psicoeducação
            </p>
          </div>

          <div className="space-y-3 text-primary-foreground/90">
            <p className="text-lg">Gabriela Dutra Emerich</p>
            <p>8° Período - Ênfase Clínica</p>
            <p className="text-sm pt-6">2024/2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
