import style from './Shop.module.css';
import { Link } from 'react-router-dom';
import HeadingGrid from '../../components/HeadingGrid/HeadingGrid';
import gamingPC from '../../assets/images/catPCCase.jpg';
import laptop from '../../assets/images/catLaptop.jpg';
import phone from '../../assets/images/catPhone.jpg';
import sWatch from '../../assets/images/catSmartWatch.jpg';
import tv from '../../assets/images/catTelevision.jpg';
import componenta from '../../assets/images/catComponents.jpg';
export default function Shop() {
  return (
    <HeadingGrid
      sectionName="Shop All Products"
      sectionIntroduce="Pronadite svoju kategoriju"
    >
      <>
        <Link to="/shop/desktop" className={style.gridItem}>
          <img src={gamingPC} width={360} alt="" />
          <p>Gaming Racunari</p>
        </Link>

        <Link to="/shop/laptopi" className={style.gridItem}>
          <img src={laptop} width={360} alt="" />
          <p>Laptopi</p>
        </Link>

        <Link to="/shop/phone" className={style.gridItem}>
          <img src={phone} width={360} alt="" />
          <p>Telefoni</p>
        </Link>

        <Link to="/shop/pametni-satovi" className={style.gridItem}>
          <img src={sWatch} width={360} alt="" />
          <p>Pametni Satovi</p>
        </Link>

        <Link to="/shop/tv" className={style.gridItem}>
          <img src={tv} width={360} alt="" />
          <p>Televizori</p>
        </Link>
        <Link to="/shop/components" className={style.gridItem}>
          <img src={componenta} width={360} alt="" />
          <p>Racunarske Komponente</p>
        </Link>
      </>
    </HeadingGrid>
  );
}
