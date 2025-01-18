import './styles/App.css';
import './styles/index.css';
import { Header } from '../shared/ui/header';
import { Slider } from '../shared/ui/slider';
import { ProductList } from '../shared/ui/product-list';
import { Footer } from '../shared/ui/footer';

function App() {
    return (
        <div className="App">
            <Header />

            <Slider />

            <ProductList />

            <Footer />
        </div>
    );
}

export default App;
