import { SectionTitle } from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'

export function AboutSection() {
  const { ref, isVisible } = useInView()

  return (
    <section
      ref={ref}
      id="sobre"
      className={`py-20 px-4 bg-gradient-to-r from-white to-gray-100 transition-opacity duration-1000 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Sobre Nós" subtitle="Conheça nossa história e missão" center />
        <p className="text-gray-700 text-lg leading-relaxed mt-6 text-justify">
          Nosso escritório de advocacia atua há mais de 10 anos com foco em oferecer soluções jurídicas eficazes,
          éticas e personalizadas. Com uma equipe altamente qualificada, prezamos pelo atendimento humano e
          comprometido com o sucesso de nossos clientes.
        </p>
      </div>
    </section>
  )
}
