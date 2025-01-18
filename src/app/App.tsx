import './styles/App.css';
import './styles/index.css';
import { Header } from '../shared/ui/header';
import { Slider } from '../shared/ui/slider';
import { ProductList } from '../shared/ui/productList';
function App() {
    return (
        <div className="App">
            <Header />

            <Slider />

            <ProductList />
        </div>
    );
}

export default App;
