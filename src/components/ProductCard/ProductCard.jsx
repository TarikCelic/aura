import style from "./ProductCard.module.css";
import cart from "../../assets/icons/cart.svg";
import saleSVG from "../../assets/icons/sale.svg";
export default function ProductCard({ product }) {
  return (
    <div className={style.product}>
      {product.onSale && (
        <div className={style.onSale}>
          <p>ON SALE !</p>
          <p>
            {Math.round(
              ((product.price - product.salePrice) / product.price) * 100,
            )}{" "}
            %
          </p>
        </div>
      )}
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>{product.shortDesc}</p>
      <div className={style.priceCart}>
        <div className={style.price}>
          {!product.onSale && (
            <p>
              <span className={style.productPrice}>{product.price}</span>{" "}
              {product.currency}
            </p>
          )}

          {product.onSale && (
            <>
              <p>
                <span className={style.ogPrice}>{product.price} KM</span>
              </p>
              <p>
                <span className={style.productPrice}>{product.salePrice}</span>{" "}
                {product.currency}
              </p>
            </>
          )}
        </div>
        <div className={style.cart}>
          <img src={cart} width={25} alt="" />
        </div>
      </div>
    </div>
  );
}
