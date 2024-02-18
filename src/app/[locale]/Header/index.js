"use client"
import Image from "next/image";
import styles from "./Header.module.css";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
export default function Header({home,about,projects,contact}) {
  const locale = useLocale();
  const pathname = usePathname()
  let  [open,setOpen] = React.useState(true);
  let  [active,setActive] = React.useState(0);
  let [selectlang,setSelectlang] =  React.useState(true);
  useEffect(() => {
   if(pathname === `/${locale}`) setActive(0);
   if(pathname === `/${locale}/projects`) setActive(1);
   if(pathname === `/${locale}/about`) setActive(2);
   if(pathname === `/${locale}/contact`) setActive(3);
  }, [pathname]);
  let openHandler= () => {
    setOpen(!open);
  }
    return (
       <>
            <header className={styles.header}>
            <Link className={styles.link} href={`/${locale}`}>
{/*              
              <Image
                        className={styles.favorImg}
                        width={40}
                        height={40}
                        src="/logo.png"
                        alt="png"
                    /> */}
                     {/* <p className={styles.logo}>inkd by marry ann</p> */}
              </Link>
                <div className={open ? styles.menu : styles.menu + " " + styles.active }>
                <ul onClick={() => openHandler()}  className={styles.menuList}>
                    <Link  className={styles.link}  href={`/${locale}`}><li onClick={() => setActive(0)} className={ (active === 0) ? styles.menuActive  : styles.menuItem }>{home}</li></Link>
                    <Link  className={styles.link}  href={`/${locale}/projects`}>  <li onClick={() => setActive(1)}  className={ (active === 1) ? styles.menuActive  : styles.menuItem }>{projects}</li></Link>
                    <Link  className={styles.link}   href={`/${locale}/about`}> <li onClick={() => setActive(2)}  className={ (active === 2) ? styles.menuActive  : styles.menuItem }>{about}</li></Link>
                    <Link  className={styles.link} href={`/${locale}/contact`}><li onClick={() => setActive(3)}  className={ (active === 3) ? styles.menuActive  : styles.menuItem }>{contact}</li></Link>
                    {/* <div onClick={handleChangeLanguage} className={styles.changeLanguage}>| {selectlang ?  "UK" : "DE"} | </div> */}


                 { pathname.includes("uk") ? <Link className={styles.lang}  href={`/de`}>| DE |</Link> : 
                    <Link className={styles.lang}  href={`/uk`}>| UK |</Link> 
                  }
                </ul>
                </div>
      <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
        <span></span>
      </div>
            </header>
            </>
    );
}
