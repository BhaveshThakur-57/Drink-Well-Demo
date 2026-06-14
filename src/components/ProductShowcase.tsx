"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/siteData";
import styles from "./ProductShowcase.module.css";

export default function ProductShowcase() {
  return (
    <section id="products" className={`section ${styles.section}`}>
      <div className="container">
        <div className="text-center">
          <p className="section-label">Our Products</p>
          <h2 className="section-title">Premium Bottles, <span className="text-gradient">Every Size</span></h2>
          <p className="section-subtitle">Choose the perfect bottle size for your brand. Every option is fully customizable.</p>
        </div>
        <div className={styles.grid}>
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <motion.div
                className={styles.imgWrap}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={p.image} alt={p.name} width={200} height={320} className={styles.img} />
              </motion.div>
              <div className={styles.size}>{p.size}</div>
              <h3>{p.name}</h3>
              <p className={styles.desc}>{p.description}</p>
              <a href="#cta" className={`btn btn-secondary ${styles.btn}`}>Get Quote</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
