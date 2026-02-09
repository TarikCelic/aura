import { Link } from 'react-router-dom';
import style from './List.module.css';

import naAkicji from '../../assets/icons/akcije.svg';
import dostava from '../../assets/icons/dostava.svg';
import naRate from '../../assets/icons/rate.svg';
import support from '../../assets/icons/support.svg';

export default function List() {
  return (
    <div className={style.list}>
      <Link className={style.listItem}>
        <img src={naAkicji} alt="" />
        <p>Akcije u toku</p>
      </Link>
      <Link className={style.listItem}>
        <img src={dostava} alt="" />
        <p>Dostava u cijeloj BiH</p>
      </Link>
      <Link className={style.listItem}>
        <img src={naRate} alt="" />
        <p>Kupovina na rate</p>
      </Link>
      <Link className={style.listItem}>
        <img src={support} alt="" />
        <p>Korisnicka podrska</p>
      </Link>
    </div>
  );
}
