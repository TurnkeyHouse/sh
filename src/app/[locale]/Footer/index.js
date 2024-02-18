"use client"
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from "next-intl";
import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink, scroller  } from "react-scroll";
// import { isMobile } from 'react-device-detect';
// function handleClickStart()  {
//     scroller.scrollTo("home", {
//       duration: 800,
//       delay: 0,
//       smooth: "easeInOutQuart",
//     });
//   }
  
function Footer() {  
  const locale = useLocale();
  return (
    <>
    <footer className={styles.footer}>
   {/* <a  href="https://t.me/+380968336006" target="_blank" className={styles.fd}>© 2023 Simplifier of business processes.</a>
   <a  className={styles.fd} href="tel:+49 1517 2640531">+49-1517-2640531</a>
           <div className={styles.threeBlock}>
             <a href='' target="_blank"><Image className={styles.icon}  width={30} height={30} src="/instagram.png" alt="instagram" /></a>
             <a href='https://www.facebook.com/profile.php?id=100088519397111' target="_blank"><Image className={styles.icon} width={30} height={30} src="/facebook.png" alt="facebook" /></a>
             <a href=""><Image className={styles.icon} width={30} height={30} src="/viber.png" alt="viber" /></a>
             <a  href="" target="_blank" ><Image className={styles.icon} width={35} height={35} src="/telegram.png" alt="telegram" /></a>
           </div> */}
           <div className={styles.footerContainer}>
           <div className={styles.footerColums}>
           <div className={styles.footerColum}>
           <div className={styles.footerColumInner}>
            <h3 className={styles.logoTitle}>
            INKD BY MARYANN
            </h3>
            <p className={styles.footerDescr}>
              lorem ipsum dolar text one step one decision one dream   lorem ipsum dolar text one step one decision one dream 
            </p>
            <Link className={styles.link} href={`/${locale}/contact`}>
                <button className={styles.buttonBlack}>
                  MORE INFORMATION
                </button>
            </Link>
            </div>
           </div>

           <div className={styles.footerColum}>
           <div className={styles.footerColumInner}>
           <h3 className={styles.titleColums}>
           Working Days
            </h3>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Monday – Saturday
            </p>
            <p className={styles.ItemFooterDescr}>12pm – 11pm</p>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Sunday
            </p>
            <p className={styles.ItemFooterDescr}>   12pm – 09pm</p>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Appointments
            </p>
            <p className={styles.ItemFooterDescr}> 24 Hours a Day!</p>
            </div>
            </div>
           </div>

           <div className={styles.footerColum}>
           <div className={styles.footerColumInner}>
           <h3 className={styles.titleColums}>
           Contact Us
            </h3>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Address
            </p>
            <p className={styles.ItemFooterDescr}>514 S. Magnolia St. 32806, US</p>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Phone
            </p>
            <p className={styles.ItemFooterDescr}>(555) 555-5555</p>
            </div>
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Email
            </p>
            <p className={styles.ItemFooterDescr}>  info@maori.com</p>
            </div>
            </div>
           </div>
            </div>
           </div>
    </footer>
    </>
  );
}

export default Footer;