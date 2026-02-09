import style from './ProductCard.module.css';
import cart from '../../assets/icons/cart.svg';
export default function ProductCard({ product }) {
  return (
    <div className={style.product}>
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>{product.shortDesc}</p>
      <div className={style.priceCart}>
        <div className={style.price}>
          <p>
            <span className={style.productPrice}>{product.price}</span>{' '}
            {product.currency}
          </p>
        </div>
        <div className={style.cart}>
          <img src={cart} width={23} alt="" />
        </div>
      </div>
    </div>
  );
}
