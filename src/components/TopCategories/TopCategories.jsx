import style from './TopCategories.module.css';

import pcCase from '../../assets/images/catPCCase.png';
import phone from '../../assets/images/catPhone.png';
import laptop from '../../assets/images/catLaptop.png';
import smartWatch from '../../assets/images/catSmartWatch.png';
import tv from '../../assets/images/catTelevision.png';

import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Gaming PCs',
    image: pcCase,
    linkTo: '#',
  },
  {
    title: 'Laptops',
    image: laptop,
    linkTo: '#',
  },
  {
    title: 'Smart Watches',
    image: smartWatch,
    linkTo: '#',
  },
  {
    title: 'Phones',
    image: phone,
    linkTo: '#',
  },
  {
    title: 'Televisions',
    image: tv,
    linkTo: '#',
  },
];

export default function TopCategories() {
  return (
    <section className={style.topCategories}>
      <h2>TOP CATEGORIES</h2>
      <div className={style.categoriesGrid}>
        {categories.map((e, i) => (
          <div key={i} className={style.category}>
            <img src={e.image} alt="" />
            <div className={style.about}>
              <p>{e.title}</p>
              <Link to={e.linkTo}>Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
