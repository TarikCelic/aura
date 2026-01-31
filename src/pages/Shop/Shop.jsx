import style from './Shop.module.css';
import { Link } from 'react-router-dom';
import HeadingGrid from '../../components/HeadingGrid/HeadingGrid';
import gamingPC from '../../assets/images/catPCCase.png';
import laptop from '../../assets/images/catLaptop.png';
import phone from '../../assets/images/catPhone.png';
import sWatch from '../../assets/images/catSmartWatch.png';
import tv from '../../assets/images/catTelevision.png';
export default function Shop() {
  return (
    <HeadingGrid
      sectionName="Shop All Products"
      sectionIntroduce="Pronadite svoju kategoriju"
    >
      <>
        <Link to="/shop/gaming-racunari" className={style.gridItem}>
          <img src={gamingPC} alt="" />
          <p>Gaming Racunari</p>
        </Link>

        <Link to="/shop/laptopi" className={style.gridItem}>
          <img src={laptop} alt="" />
          <p>Laptopi</p>
        </Link>

        <Link to="/shop/telefoni" className={style.gridItem}>
          <img src={phone} alt="" />
          <p>Telefoni</p>
        </Link>

        <Link to="/shop/pametni-satovi" className={style.gridItem}>
          <img src={sWatch} alt="" />
          <p>Pametni Satovi</p>
        </Link>

        <Link to="/shop/televizori" className={style.gridItem}>
          <img src={tv} alt="" />
          <p>Televizori</p>
        </Link>
      </>
    </HeadingGrid>
  );
}
