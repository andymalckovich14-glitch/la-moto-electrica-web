"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMounted } from "../hooks/useMounted";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fotos = [
  { src: "/images/foto1.jpg", alt: "La Moto Eléctrica en concierto" },
  { src: "/images/foto2.jpg", alt: "La Moto Eléctrica en estudio" },
  { src: "/images/foto3.jpg", alt: "Detalle de la banda" },
  { src: "/images/foto4.jpg", alt: "Detalle de la banda" },
  { src: "/images/foto5.jpg", alt: "La Moto Eléctrica en vivo" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function About() {
  const mounted = useMounted();

  const anim = (dir = 0, delay = 0) =>
    mounted
      ? {
          initial: { opacity: 0, x: dir },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 1, ease: EASE, delay },
        }
      : {};

  return (
    <section className="about-section" id="nosotros">
      <div className="about-container">

        {/* ── Texto ── */}
        <div className="about-text">
          <motion.h2 {...anim(-32, 0)}>Nosotros</motion.h2>

          <motion.p {...anim(-32, 0.12)}>
            Desde Anaco, Venezuela, <strong>La Moto Eléctrica</strong> construye
            paisajes sonoros donde el ruido y la melodía coexisten en tensión
            constante. Formados en 2020, su música atraviesa el shoegaze, el
            post-rock y el indie alternativo, buscando en cada acorde el espacio
            entre lo que se dice y lo que se siente.
          </motion.p>

          <motion.p {...anim(-32, 0.22)}>
            Sus composiciones oscilan entre la fragilidad de un susurro y la
            densidad de una tormenta eléctrica — una dualidad que define tanto
            su sonido como su nombre. Hoy, con siete lanzamientos y una
            trayectoria forjada en la escena independiente venezolana, siguen
            expandiendo los límites de lo que una banda de provincias puede decirle
            al mundo.
          </motion.p>

          <motion.div {...anim(-32, 0.32)}>
            <Image
              src="/images/logo.png"
              alt="Logo La Moto Eléctrica"
              className="about-logo"
              width={100}
              height={100}
            />
          </motion.div>
        </div>

        {/* ── Carrusel ── */}
        <motion.div className="about-image-container" {...anim(32, 0.1)}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            {fotos.map((foto, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  className="carousel-photo"
                  width={800}
                  height={600}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
