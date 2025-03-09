import HeaderHero from '../../images/headerHero.jpeg'
import RestaurantList from '../RestaurantList';
import CustomerWords from '../CustomerWords';
import Topcarausal from "../Carausel"
import FoodItemCarausal from '../FoodItemCarausal';


const Home = () => {
 
  return (
    <>
      <div className="relative h-128 w-full bg-[#feffcb] flex items-center px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-col lg:flex-row">
          <div>
            <h1 className="lg:w-6/12 lg:pr-4 capitalize text-4xl lg:text-6xl font-extrabold leading-tight text-center lg:text-left">
              Bring 
              <span className="logo-text-second"> Restaurants </span>
               in your home
            </h1>
            <p className="lg:w-4/6 py-5 text-lg lg:text-lg text-slate-500 text-center lg:text-left">
              Get ready for the tasty food at your home with best discount from your favourite resturants...
            </p>
            
              <p className='text-center lg:text-left text-lg pb-6 capitalize text-lime-600 font-bold'>Good food & What all You Need & be Happy </p>
          
          </div>
          <img className="w-2/6" src={HeaderHero} alt="Delivery Boy" />
        </div>
      </div>
      <Topcarausal />
      <RestaurantList />
      <CustomerWords />
      <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-y">
          <FoodItemCarausal  title="Top Dishes"/>
      </div>
    </>
  );
};
export default Home;
