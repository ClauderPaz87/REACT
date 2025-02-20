import UsersTweets from "../UsersTwitter/UsersTweets";
import IconsForms from "./iconsForms";
import { useEffect, useRef} from "react";
import { useTwitterStore } from "../../store/TwitterStore";

const FormsTweets = () => {
  const valueTweet = useRef("");
  const {addUsers,addRandomUsers} = useTwitterStore()

  const addRandomTweets = ()=>{
    const randomTweets = [
      'Acabei de encontrar o clone do twitter! Estou animado',
      'Cobra Kai a melhor serie ja criada, com toda crtz',
      'Mano, programação é muito difícil nao recomendo',
      'Cara! nao passei no enem vou ter que refazer',
      'QUE DROGA, BOLSOnARO VAI SER PRESO',
      'HAHAHAHAHAHAHHAHAHAHA'

    ]
  
    const mathRandom = randomTweets[Math.floor(Math.random()*randomTweets.length)]
    addRandomUsers(mathRandom)
  }
  

  useEffect(() => {
   const interval = setInterval(()=>{
    addRandomTweets()
   },40000)
   
   return () => clearInterval(interval);
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date().toLocaleString([], { hour:"2-digit", minute:"2-digit"})
    const seed = Math.random().toString(36).substring(7);
    const url = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;

    addUsers(valueTweet.current.value, url, date, Math.floor(Math.random() * 1000));

  };

  return (
    <div className="grid-rows-2 border-e-2 border-twitter-dark-gray text-white">

      <form
        onSubmit={handleSubmit}
        className="h-48 w-full mr-0 mt-3 justify-center border-b-2 border-twitter-dark-gray"
      >
        <div>
          
          <p className="font-semibold ml-3">For Your</p>

        </div>

        <div className="ml-3">
          
          <textarea
            ref={valueTweet}
            className="bg-twitter-background outline-none w-full h-20 resize-none mt-5"
            placeholder="Whats's Happening"
          ></textarea>

        </div>

        <div className="h-8 relative mt-2">
          
          <div>

            <IconsForms/>
      
          </div>

          <button
            className="w-24 mr-3 absolute right-0 bg-twitter-blue rounded-full p-1 font-semibold hover:bg-twitter-dark-gray"
            type="submit"
          >
            Tweet
          </button>

        </div>

      </form>

      <UsersTweets />
    </div>
  );
};

export default FormsTweets;
