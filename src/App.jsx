import { Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Women from "./pages/Women";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Men from "./pages/Men";
import { ProductProvider } from "./context/ProductContext";
import ViewAll from "./pages/ViewAll";

import ProductsPage from "./components/ProductsPage";

// Lazy load pages for code-splitting
const HomePage = lazy(() => import("./pages/HomePage"));

const ProductDetailPage = lazy(() => import("./components/ProductDetailPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<Men />} />

            <Route path='/ViewAll' element={<ViewAll />}>
              <Route path=':category' element={<ProductsPage />} />
            </Route>

            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
