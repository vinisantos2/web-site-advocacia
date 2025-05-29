import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-20 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Escritório Legal. Todos os direitos reservados.</p>
        <p className="mt-2">CNPJ: 00.000.000/0001-00 | contato@escritoriolegal.com</p>
      </div>
    </footer>
  );
};

export default Footer;
