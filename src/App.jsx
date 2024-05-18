import React from 'react';
import Card from './Components/Card.jsx';
import './App.css';

// Importando imagens
import img1 from './assets/imgs/img-1.jpg';
import img2 from './assets/imgs/img-2.jpg';
import img3 from './assets/imgs/img-3.jpg';
import img4 from './assets/imgs/img-4.jpg';
import img5 from './assets/imgs/img-5.jpg';
import img6 from './assets/imgs/img-6.jpg';

const cardsData = [
  {
    id: 'louis_card',
    imgSrc: img1,
    title: 'Louis Armstrong',
    description: 'Louis Armstrong, também conhecido como Satchmo, foi um dos músicos mais influentes na história do jazz. Sua habilidade única de tocar trompete e sua voz cativante o tornaram uma lenda do gênero. Conhecido por clássicos como "What a Wonderful World" e "Hello, Dolly!", Armstrong deixou um legado duradouro no mundo da música.',
    videoUrl: 'https://www.youtube.com/watch?v=rBrd_3VMC3c',
  },
  {
    id: 'miles_card',
    imgSrc: img2,
    title: 'Miles Davis',
    description: 'Miles Davis é reverenciado como um dos músicos mais inovadores da história do jazz. Ele liderou várias revoluções no gênero, desde o bebop até o cool jazz e fusion. Álbuns icônicos como "Kind of Blue" e "Bitches Brew" destacam sua capacidade de transcender os limites do jazz e experimentar novos sons.',
    videoUrl: 'https://www.youtube.com/watch?v=zqNTltOGh5c',
  },
  {
    id: 'duke_card',
    imgSrc: img3,
    title: 'Duke Ellington',
    description: 'Duke Ellington foi um dos compositores e líderes de banda mais proeminentes da era do swing. Seu talento para arranjos orquestrais e sua habilidade de criar músicas memoráveis levaram sua banda, a Duke Ellington Orchestra, ao estrelato. Sucessos como "Take the A Train e In a Sentimental Mood" são apenas alguns exemplos do seu legado duradouro.',
    videoUrl: 'https://www.youtube.com/watch?v=cb2w2m1JmCY',
  },
  {
    id: 'billie_card',
    imgSrc: img4,
    title: 'Billie Holiday',
    description: 'Billie Holiday, conhecida como Lady Day, foi uma das vocalistas mais distintas e emocionais da história do jazz. Sua voz única e estilo de interpretação expressivo a tornaram uma figura icônica no mundo da música. Canções como "Strange Fruit" e "God Bless the Child" capturam a profunda emoção e autenticidade que ela trouxe ao jazz.',
    videoUrl: 'https://www.youtube.com/watch?v=y4bZu56EylA',
  },
  {
    id: 'jonh_card',
    imgSrc: img5,
    title: 'John Coltrane',
    description: 'John Coltrane foi um dos saxofonistas e compositores mais inovadores do jazz. Seu estilo único e sua busca incessante pela expressão musical o levaram a explorar novas fronteiras no gênero, especialmente com o free jazz. Álbuns como "A Love Supreme" e "Giant Steps" destacam sua genialidade e seu impacto duradouro no jazz.',
    videoUrl: 'https://www.youtube.com/watch?v=r594pxUjcz4',
  },
  {
    id: 'ella_card',
    imgSrc: img6,
    title: 'Ella Fitzgerald',
    description: 'Ella Fitzgerald, também conhecida como "A Primeira Dama da Canção", foi uma das vocalistas mais talentosas e versáteis da história do jazz. Sua voz cristalina e sua habilidade incomparável de improvisação a tornaram uma das artistas mais queridas do gênero. Conhecida por sua interpretação brilhante de clássicos como "Summertime" e "Mack the Knife", Fitzgerald deixou um legado impressionante que continua a inspirar músicos e amantes do jazz em todo o mundo.',
    videoUrl: 'https://www.youtube.com/watch?v=u2bigf337aU',
  },
];

const App = () => {
  return (
    <div className="container">
      <div id="my-cards">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            videoUrl={card.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
