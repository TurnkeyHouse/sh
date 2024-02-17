import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import SecondSlider from "./SecondSlider";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Paralaximage from "./Paralaximage";
import {unstable_setRequestLocale} from 'next-intl/server';
import Section1 from "./Section1";
import Section2 from "./Section2";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
// import {locales} from '..';
// import { useTranslation } from "next-i18next";
export default function Home({
    params: {locale}
  }) {
    unstable_setRequestLocale(locale);
  const t = useTranslations('Index');

    return (
        <main className={styles.main}>
             <Header home={t("home")}
                    projects={t("projects")}
                    about={t("about")}
                    contact={t("contact")} />
        <Paralaximage title={t("title") } button={t("button")}/>
        <ScrollToTopButton/>
            <div className={styles.mainContainer} >
                
           <Section1 button={t("button")}
                     s1title={t("s1title")}
                     s1text={t("s1text")}/>
                      <div className={styles.section2}>
                <div className={styles.ourServicesContainer}>
                    {/* <h2 className={styles.ourTitle}>
                       {t("s4main")}
                       OUR SERVICES
                    </h2> */}
                    <div className={styles.services}>
                        <div className={styles.service}>
                            <h4 className={styles.service_title}> 
                             {/* {t("s4title1")} */}
                            FULL SLEEVE TATTOO
                             </h4>
                             <div className={styles.line}></div>
                             <Image
                        className={styles.favorImg}
                        width={100}
                        height={100}
                        src="/tattoo.png"
                        alt="blackman"
                    />
                            <p className={styles.service_description}>
                            {/* {t("s4text1")} */}
                            Something in the way she moves
                            </p>
                        </div>

                        <div className={styles.service}>
                            <h4 className={styles.service_title}> 
                             {/* {t("s4title1")} */}
                             TATTO RESTORATION
                             </h4>
                             <div className={styles.line}></div>
                             <Image
                        className={styles.favorImg}
                        width={100}
                        height={100}
                        src="/restoration.png"
                        alt="blackman"
                    />
                            <p className={styles.service_description}>
                            {/* {t("s4text1")} */}
                            Something in the way she moves
                            </p>
                        </div>

                        <div className={styles.service}>
                            <h4 className={styles.service_title}> 
                             {/* {t("s4title1")} */}
                           CREATIVE DESIGN
                             </h4>
                             <div className={styles.line}></div>
                             <Image
                        className={styles.favorImg}
                        width={100}
                        height={100}
                        src="/creative.png"
                        alt="blackman"
                    />
                            <p className={styles.service_description}>
                            {/* {t("s4text1")} */}
                            Something in the way she moves
                            </p>
                        </div>

                        {/* <div className={styles.service}>
                            <h4 className={styles.service_title}>{t("s4title2")}</h4>
                            <p className={styles.service_description}>
                            {t("s4text2")}
                            </p>
                        </div> */}
                        {/* <div className={styles.service}>
                            <h4 className={styles.service_title}>
                            {t("s4title3")}
                            </h4>
                            <p className={styles.service_description}>
                            {t("s4text3")}
                            title 3
                            </p>
                        </div> */}
                        {/* <div className={styles.service}>
                            <h4 className={styles.service_title}>
                                {t("s4title4")}
                                title 4

                                </h4>
                            <p className={styles.service_description}>
                            {t("s4text4")}
                            </p>
                        </div> */}
                        {/* <div className={styles.service}>
                            <h4 className={styles.service_title}>
                            {t("s4title5")}
                            </h4>
                            <p className={styles.service_description}>
                            {t("s4text5")}
                            </p>
                        </div> */}
                        <div className={styles.service}>
                            <h4 className={styles.service_title}>
                            {/* {t("s4title6")} */}
                          BODY PIERCING
                            </h4>
                            <div className={styles.line}></div>
                            <Image
                        className={styles.favorImg}
                        width={100}
                        height={100}
                        src="/pirs.png"
                        alt="blackman"
                    />
                            <p className={styles.service_description}>
                            {/* {t("s4text6")} */}
                            Something in the way she moves
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section4}>
                <div className={styles.ourFavorsContainer}>
                    <Image
                        className={styles.imh}
                        width={350}
                        height={250}
                        src="/imh1.jpg"
                        alt="blackman"
                    />
                     <Image
                        className={styles.imh}
                        width={250}
                        height={350}
                        src="/imh4.jpg"
                        alt="blackman"
                    />
                     <Image
                        className={styles.imh}
                        width={350}
                        height={250}
                        src="/imh3.jpg"
                        alt="blackman"
                    />
                     <Image
                        className={styles.imh}
                        width={250}
                        height={350}
                        src="/imh5.jpg"
                        alt="blackman"
                    />
                     <Image
                        className={styles.imh}
                        width={350}
                        height={250}
                        src="/imh2.jpg"
                        alt="blackman"
                    />
                    
                     {/* <Image
                        className={styles.imh}
                        width={500}
                        height={380}
                        src="/blackman.webp"
                        alt="blackman"
                    /> */}
                    
            </div>
            <Link className={styles.link} href={`/${locale}/projects`}>
                <button className={styles.buttonBlack}>
                  MORE INFORMATION
                </button>
            </Link>
            </div>
           {/* <Section2 button={t("button")}
                     s3text1={t("s3text1")}
                     s3text2={t("s3text2")} /> */}
           
           <div className={styles.section4_1}>
           <div className={styles.roadContainer}>  
           <div className={styles.roadItem}>  
                 <Image
                        className={styles.imh}
                        width={60}
                        height={60}
                        src="/booking.png"
                        alt="blackman"
                    />
                    <p className={styles.roadDescr}>BOOKING</p>
           </div>
           <div className={styles.liner}></div>
           <div className={styles.roadItem}>  
                 <Image
                        className={styles.imh}
                        width={65}
                        height={65}
                        src="/sketch.png"
                        alt="blackman"
                    />
                    <p className={styles.roadDescr}>SKETCH</p>
           </div>
           <div className={styles.liner}></div>
           <div className={styles.roadItem}>  
                 <Image
                        className={styles.imh}
                        width={60}
                        height={60}
                        src="/drawing.png"
                        alt="blackman"
                    />
                    <p className={styles.roadDescr}>DRAWING</p>
           </div>
           <div className={styles.liner}></div>
           <div className={styles.roadItem}>  
                 <Image
                        className={styles.imh}
                        width={67}
                        height={67}
                        src="/ink.png"
                        alt="blackman"
                    />
                    <p className={styles.roadDescr}>INK</p>
           </div>
           </div>
            </div>
            <div className={styles.sectionPricing}>
            <div className={styles.pricingContainer}>

              <h2 className={styles.pricingTitle}>
                   OUR  <span className={styles.pricingTitleRed}>PRICES</span>
              </h2>
              <div className={styles.line}></div>
                <div className={styles.pricingInner}>
                <div className={styles.pricingColumn1}>
                <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>

                  <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>
                  <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>
                  <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>

                   </div>
                   <div className={styles.pricingColumn2}>
                   <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>
                  <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>
                  <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>
                  <div className={styles.pricingItem}>
                <p className={styles.descrPrice} >BIG TATTO</p>
                <p className={styles.Price} >50$</p>
                  </div>
                
                
                   </div>
                
                </div>
                {/* <Link className={styles.link} href={`/${locale}/about`}>
                <button className={styles.buttonBlack}>
                  MORE INFORMATION
                </button>
            </Link> */}
                </div>
                
            </div>
            {/* <div className={styles.section5}>
                <SecondSlider 
                     s5main={t("s5main")}
                     s5text1={t("s5text1")}
                     s5text2={t("s5text2")}
                     s5text3={t("s5text3")}
                     s5name1={t("s5name1")}
                     s5name2={t("s5name2")}
                     s5name3={t("s5name3")} />
            </div> */}
           
            </div>
            <Footer />
        </main>
    );
}
