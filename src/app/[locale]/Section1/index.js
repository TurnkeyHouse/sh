"use client";
import styles from "./Section1.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
// import { useTranslation } from "next-i18next";
export default function Section1({button,s1title,s1text}) {
    const locale = useLocale();
    

    return (
        
           
        <div className={styles.section3}>
             <Image
                        className={styles.favorImg}
                        width={500}
                        height={380}
                        src="/img1h.jpg"
                        alt="blackman"
                    />
        <div className={styles.ourServicesContainer}>
            <h1 className={styles.h1}>
            {/* {s1title} */}
            SERVICE BEYOND
            <span className={styles.span} > EXPECTATION </span>
            </h1>
            <div className={styles.line}></div>
            <h2 className={styles.mainText}>
                {/* {s1text} */}
                lorem ipsum dolar text one step one decision one dream   lorem ipsum dolar text one step one decision one dream 
                lorem ipsum dolar text one step one decision one dream   lorem ipsum dolar text one step one decision one dream 
            </h2>
            <Link className={styles.link} href={`/${locale}/about`}>
                <button className={styles.buttonBlack}>
                  {button}
                </button>
            </Link>
        </div>
    </div>
            
           
    );
}
