import style from './TopCategories.module.css';

import pcCase from '../../assets/images/catPCCase.jpg';
import phone from '../../assets/images/catPhone.jpg';
import laptop from '../../assets/images/catLaptop.jpg';
import smartWatch from '../../assets/images/catSmartWatch.jpg';
import tv from '../../assets/images/catTelevision.jpg';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Gaming Racunari',
    image: pcCase,
    linkTo: '#',
  },
  {
    title: 'Laptopi',
    image: laptop,
    linkTo: '#',
  },
  {
    title: 'Pametni Satovi',
    image: smartWatch,
    linkTo: '#',
  },
  {
    title: 'Telefoni',
    image: phone,
    linkTo: '#',
  },
  {
    title: 'Televizori',
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
