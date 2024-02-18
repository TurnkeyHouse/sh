"use client"
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';
import styles from './Cards.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-image-gallery/styles/css/image-gallery.css';


function Cards({
                     prtitle1,
                     prtitle2,
                     prtitle3,
                     prtitle4,
                     prtitle5,
                     prtitle6,
                     prtitle7,
                     prtitle8,
                     prtext1,
                     prtext2,
                     prtext3,
                     prtext4,
                     prtext5,
                     prtext6,
                     prtext7,
                     prtext8
}) {
  const imgs = [
    '/imh1.jpg',
    '/imh2.jpg',
    '/imh3.jpg',
    '/imh4.jpg',
    '/imh5.jpg',
    '/imh1.jpg',
    '/imh2.jpg',
    '/imh3.jpg',
    '/imh4.jpg',
    '/imh5.jpg',
  ];

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index) => {
    setIsGalleryOpen(true);
    setSelectedImageIndex(index);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedImageIndex(0);
  };

  const galleryImages = imgs.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headBlock}>
          <h1 className={styles.h1}>
            OUR <span className={styles.redh1}>PROJECTS</span>
          </h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.cards}>
            {imgs.map((value, index) => (
                <LazyLoadImage
                key={index}
                className={styles.projectImg}
                onClick={() => openGallery(index)}
                src={value}
                alt={`Project ${index + 1}`}
                effect="blur" // Додає ефект розфокусування під час завантаження
              />
                
            ))}
          </div>
        </div>
      </div>
      {isGalleryOpen && (
        <div className={styles.galleryOverlay} >
          <div
            className={styles.galleryContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeGallery}>
        &times; {/* Знак "хрестик" */}
      </button>
            <ImageGallery
              items={galleryImages}
              startIndex={selectedImageIndex}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default  Cards;