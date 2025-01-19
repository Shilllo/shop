import { Header } from '../../../widgets/header';
import { Slider } from '../../../widgets/slider';
import { ProductList } from '../../../widgets/product-list';
import { Footer } from '../../../widgets/footer';

export function Home() {
    return (
        <>
            <Header />
            <Slider />
            <ProductList />
            <Footer />
        </>
    );
}
