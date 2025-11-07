import { Dispatch } from 'react'
import type { ProductCatalog } from '../types'
import type { CartActions } from '../reducers/cart-reducer'
import WhatsAppButton from './WhatsAppButton'

type ProductProps = {
    product : ProductCatalog, 
    dispatch: Dispatch<CartActions>
}

export default function Product({product/*, dispatch*/} : ProductProps) {

    const { name, image, description, price, sizes } = product

    return (
        <div className="col-12 col-md-6 col-lg-4 my-4 product-card">
            <div className="row align-items-center product-card">
                <div className="col-12 col-md-4 order-1 order-md-0 mb-2 mb-md-0 container-center-img">
                    <img className="img-fluid product-image d-block mx-auto" 
                        src={`/img/${image}.webp`} 
                        alt="imagen product" />
                </div>
                <div className="col-12 col-md-8 ps-md-3">
                    <h3 className="text-black fs-4 fw-bold text-uppercase title-product">{name}</h3>
                    <p>{description}</p>
                    
                <div className="sizes mb-2">
                    <strong>Tallas disponibles:</strong>
                    <ul style={{ paddingLeft: '1rem', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
                    {[...sizes]
                        .sort((a, b) => Number(a.name) - Number(b.name))
                        .map((size, index) => (
                        <li key={index}>
                            Talla {size.name} — Stock: {size.stock}
                        </li>
                        ))}
                    </ul>
                </div>

                    <div style={{ textAlign: 'center' }}>
                        <p className="fw-black text-primary fs-3">${price}</p>
                    </div>
                    {/*<button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => dispatch({type: 'add-to-cart', payload: {item: product}})}
                    >Agregar al Carrito</button>*/}
                    <div style={{ textAlign: 'center' }}>
                        <WhatsAppButton productName={name} />
                    </div>

                </div>
            </div>
        </div>
    )
}
