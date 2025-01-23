import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import data from './helper/data';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="products-list">
        {data.map(({ id, image, price, title }) => (
          <ProductCard key={id} image={image} price={price} title={title} />
        ))}
      </div>
    </div>
  );
}

export default App;
