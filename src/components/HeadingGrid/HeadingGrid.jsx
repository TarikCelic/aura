import style from './HeadingGrid.module.css';

export default function HeadingGrid({
  sectionName,
  sectionIntroduce,
  children,
}) {
  return (
    <section className={style.hgSection}>
      <h1>{sectionName}</h1>
      <p className={style.hgIntroduction}>{sectionIntroduce}</p>
      <div className={style.hgGrid}>{children}</div>
    </section>
  );
}
