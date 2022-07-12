import { Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path='/product-details/:productId'>
          <ProductDetails />
        </Route>
      </main> 
    </div>
  );
}

export default App;

// ourDomain.com/ => Component A
// outDomain.com/products => Component B
