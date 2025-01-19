import { Routes, Route } from 'react-router';
import { Home } from './Home/ui/Home';
import { Shop } from './Shop/ui/Shop';

export function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </>
    );
}
