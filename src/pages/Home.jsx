import Tente from"./image/renardfeu.jpg"
import '../pages/essai.scss';

const Home = () => {
    return(
      <div class="dive">
        <ul id="lu">
      <h1>page d accueil</h1>
      <h3>un titre</h3>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam sunt odit eos officia, consequatur
        , expedita error pariatur possimus obcaecati doloremque optio porro nesciunt praesentium. 
        Sequi cupiditate perspiciatis adipisci laborum?</p>
        <h3>un titre </h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam sunt odit eos officia, consequatur
        , expedita error pariatur possimus obcaecati doloremque optio porro nesciunt praesentium. 
        Sequi cupiditate perspiciatis adipisci laborum?</p>
        <h3>in titre</h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam sunt odit eos officia, consequatur
        , expedita error pariatur possimus obcaecati doloremque optio porro nesciunt praesentium. 
        Sequi cupiditate perspiciatis adipisci laborum?</p>
      
      </ul>


      <p id="im">
        <a> <img src={Tente} id="im" />  </a>
        <a><img src={Tente} id="im" /></a>
        <a> <img src={Tente} id="im" /></a>
        <a> <img src={Tente} id="im" /></a>
        </p>
      
      
      </div>
      
    )
    }
  export default Home;
  