import Image from "next/image";
import styles from "./Navigation.module.css";
import Link from "next/link";

 const TopNav = ()=> {

  return (
    <div className={styles.topNavContainer}>
        <div className={`${styles.dfc} ${styles.navTextContainer}`}>
            <Link href={'/'}>
            <div>Home</div></Link>
            <div className={styles.vBorder}></div>
            <div>Game Store</div>
            <div className={styles.vBorder}></div>
            <div>LeaderBoard</div>
        </div>
        <div className={styles.searchDiv}>
            <div className={styles.searchIconDiv}
                style={{
                    backgroundImage:`url('/search.svg')`
                }}
            ></div>
            <input className={styles.searchInput} type="text"
                
            placeholder="What are you looking for?" />
        </div>
        <div className={`${styles.dfc} ${styles.topIconDiv}`}>
            <div className={styles.vBorder}></div>
            <div className={`${styles.dfc} ${styles.wrapper}`}>
                <Image src="/bell.svg" width={21} height={21} alt="bell" />
            </div>
            <div className={styles.vBorder}></div>
            <div className={`${styles.dfc} ${styles.wrapper}`}>
                <Image src="/bag.svg" width={21} height={21} alt="bag" />
            </div>
            <div className={styles.vBorder}></div>
            <div className={`${styles.dfc} ${styles.wrapper}`}>       
            </div>
        </div>
    </div>
  )
}
export default TopNav;
