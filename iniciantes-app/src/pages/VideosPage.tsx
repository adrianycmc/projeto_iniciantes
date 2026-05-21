import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Entenda lógica de programação e algoritmos",
    description: "Aprenda os conceitos básicos de lógica de programação e algoritmos e como aplicá-los em seus projetos como estagiário.",
    embedId: "7HIL7BNM9s0"
  },
  {
    id: 2,
    title: "O que é \"o tal do Algoritmo\"?",
    description: "Desmistificando o conceito de algoritmo e mostrando como ele está presente em diversas áreas da tecnologia e do nosso dia a dia.",
    embedId: "z1XTcKKRbKM"
  },
  {
    id: 3,
    title: "Lógica de programação, por onde começar ?",
    description: "Dicas para iniciar seus estudos em lógica de programação e desenvolver suas habilidades de forma prática.",
    embedId: "gMxQ8vxH9Vk"
  },
  {
    id: 4,
    title: "Programação Orientada a Objetos (POO)",
    description: "O que é POO e seus principais conceitos.",
    embedId: "QY0Kdg83orY"
  },
  {
    id: 5,
    title: "O que é Programação Orientada a Objetos?",
    description: "Entenda o conceito de Programação Orientada a Objetos e como ela pode ajudar a organizar seu código de forma mais eficiente.",
    embedId: "f-aDDLRmugU"
  },
  {
    id: 6,
    title: "GIT - O que é e para que serve?",
    description: "Aprenda a versionar seus códigos e colaborar com outros desenvolvedores utilizando o GIT, a ferramenta de controle de versão mais popular do mercado.",
    embedId: "ts-H3W1uLMM"
  },
  {
    id: 7,
    title: "O que é Git e GitHub?",
    description: "Aprenda os conceitos básicos de Git e GitHub e como utilizá-los para versionar e colaborar em projetos de forma eficiente.",
    embedId: "GDGMf2bnHlE"
  },
  // {
  //   id: 8,
  //   title: "Por que utilizar Metodologias Ágeis?",
  //   description: "Entenda os benefícios das metodologias ágeis e como elas podem transformar sua forma de trabalhar.",
  //   embedId: "LIhKbUHqrbU"
  // }
];

const VideosPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Vídeos Explicativos e Tutoriais"
          subtitle="Aprenda sobre programação, ferramentas e boas práticas com a nossa seleção especial de vídeos."
          ctaText="Explorar Vídeos"
          ctaLink="#videos-section"
        />

        <section id="videos-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Biblioteca de Vídeos
              </h2>
              <p className="text-lg text-gray-600">
                Aprenda no seu próprio ritmo com vídeos educativos sobre programação, ferramentas e boas práticas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col">
                  <div className="relative pb-[56.25%] bg-gray-200">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
                    <p className="text-gray-600 flex-1">{video.description}</p>
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.embedId}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Assistir em tela cheia
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;