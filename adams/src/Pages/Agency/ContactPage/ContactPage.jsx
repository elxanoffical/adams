import React from "react";
import "./ContactPage.scss";
import emailjs from "@emailjs/browser";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Animation from "../../../Animations/Animation";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  gsap.registerPlugin(ScrollTrigger);
  const inptLeft = useRef();
  const inptHeaders = useRef();
  const inptHeadersP = useRef();

  const inputRight = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });
  const form = useRef();

  useEffect(() => {
    const inpt1 = document.querySelector("#name");
    const inpt2 = document.querySelector("#email");
    const inpt3 = document.querySelector("#tel");
    const inpt4 = document.querySelector("#message");

    tl.fromTo(
      inptHeaders.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 }
    );
    tl.fromTo(
      inptHeadersP.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 },
      "<"
    );
    tl.fromTo(inpt1, { opacity: 0, y: 40 }, { opacity: 1, y: 0 });
    tl.fromTo(inpt2, { opacity: 0, y: 40 }, { opacity: 1, y: 0 });
    tl.fromTo(inpt3, { opacity: 0, y: 40 }, { opacity: 1, y: 0 });
    tl.fromTo(inpt4, { opacity: 0, y: 40 }, { opacity: 1, y: 0 });

    Animation(inputRight.current, -40, 0, 0, 0, 0, 1);
  }, []);

  const onSubmit = (e) => {
    emailjs
      .sendForm(
        "service_mz0cuks",
        "template_ti0olew",
        form.current,
        "K118KGb44UDuoLBJs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const nameInpt = document.querySelectorAll(".contact-inpt");
    const formBtn = document.querySelector("#btnSubmit");
    formBtn.innerHTML = "Göndərildi";
    setTimeout(() => {
      nameInpt.forEach((item) => (item.value = ""));
      formBtn.innerHTML = "Təsdiqlə";
    }, 2000);
  };

  return (
    <div className="contactP-c">
      <div className="contact-left" ref={inptLeft}>
        <form onSubmit={handleSubmit(onSubmit)} ref={form}>
          <h1 ref={inptHeaders}>Bizə yazın</h1>
          <p ref={inptHeadersP}>
            Bizə çəkinmədən istənilən vaxt müraciət edə bilərsiniz. Ən qısa
            zamanda sizə geri dönüş olacaq.
          </p>

          <input
            id="name"
            className="contact-inpt"
            name="name"
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="text"
            placeholder="Ad və soyad"
          />
          {errors.name && errors.name.type === "required" && (
            <span>Ad hissəsi doldurulmalıdır.</span>
          )}
          {errors.name && errors.name.type === "pattern" && (
            <span>Yalnız hərflərdən istifadə edin.</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>Ad uzunluğu maksimum 15 olar.</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span>Ad uzunluğu minimum 3 olar.</span>
          )}

          <input
            id="email"
            className="contact-inpt"
            name="email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
            type="email"
            placeholder="Email"
          />
          {errors.email && errors.email.type === "required" && (
            <span className="inpt-err">Email hissəsi doldurulmalıdır.</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="inpt-err">Email sintaksisini düzgün yazın.</span>
          )}

          <input
            id="tel"
            className="contact-inpt"
            name="tel"
            {...register("tel", {
              required: true,
              pattern: /^[0-9]+$/i,
              minLength: 9,
              maxLength: 9,
            })}
            type="number"
            placeholder="Əlaqə nömrəsi"
          />
          {errors.tel && errors.tel.type === "required" && (
            <span className="inpt-err">Nömrə hissəsi doldurulmalıdır.</span>
          )}
          {errors.tel && errors.tel.type === "pattern" && (
            <span className="inpt-err">Yalnız rəqəmlərdən istifadə edin.</span>
          )}
          {errors.tel && errors.tel.type === "maxLength" && (
            <span className="inpt-err">Nömrə uzunluğu 9 olar.</span>
          )}
          {errors.tel && errors.tel.type === "minLength" && (
            <span className="inpt-err">Nömrə uzunluğu 9 olar.</span>
          )}

          <input
            id="message"
            className="contact-inpt"
            {...register("message", {
              required: true,
              minLength: 10,
              maxLength: 100,
            })}
            name="message"
            type="text"
            placeholder="Müraciətiniz"
          />
          {errors.message && errors.message.type === "required" && (
            <span className="inpt-err">Mesaj hissəsi doldurulmalıdır.</span>
          )}
          {errors.message && errors.message.type === "minLength" && (
            <span className="inpt-err">Mesaj uzunluğu minimum 10 olar.</span>
          )}
          {errors.message && errors.message.type === "maxLength" && (
            <span className="inpt-err">Mesaj uzunluğu maksimum 100 olar.</span>
          )}

          <button id="btnSubmit" type="submit">
            Müraciət et
          </button>
        </form>
      </div>
      <div className="contact-right" ref={inputRight}>
        <div className="contact-right-bg"></div>
        <div className="contact-info-card">
          <h2>Əlaqə</h2>
          <ul>
            <li>
              <img src="/contact_icons/mail.svg" />
              <span>office@adams.az</span>
            </li>
            <li>
              <img src="/contact_icons/call.svg" />
              <span>(+994) 50 719 86 16</span>
            </li>
            <li>
              <img src="/contact_icons/location.svg" />
              <span>
                Bəşir Səfəroğlu küç. 215 <br /> Bakı ş. Azərbaycan
              </span>
            </li>
            <li>
              <img src="/contact_icons/clock.svg" />
              <span>10:00-18:00</span>
            </li>
          </ul>
          <div className="contact-right-minibox"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
