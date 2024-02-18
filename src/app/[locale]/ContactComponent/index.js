"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./ConactComponent.module.css";
import Image from "next/image";
function ContactComponent({contacTitle,contacttext1,contacttext2,
    contacttext3,require,submit,name,email,phone,letter,error}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = React.useState(false);
    // const apiForm2 = process.env.REACT_APP_API_URL_FORM_TWO
    const mapStyle = {
        allowFullScreen: true,
        backgroundColor: 'black', // Встановіть чорний колір фону
      };
    
    const onSubmit = (data) => {
        setLoading(true);

        axios
            .post("/api/blogs", data)
            .then((response) => {
                if (response.status === 200) {
                    // Успішно відправлено форму
                    setLoading(false);
                    setTimeout(() => {
                        alert("Form submitted successfully!");
                    }, 1000);
                    reset(); // Очистка форми
                } else {
                    throw new Error(response.statusText);
                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // Встановлюємо setLoading(false) при помилці
                setTimeout(() => {
                    alert("Form submission failed.");
                }, 1000);
            });
    };
    const showNotification = (message) => {
        // Перевірка чи браузер підтримує сповіщення
        if ("Notification" in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }
    };
    return (
        <>
            <div className={styles.wrapper}>
                {loading ? (
                    <div className={styles.loaderContainer}>
                        <Image
                            width={200}
                            height={200}
                            src="/loading.gif"
                            alt="dmdedjm"
                        />
                    </div>
                ) : (
                    <div className={styles.content}>
                        <div className={styles.content_top}>
      <iframe
      className={styles.map}
      style={{ border: mapStyle.border, backgroundColor: mapStyle.backgroundColor }}
       width="600"
        height="450"
        frameBorder="0"
        allowFullScreen
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5004.822439909615!2d16.779708947235633!3d51.15620778694206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f96519df11589%3A0x6018d28f88daf23d!2sAP%20serwis%20In%C5%BCynieria%20Budowlana!5e0!3m2!1suk!2sua!4v1706636597278!5m2!1suk!2sua"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className={styles.content_bottom}>
                        {/* <div className={styles.greyBlock}>
                            <h1 className={styles.h1}>{contacTitle}</h1>
                            <p className={styles.p}>
                               {contacttext1}
                            </p>
                            <p className={styles.p}>
                            {contacttext2}
                            </p>
                            <p className={styles.p}>
                            {contacttext3}
                            </p>
                        </div> */}
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
            <div className={styles.ItemFooter}> 
            <p className={styles.ItemFooterTitle}>
            Hours
            </p>
            <p className={styles.ItemFooterDescr}> Monday – Saturday 12pm – 11pm</p>
            </div>
            </div>
           </div>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                             <h3 className={styles.titleColums}>
                             Get In Touch
            </h3>
                            <div className={styles.item}>
                                <label className={styles.label} htmlFor="name">
                                  {name} <span>{(require)}</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label} htmlFor="email">
                                   {email} <span>{(require)}</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label} htmlFor="phone">
                                  {phone}  <span>{(require)}</span>
                                </label>
                                <input
                                    type="phone"
                                    id="phone"
                                    {...register("phone", { required: true })}
                                />
                                {errors.phone && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                <label
                                    className={styles.label}
                                    htmlFor="letter"
                                >
                                   {letter}<span>{(require)}</span>
                                </label>
                                <textarea
                                    className={styles.textarea}
                                    rows="4"
                                    cols="50"
                                    type="text"
                                    id="letter"
                                    {...register("letter", { required: true })}
                                />
                                {errors.letter && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <button className={styles.button} type="submit">
                               {submit}
                            </button>
                        </form>
                        </div>
                    </div>
                )}
                
            </div>
        </>
    );
}
export default ContactComponent;
