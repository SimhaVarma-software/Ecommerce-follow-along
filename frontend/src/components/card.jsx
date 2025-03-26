import React from 'react'
import styles from "./card.module.css";
const card = ({Products}) => {
  return (
    <div className={Styles.css}
    ><img className={styles.productImg}src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    </div>
  )
}

export default card
