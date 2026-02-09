import HeadingGrid from '../../components/HeadingGrid/HeadingGrid';
import style from './PCComponents.module.css';
import { Link } from 'react-router-dom';

import procesor from '../../assets/images/catComponents.jpg';
import grafa from '../../assets/images/catGraphics.jpg';
import ram from '../../assets/images/catRAM.jpg';
import cooler from '../../assets/images/catCooler.jpg';
import maticna from '../../assets/images/catMotherBoard.jpg';
import psu from '../../assets/images/catPSU.jpg';
import kuciste from '../../assets/images/catEmptyPCCase.jpg';

export default function PCComponents() {
  return (
    <HeadingGrid
      sectionName="Racunarske Komponente"
      sectionIntroduce="Sve Komponente za vas Build"
    >
      <>
        <Link to="/shop/components/maticne" className={style.gridItem}>
          <img src={maticna} alt="" />
          <p>Maticne Ploce</p>
        </Link>
        <Link to="/shop/components/kucista" className={style.gridItem}>
          <img src={kuciste} alt="" />
          <p>Kucista</p>
        </Link>
        <Link to="/shop/components/procesori" className={style.gridItem}>
          <img src={procesor} alt="" />
          <p>Procesori</p>
        </Link>
        <Link to="/shop/components/graficke" className={style.gridItem}>
          <img src={grafa} alt="" />
          <p>Graficke Kartice</p>
        </Link>
        <Link to="/shop/components/ram" className={style.gridItem}>
          <img src={ram} alt="" />
          <p>Radna Memorija</p>
        </Link>
        <Link to="/shop/components/napajanja" className={style.gridItem}>
          <img src={psu} alt="" />
          <p>Napajanja</p>
        </Link>
        <Link to="/shop/components/hladnjaci" className={style.gridItem}>
          <img src={cooler} alt="" />
          <p>Hladnjaci</p>
        </Link>
      </>
    </HeadingGrid>
  );
}
