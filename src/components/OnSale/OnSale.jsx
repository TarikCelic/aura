import style from './OnSale.module.css';
import dLaptop from '../../assets/images/3d-laptop.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import leftIcon from '../../assets/icons/left-arrow.svg';
import rightIcon from '../../assets/icons/right-arrow.svg';

import cart from '../../assets/icons/cart.svg';

export default function OnSale() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: offset,
        behavior: 'smooth',
      });
    }
  };

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
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className={style.product}>
            <img src={dLaptop} alt="" />
            <p className={style.productName}>Laptop {item}</p>
            <p className={style.productDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className={style.priceCart}>
              <div className={style.price}>
                <p>
                  <span className="firstPrice">399</span>€
                </p>
                <p>
                  <span className="discountedPrice">240</span>€
                </p>
              </div>
              <div className={style.cart}>
                <img src={cart} width={30} alt="" />
              </div>
            </div>
            <Link to={'#'}>See The Product</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
