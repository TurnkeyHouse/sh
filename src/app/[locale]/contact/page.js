import React from "react";
import styles from "./Contacts.module.css";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import ContactComponent from "../ContactComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
import ScrollToTopButton from "@/app/ScrollToTopButton/ScrollToTopButton";
function Contacts({
    params: {locale}
  }) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Index');
    return (
        <>
            <Header
             home={t("home")}
             projects={t("projects")}
             about={t("about")}
             contact={t("contact")}  />
              <ScrollToTopButton/>
              <div className={styles.headBlock}>
                <h1 className={styles.hg1} >OUR <span className={styles.redh1}>CONTACT</span></h1>
                <div className={styles.line}></div>
            </div>
            <ContactComponent
            contacTitle={t("contacTitle")}
            contacttext1={t("contacttext1")}
            contacttext2={t("contacttext2")}
            contacttext3={t("contacttext3")}
            name={t("name")}
            email={t("email")}
            phone={t("phone")}
            letter={t("letter")}
            require={t("require")}
            submit={t("submit")}
            error={t("error")}
            />
             <Footer />
        </>
    );
}
export default Contacts;
