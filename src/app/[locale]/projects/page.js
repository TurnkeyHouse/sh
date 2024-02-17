import styles from './Projects.module.css';
import Header from '../Header';
import Footer from '../Footer';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Cards from '../Cards';
import ScrollToTopButton from '@/app/ScrollToTopButton/ScrollToTopButton';

function Projects({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  
  return (
    <>
      <Header
        home={t('home')}
        projects={t('projects')}
        about={t('about')}
        contact={t('contact')}
      />
       <ScrollToTopButton/>
     <Cards/>
      <Footer />

      
    </>
  );
}

export default Projects;
