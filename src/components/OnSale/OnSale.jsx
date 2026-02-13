import style from "./OnSale.module.css";
import dLaptop from "../../assets/images/3d-laptop.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import leftIcon from "../../assets/icons/left-arrow.svg";
import rightIcon from "../../assets/icons/right-arrow.svg";

import cart from "../../assets/icons/cart.svg";
import products from "../../data/products";

export default function OnSale() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: offset,
        behavior: "smooth",
      });
    }
  };

  const izdvojeni = products.filter((e) => e.onSale === true);

  return (
    <section className={style.saleSection}>
      <div className={style.sectionHeader}>
        <h2>ON SALE</h2>
        <p>Ne propusti priliku</p>
      </div>
      <div className={style.arrows}>
        <div className={style.leftArrow} onClick={() => scroll(-365)}>
          <img src={leftIcon} width={40} alt="Left" />
        </div>
        <div className={style.rightArrow} onClick={() => scroll(365)}>
          <img src={rightIcon} width={40} alt="Right" />
        </div>
      </div>

      <div className={style.saleGrid} ref={scrollRef}>
        {izdvojeni.map((item) => (
          <div key={item} className={style.product}>
            <img src={item.image} alt="" />
            <p className={style.productName}>{item.name}</p>
            <p className={style.productDesc}>{item.shortDesc}</p>
            <div className={style.priceCart}>
              <div className={style.price}>
                <p>
                  <span className="firstPrice">{item.price}</span>KM
                </p>
                <p>
                  <span className="discountedPrice">{item.salePrice}</span>KM
                </p>
              </div>
              <div className={style.cart}>
                <img src={cart} width={30} alt="" />
              </div>
            </div>
            <Link to={"#"}>See The Product</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
