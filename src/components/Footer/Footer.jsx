import logo from '../../assets/images/logoWhite.png';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import Socials from '../Socials/Socials';
export default function Footer() {
  return (
    <footer>
      <div className={style.upperFooter}>
        <img src={logo} alt="" />
        <div className={style.column}>
          <p>MEET US</p>
          <ul>
            <li>
              <Link>O nama</Link>
            </li>
            <li>
              <Link>Prodajna mjesta</Link>
            </li>
            <li>
              <Link>Zasto kupiti kod nas?</Link>
            </li>
            <li>
              <Link>Kontaktirajte nas</Link>
            </li>
          </ul>
        </div>
        <div className={style.column}>
          <p>NEED A HELP</p>
          <ul>
            <li>
              <Link>Kako se registrovati?</Link>
            </li>
            <li>
              <Link>Kako naruciti?</Link>
            </li>
            <li>
              <Link>Reklamacija i povrati</Link>
            </li>
            <li>
              <Link>Servis</Link>
            </li>
          </ul>
        </div>
        <div className={style.column}>
          <p>PAYMENT AND SHIPING</p>
          <ul>
            <li>
              <Link>Nacini placanja</Link>
            </li>
            <li>
              <Link>Sigurnost placanja</Link>
            </li>
            <li>
              <Link>Nacini dostave</Link>
            </li>
            <li>
              <Link>Uslovi poslovanja</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.lowerFooter}>
        <p className={style.copyright}>
          Copyright C 2026 Tarik Celic. All rights reserved.
        </p>
        <Socials />
      </div>
    </footer>
  );
}
