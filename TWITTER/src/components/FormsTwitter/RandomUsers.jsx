import { useEffect } from "react";
import { useTwitterStore } from "../../store/TwitterStore";

const RandomUsers = () => {
  const { addRandomUsers } = useTwitterStore();

  const addRandomTweets = () => {
    const randomTweets = [
      "Acabei de encontrar o clone do twitter!! Estou animado😀😀 #twitterClone",
      "Cobra Kai a melhor serie ja criada, com toda crtz 😃😃 #MiguelDiaz #ToryNichols",
      "Mano, programação é muito difícil mas é muito legal, recomendo!!🤙🤙 #Dev #Programador",
      "Cara! não passei no enem vou ter que refazer",
      "Sou novo na programação, mas criar um clone do twitter simples é um grande passo",
      "Feito com ajuda e estilo de Rodrigo Mori do canal DevClub👏👏👏",
      "Ainda está incompleto, mas vai melhorar👊",
    ];

    const mathRandom = randomTweets[Math.floor(Math.random() * randomTweets.length)];

    const randomImage = `https://picsum.photos/600/400?random=${Math.random()}`
    const random = Math.random() > 0.6 ? randomImage : null

    addRandomUsers(mathRandom, random);
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addRandomTweets();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return <div></div>;
};

export default RandomUsers;
