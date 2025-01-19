import { Header } from '../../../shared/ui/header';
import { Slider } from '../../../shared/ui/slider';
import { ProductList } from '../../../shared/ui/product-list';
import { Footer } from '../../../shared/ui/footer';

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
