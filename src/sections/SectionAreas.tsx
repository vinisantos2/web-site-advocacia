export default function AreaSection() {
  const areas = [
    { title: "Direito Civil", description: "Atuação em questões contratuais, indenizações, responsabilidade civil e mais." },
    { title: "Direito Trabalhista", description: "Defesa dos direitos do trabalhador e do empregador em ações judiciais." },
    { title: "Direito de Família", description: "Divórcios, guarda de filhos, pensão alimentícia e inventários." },
    { title: "Direito Empresarial", description: "Assessoria jurídica para empresas, contratos e litígios." },
  ];

  return (
    <section id="areas" className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Áreas de Atuação</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {areas.map((area, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{area.title}</h2>
            <p className="text-gray-700">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
