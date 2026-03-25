import "./About.css";
// Importamos Swiper y sus herramientas
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importamos los estilos obligatorios de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMPORTA TUS FOTOS AQUÍ
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";

// 1. IMPORTAMOS EL LOGO PNG
import logo from "../assets/logo.png";

function About() {
  return (
    <section className="about-section fade-in">
      <div className="about-container">
        {/* Columna Izquierda: El Texto */}
        <div className="about-text">
          <h2>Nosotros</h2>
          <p>
            Desde Anaco, Venezuela, <strong>La Moto Eléctrica</strong> Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sequi, saepe
            necessitatibus aperiam a porro aut debitis. Saepe alias deleniti
            rem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            soluta debitis, iure voluptas necessitatibus odio incidunt saepe
            expedita molestias quia!
          </p>

          {/* 2. EL LOGO APARECE AQUÍ ABAJO DEL TEXTO */}
          <img src={logo} alt="Logo La Moto Eléctrica" className="about-logo" />
        </div>

        {/* Columna Derecha: EL CARRUSEL */}
        <div className="about-image-container">
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
            <SwiperSlide>
              <img
                src={foto1}
                alt="La Moto Eléctrica"
                className="carousel-photo"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img src={foto2} alt="Detalle" className="carousel-photo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={foto3} alt="Detalle" className="carousel-photo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={foto4} alt="Detalle" className="carousel-photo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={foto5} alt="Detalle" className="carousel-photo" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default About;
