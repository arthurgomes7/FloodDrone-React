import React, { useState } from 'react';

function Tecnologias() {
  const sections = [
    { title: 'Sensor de Temperatura', content: 'Dispositivo eletrônico utilizado para medir a temperatura do ambiente com precisão. Ideal para monitoramento climático e ambiental em tempo real.' },
    { title: 'Sensor de Umidade Relativa', content: 'Dispositivo que mede a umidade relativa do ar, comparando o vapor com o máximo que o ar pode conter. Fundamental para previsões meteorológicas e avaliação do conforto térmico.' },
    { title: 'Barômetro Digital', content: 'Sensor eletrônico que mede a pressão atmosférica. Útil para prever mudanças no tempo, como aproximação de tempestades ou frentes frias.' },
    { title: 'Camera HD', content: 'Dispositivo de captura de imagens com alta definição (alta resolução), ideal para monitoramento visual de áreas externas ou internas, auxiliando em análises ambientais e de segurança.' },
    { title: 'Anemômetro', content: 'Drones entregam alimentos, remédios e ajuda humanitária em áreas inacessíveis após desastres naturais.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='p-5'>
        <h1 className='text-white text-4xl font-semibold text-center py-2 xl:text-6xl'>Tecnologias</h1>
        <div>
            <div className="mx-auto">
              {sections.map((section, index) => (
                <div key={index} className="bg-transparent text-white border-b-2 rounded-b-2xl xl:text-2xl">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-900 hover:rounded-2xl focus:outline-none flex justify-between items-center"
                  >
                    {section.title}
                    <span className="text-xl text-blue-400">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 py-3 bg-transparent">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
        </div>
    </div>
  );
}

export default Tecnologias