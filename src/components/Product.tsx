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
        <div className="col-12 col-md-6 col-lg-4 my-4 d-flex">
            <div className="product-card">
                <div className="product-card__image">
                    <img
                        className="product-image"
                        src={`/img/${image}.webp`}
                        alt={name}
                    />
                </div>
                <div className="product-card__body">
                    <h3 className="text-black fw-bold text-uppercase title-product fs-4">{name}</h3>
                    <p className="product-card__desc">{description}</p>

                    <div className="sizes mb-2">
                        <strong>Tallas disponibles:</strong>
                        <ul style={{ paddingLeft: '1rem', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
                            {[...sizes]
                                .sort((a, b) => parseFloat(a.name.replace('#', '')) - parseFloat(b.name.replace('#', '')))
                                .map((size, index) => (
                                    <li key={index}>
                                        Talla {size.name} — Stock: {size.stock}
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className="product-card__footer">
                        <p className="fw-black text-primary fs-3 mb-2">${price}</p>
                        <WhatsAppButton productName={name} />
                    </div>
                </div>
            </div>
        </div>
    )
}
