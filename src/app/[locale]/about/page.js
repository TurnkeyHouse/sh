import styles from "./About.module.css";
import Header from "../Header";
import Footer from "../Footer";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import Image from "next/image";
import SecondSlider from "../SecondSlider";
import ScrollToTopButton from "@/app/ScrollToTopButton/ScrollToTopButton";
function About({
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
            contact={t("contact")} 
            />
             <ScrollToTopButton/>
            <div className={styles.wrapper}>
            <div className={styles.headBlock}>
          <h1 className={styles.h1}>
            ABOUT <span className={styles.redh1}>US</span>
          </h1>
          <div className={styles.line}></div>
        </div>
                <div className={styles.content}>
                <div className={styles.cv}>
                <div className={styles.cvLeft}>
                     <p className={styles.cvText1} >Iudicem sed iudicem quo commodo si fabulas, possumus instituendarum et cupidatat, fore cernantur ab aute eram. Esse doctrina ex appellat se nulla et ullamco. Arbitror aliqua ipsum nam anim, et labore id fore ex o veniam expetendis o senserit dolore offendit offendit, ne lorem eram quae incididunt, quorum iudicem e velit fugiat ea varias familiaritatem expetendis lorem singulis.</p>
                     <p className={styles.cvTextCitate} >Fore admodum ubi incurreret ab multos est nescius, qui quid dolor esse incurreret et labore id fore ex o veniam expetendis fugiat ea varias...</p>
                     <p className={styles.cvText1} >udicem labore ullamco e legam ubi singulis, quem hic quibusdam et sint, tamen est o quem possumus, ubi laborum consectetur si ne elit mandaremus sed quo fore mandaremus, de amet illum a arbitror. Est non domesticarum. Ea magna an fore.</p>
                    </div>
                    <div className={styles.cvRight}>
                    <Image
                        className={styles.imgAbout}
                        width={500}
                        height={380}
                        src="/people3.webp"
                        alt="blackman"
                    />
                    </div>
                    
                    </div>
                    <SecondSlider/>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default About;
