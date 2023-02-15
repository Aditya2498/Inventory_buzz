import styles from "./ShootCard.module.css";
import Link from 'next/link';

const ShootCard = ({shootData}) => {
  return (
    <>
    <Link href={`shoots/${shootData.link}`}>
      <div className={styles.shoot_card_container}>
        <div className={styles.left_part}>
          <h3 className={styles.title_generic}>{shootData.shoot_name}</h3>
          <p className={styles.title_generic}>Date : {shootData.shoot_date}</p>
        </div>
        <div className={styles.right_part}>
          <div>
            <h4 className={styles.label_generic}>Produced By:</h4>
            <div className={styles.title_generic}>{shootData.produced_by}</div>
          </div>
          <div>
              <h4 className={styles.label_generic}>Directed By:</h4>
              <div className={styles.title_generic}>{shootData.directed_by}</div>
          </div>
          <img src="./arrow-right.png" className={styles.arrow_right} alt="arrow_img" loading="lazy"/>
        </div>
      </div>
      </Link>
    </>
  );
};

export default ShootCard;
