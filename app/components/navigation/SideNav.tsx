"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Navigation.module.css";


const SideNav = () => {

  const [showSideNav, setShowSideNav] = useState(false);

  const handleHover = () => {
    setShowSideNav(true);
  };

  const handleLeave = () => {
    setShowSideNav(false);
  };

  return (

    <div className={styles.sideNavContainer}>
      <div>
        <Image src="/side_logo.png" width={70} height={40} alt="side logo" />
      </div>
      <div className={styles.iconContainer} onMouseOver={handleHover}>

        <Link href={"/"}>
          <Image src="/home.svg" width={24} height={24} alt="home" />
        </Link>

        <Image src="/msg_box.svg" width={24} height={24} alt="msg box" />
        <Image src="/store.svg" width={24} height={24} alt="store" />
        <Image src="/payment.svg" width={24} height={24} alt="card" />
        <Image src="/app_store.svg" width={24} height={24} alt="app store" />
        <Image src="/trophy.svg" width={24} height={24} alt="trophy" />

      </div>

      <div className={styles.hrBorder}></div>
      <div className={styles.iconContainer} onMouseOver={handleHover}>
        <Image src="/setting.svg" width={24} height={24} alt="setting" />
        <Image src="/logout.svg" width={24} height={24} alt="logout" />
      </div>

      {showSideNav && (
        <div className={styles.SideNav} onMouseLeave={handleLeave}>
          <div className={styles.sideImageContainer}>
            <Image src={"/GameQuest.png"} width={160} height={24} alt="logo" />
          </div>
          <div className={styles.textIcon}>
            <div className={`${styles.dfc} ${styles.sideNavText}`}>
              
                <Image src="/home.svg" width={24} height={24} alt="home" />
             
              <Link href={"/"}>
                <div>Home</div>
              </Link>
            </div>
            <div className={`${styles.dfc} ${styles.sideNavText}`}>
              <Image src="/msg_box.svg" width={24} height={24} alt="msg box" />
              <div>Messages</div>
            </div>
            <div className={`${styles.dfc} ${styles.sideNavText}`}>
              <Image src="/store.svg" width={24} height={24} alt="store" />
              <div>Game Store</div>
            </div>
            <div className={`${styles.dfc} ${styles.sideNavText}`}>
              <Image src="/payment.svg" width={24} height={24} alt="card" />
              <div>Payments</div>
            </div>
            <div className={`${styles.dfc} ${styles.sideNavText}`}>
              <Image src="/trophy.svg" width={24} height={24} alt="trophy" />
              <div>LeaderBoard</div>
            </div>
          </div>
          <div className={styles.hrBorder1}></div>
          <div className={styles.textIcon}>
            <div className={`${styles.dfc} ${styles.sideNavText}`}>
              <Image src="/setting.svg" width={24} height={24} alt="setting" />
              <div>Settings</div>
            </div>
            <div className={`${styles.dfc} ${styles.sideNavText}`}>
              <Image src="/logout.svg" width={24} height={24} alt="logout" />
              <div>Logout</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
