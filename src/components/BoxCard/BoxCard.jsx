import styles from "./BoxCard.module.css";

const BoxCard = ({ asset }) => {
  return (
    <>
      <div className={styles.box_card}>
        <div className={styles.box_card_img}>
          <img
            src={asset.img}
            alt="box_card"
          />
        </div>
        <div>
          <p className={styles.box_card_title}>Title: {asset.title}</p>
          <ul className={styles.box_card_data}>
            <li>COLOR: {asset.color}</li>
            <li>BOX NO: {asset.box_no}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BoxCard;
