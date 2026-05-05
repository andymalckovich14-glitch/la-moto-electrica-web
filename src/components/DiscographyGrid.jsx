"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMounted } from "../hooks/useMounted";

const EASE = [0.22, 1, 0.36, 1];

export default function DiscographyGrid({ albums }) {
  const mounted = useMounted();

  const cardAnim = (delay = 0) =>
    mounted
      ? {
          initial: { opacity: 0, scale: 0.94, y: 14 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.65, ease: EASE, delay },
        }
      : {};

  const titleAnim = mounted
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 1.1, ease: EASE },
      }
    : {};

  return (
    <>
      <motion.h2 className="disco-title section-heading" {...titleAnim}>
        Discografía
      </motion.h2>

      <div className="disco-grid">
        {albums.map((album, i) => (
          <motion.a
            href={album.url}
            target="_blank"
            rel="noopener noreferrer"
            className="disco-card"
            key={album.id}
            {...cardAnim(i * 0.06)}
            whileHover={
              mounted
                ? { scale: 1.04, transition: { duration: 0.25 } }
                : undefined
            }
          >
            <Image src={album.cover} alt={album.title} className="disco-cover" width={300} height={300} />
            <div className="disco-overlay">
              <div className="disco-info">
                <p className="disco-type">{album.type}</p>
                <h3>{album.title}</h3>
                <span className="disco-year">{album.year}</span>
                <div className="spotify-hint">Escuchar en Spotify</div>
              </div>
            </div>
          </motion.a>
        ))}

        <motion.div
          className="disco-card mystery-card"
          {...cardAnim(albums.length * 0.06)}
          whileHover={
            mounted
              ? { scale: 1.04, transition: { duration: 0.25 } }
              : undefined
          }
        >
          <div className="mystery-content">
            <span className="mystery-icon">?</span>
            <p className="mystery-text">Próximamente</p>
          </div>
          <div className="disco-overlay">
            <div className="disco-info">
              <p className="disco-type">Nuevo Material</p>
              <h3>???</h3>
              <span className="disco-year">2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
