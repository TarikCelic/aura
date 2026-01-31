import HeadingGrid from '../../components/HeadingGrid/HeadingGrid';
import style from './PCComponents.module.css';
import { Link } from 'react-router-dom';

import procesor from '../../assets/images/products/IntelCoreI7.png';
import grafa from '../../assets/images/products/AMDRadeonRX7800XT.png';
import ram from '../../assets/images/products/KingstonFuryBeast32GB5600MHz.png';
import cooler from '../../assets/images/products/ArcticIII360.png';
import maticna from '../../assets/images/products/ASUSROGGAMINGWIFI.png';
import psu from '../../assets/images/products/RM1000.png';
import kuciste from '../../assets/images/products/LianLiO11.png';

export default function PCComponents() {
  return (
    <HeadingGrid
      sectionName="Racunarske Komponente"
      sectionIntroduce="Sve Komponente za vas Build"
    >
      <>
        <Link to="/shop/components/maticne" className={style.gridItem}>
          <img src={maticna} width={360} alt="" />
          <p>Maticne Ploce</p>
        </Link>
        <Link to="/shop/components/kucista" className={style.gridItem}>
          <img src={kuciste} width={360} alt="" />
          <p>Kucista</p>
        </Link>
        <Link to="/shop/components/procesori" className={style.gridItem}>
          <img src={procesor} width={360} alt="" />
          <p>Procesori</p>
        </Link>
        <Link to="/shop/components/graficke" className={style.gridItem}>
          <img src={grafa} width={360} alt="" />
          <p>Graficke Kartice</p>
        </Link>
        <Link to="/shop/components/ram" className={style.gridItem}>
          <img src={ram} width={360} alt="" />
          <p>Radna Memorija</p>
        </Link>
        <Link to="/shop/components/napajanja" className={style.gridItem}>
          <img src={psu} width={360} alt="" />
          <p>Napajanja</p>
        </Link>
        <Link to="/shop/components/hladnjaci" className={style.gridItem}>
          <img src={cooler} width={360} alt="" />
          <p>Hladnjaci</p>
        </Link>
      </>
    </HeadingGrid>
  );
}
