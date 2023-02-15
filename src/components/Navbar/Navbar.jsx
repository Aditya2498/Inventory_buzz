import Link from "next/link";
import logo from "../../../public/logo.png";
import styles from './Navbar.module.css';
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className={styles.navcontainer}>
            <div className={styles.left_wrap}>
              <div className="logo">
                <Image
                  src={logo}
                  width={80}
                  height={70}
                  alt="Chrome_Pictures"
                />
              </div>
            </div>
            <div className={styles.right_wrap}>
                <ul className={styles.nav_links}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Inventory</Link>
                  </li>
                  <li>
                    <Link href="/">Store</Link>
                  </li>
                  <li>
                    <Link href="/">Boxes</Link>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
