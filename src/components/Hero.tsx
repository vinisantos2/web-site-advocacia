import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center px-4 bg-cover bg-center animate-zoom"
      style={{ backgroundImage: "url('images/home.png')" }}
    >

      {/* Overlay escura com transparência */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      {/* Conteúdo centralizado com animação de entrada */}
      <div className="relative z-10 max-w-3xl text-center text-white animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Defendendo seus direitos com excelência e ética
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
          Atuamos com responsabilidade nas áreas civil, trabalhista e familiar.
        </p>
        <a
          href="#contato"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
};

export default Hero;
