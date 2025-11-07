import { Dispatch } from 'react'
import type { Product } from '../types'
import type { CartActions } from '../reducers/cart-reducer'

type ProductProps = {
    product : Product, 
    dispatch: Dispatch<CartActions>
}

export default function Product({product, dispatch} : ProductProps) {

    const { name, image, description, price } = product

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
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => dispatch({type: 'add-to-cart', payload: {item: product}})}
                    >Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}
