import React from 'react'
import { ProductCardStyled } from './product-card.style'

export default function ProductCard({ product }) {
    return (
        <ProductCardStyled>
            <div className="header-product border-bottom">
                <h6 className="text-center">{product.name}</h6>
            </div>
            <div className="product-content">
                <p className="price-discount text-center">{product.price} LE</p>
                {
                    product.promotions && product.promotions.length ?
                        product.promotions.map((v, i) => {
                          return (
                          v.active ? 
                                <p key={i} className="price-discount text-center m-b-20"> Use Promo Code
                                <span className="promo">  {v.code} </span>And Get Discount {v.discount}%</p>
                                :
                                <p key={i} style={{textDecoration: 'line-through'}} className="price-discount text-center m-b-20"> Use Promo Code
                                <span className="promo">  {v.code} </span>And Get Discount {v.discount}%</p>
                            )

                        })
                        : <p className="price-discount text-center m-b-20 promo">No Promo</p>
                }

            </div>

        </ProductCardStyled>

    )
}
