import ShoppingList from './ShoppingList';
import MainCarousel from './MainCarousel';

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
    </div>
  );
};

export default Home;
