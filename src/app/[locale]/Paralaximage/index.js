"use client";
import styles from "./Paralaximage.module.css";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
// import { useTranslation } from "next-i18next";
export default function Paralaximage({title,button}) {
    const locale = useLocale();
    const [scrollTop, setScrollTop] = React.useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const parallaxStyle = {
        transform: `translateY(${scrollTop * 0.4}px) scale(${
            1 + scrollTop * 0.0005
        })`,
    };

    return (
        
           
            <div className={styles.parallaxContainer}>
                <div style={parallaxStyle} className={styles.section1}></div>
                <div className={styles.slogan}>
                    <h2 className={styles.title}>
                        Schlusselfertiges <br></br>Haus
                    </h2>
                    <p className={styles.subTitle}>{title}</p>
                    <Link className={styles.link} href={`/${locale}/contact`}>
                        <button className={styles.button}>{button}</button>
                    </Link>
                </div>
            </div>
            
           
    );
}
