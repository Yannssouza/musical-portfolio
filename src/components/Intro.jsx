import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Yann D'Souza
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Engenheiro de Mixagem & Masterização.
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Olá! Sou o Yann, um engenheiro de mixagem e masterização com uma paixão
        dedicada a esculpir experiências sonoras memoráveis. Com um histórico
        sólido de 5 anos na indústria, estou comprometido em levar a sua música
        a novas alturas, proporcionando um som envolvente e impactante.
        Transformo suas faixas em uma mistura coesa, destacando cada elemento
        sonoro de maneira única. Cada instrumento é habilmente equilibrado para
        criar uma paisagem sonora rica e cativante. Elevo a sua música para um
        nível profissional, refinando a qualidade tonal, a dinâmica e a
        presença. O objetivo é não apenas destacar, mas aprimorar a essência
        única de cada faixa. Trabalhei em uma variedade de gêneros musicais,
        desde pop e rock até eletrônica e hip-hop. Minha versatilidade garante
        que sua visão artística seja realizada, independentemente do estilo.
        Utilizo tecnologia de última geração e ferramentas de alta qualidade
        para garantir resultados sonoros de excelência. Cada projeto recebe
        atenção meticulosa, usando o que há de melhor em termos de hardware e
        software. Cada projeto é tratado com dedicação total, concentrando-me
        nos detalhes para entregar resultados que superam expectativas. Valorizo
        a colaboração aberta e constante com meus clientes. Seu feedback é
        crucial, e cada ajuste é feito para garantir que a visão da sua música
        seja realizada. Ao longo dos anos, acumulei um portfólio diversificado
        de projetos bem-sucedidos. Muitos artistas confiaram em mim para dar
        vida às suas criações. Se você está procurando elevar o nível sonoro da
        sua música e criar uma experiência auditiva inesquecível, estou aqui
        para transformar sua visão em realidade. Vamos juntos criar algo
        extraordinário! Meu SoundCloud é esse{" "}
        <a
          href="https://soundcloud.com/"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Yann D'Souza
        </a>{" "}
        acesse e ouça meus projetos pessoais.
      </p>
    </div>
  );
}

export default Intro;
