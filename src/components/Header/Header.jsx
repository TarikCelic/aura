import style from './Header.module.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <section id={style.header}>
      <h1>
        Discover the Future of <span className={style.special}>Tech</span>
      </h1>
      <p>
        Innovative solutions, cutting-edge technology, and products designed for
        the digital age.
      </p>
      <div className={style.btns}>
        <Link className={style.getStarted}>Get Started</Link>
        <Link>About Us</Link>
      </div>
    </section>
  );
}
