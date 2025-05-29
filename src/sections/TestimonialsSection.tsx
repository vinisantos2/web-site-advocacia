import { SectionTitle } from '../components/SectionTitle'

const testimonials = [
  {
    name: 'Joana Almeida',
    feedback:
      'Profissionais atenciosos, resolveram meu caso com agilidade e transparência. Recomendo com certeza!',
  },
  {
    name: 'Carlos Menezes',
    feedback:
      'Ótimo atendimento e suporte jurídico em cada etapa. Me senti seguro e bem orientado.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Depoimentos" subtitle="O que nossos clientes dizem" center />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-700 italic">"{item.feedback}"</p>
              <p className="text-blue-900 font-semibold mt-4">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
