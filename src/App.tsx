import { useReducer, useEffect } from "react"
import Product from "./components/Product"
import Header from "./components/Header"
import { cartReducer, initialState } from "./reducers/cart-reducer"
import { Filter } from "./components/Filter"
import { useCatalogStore } from "./store";
import { db as products } from './data/db';

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  //const products = useCatalogStore((state) => state.filteredProducts());
  const sizeCurrent = useCatalogStore((state) => state.sizeCurrent);
  console.log(sizeCurrent)
  const filteredProducts = sizeCurrent
    ? products.filter((producto) => producto[sizeCurrent])
    : products;

  return (
    <>
      <Header 
        cart={state.cart}
        dispatch={dispatch}
      />
      
      <main className="container-xl mt-5">
           <h2 className="text-center">Chamarras para Caballero</h2>

            <Filter/>

            <div className="row mt-5">
                {filteredProducts.map((product) => (
                    <Product 
                        key={product.id}
                        product={product}
                        dispatch={dispatch}
                    />
                ))}
            </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">KickShop - Todos los derechos Reservados</p>
            </div>
      </footer>
    </>
  )
}

export default App
