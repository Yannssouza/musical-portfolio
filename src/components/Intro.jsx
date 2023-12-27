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
      <p className="text-sm max-w-2xl mb-6 font-bold">
        Olá! Sou o Yann, um engenheiro de mixagem e masterização com uma paixão
        dedicada a esculpir experiências sonoras memoráveis. Com um histórico
        sólido de 5 anos na indústria, estou comprometido em levar a sua música
        a novas alturas, proporcionando um som envolvente e impactante. Cada
        instrumento é habilmente equilibrado para criar uma paisagem sonora rica
        e cativante. Elevo sua música a um nível profissional, refinando
        tonalidade, dinâmica e presença. Desde pop e rock até eletrônica e
        hip-hop, trago minha versatilidade para cada projeto. Cada projeto
        recebe atenção meticulosa, concentrando-me nos detalhes para entregar
        resultados que superam expectativas. Valorizo a colaboração aberta e
        constante, seu feedback é crucial para realizar sua visão. Ao longo dos
        anos, acumulei um portfólio diversificado de projetos bem-sucedidos. Se
        você está procurando elevar o nível sonoro da sua música e criar uma
        experiência auditiva inesquecível, estou aqui para transformar sua visão
        em realidade. Vamos juntos criar algo extraordinário! Meu SoundCloud é
        esse{" "}
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
