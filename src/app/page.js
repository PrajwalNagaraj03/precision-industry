"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaCogs, FaTools, FaIndustry, FaWrench, FaCube, FaCut, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './page.module.css';

const galleryImages = [
  { src: '/images/hero.png', alt: 'CNC Factory Floor' },
  { src: '/images/cnc-turning.png', alt: 'CNC Turning in Action' },
  { src: '/images/vmc-milling.png', alt: 'VMC Milling Machine' },
  { src: '/images/fabrication.png', alt: 'Metal Fabrication' },
  { src: '/images/gallery-sparks.png', alt: 'Steel Grinding' },
  { src: '/images/gallery-parts.png', alt: 'Precision Components' },
];

const services = [
  {
    title: 'Fabrication',
    desc: 'Metal fabrication involves creating metal structures through cutting, bending, and assembling materials.',
    icon: <FaIndustry size={40} />,
  },
  {
    title: 'CNC Turning Components',
    desc: 'CNC turning uses computer numerical control to produce cylindrical components with high precision.',
    icon: <FaCogs size={40} />,
  },
  {
    title: 'VMC Milling Components',
    desc: 'VMC milling precisely cuts and shapes materials into complex components for intricate designs.',
    icon: <FaTools size={40} />,
  },
  {
    title: 'Milling Machines',
    desc: 'We offer vertical, horizontal, and universal milling machines designed for precision and accuracy.',
    icon: <FaWrench size={40} />,
  },
  {
    title: 'CNC Soft Jaws',
    desc: 'Custom-engineered work holding solutions to securely grip delicate or irregularly shaped components.',
    icon: <FaCube size={40} />,
  },
  {
    title: 'Wire Cutting',
    desc: 'We offer hydraulic, mechanical, and guillotine shears built to cut through a range of materials with ease.',
    icon: <FaCut size={40} />,
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <>
      <div className="animated-bg"></div>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div className={styles.heroBackground} style={{ y: yParallax, opacity: opacityFade }}></motion.div>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.h1 
              className={styles.heroTitle}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-gradient">Precision</span> <br/> Industry
            </motion.h1>
            <motion.p 
              className={styles.heroDesc}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Revolutionize your operations with our cutting-edge technology
            </motion.p>
            <motion.div 
              className={styles.buttonGroup}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#services" className="btn-primary">
                Explore Our Services
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, rotateY: 30, x: -50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.03 }}
          >
            <img 
              src="/images/about.png" 
              alt="Precision Industry Facility" 
              className={styles.aboutImage} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>About <span className="text-gradient">Precision Industry</span></h2>
            <h4 className="text-accent" style={{ marginBottom: '1rem' }}>Our Expertise</h4>
            <p>
              Since 1999, Precision Industries has proudly set the standard in high-quality metal materials. With over two decades of expertise, we are dedicated to delivering exceptional products and personalized service, forging trusted partnerships nationwide.
            </p>
            <p>
              Our commitment to excellence drives us forward, empowering industries and shaping projects of all scales with precision and reliability. Join us on this journey as we continue to push the boundaries of quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Machinery Gallery */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <motion.h2 
            className="text-gradient" style={{ textAlign: 'center' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Power of Precision Industry&apos;s Machinery
          </motion.h2>
          <div className={styles.galleryWrapper}>
            <button className={styles.galleryBtn} onClick={prevSlide} aria-label="Previous image">
              <FaChevronLeft size={20} />
            </button>
            <div className={styles.galleryViewport}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].alt}
                  className={styles.galleryImage}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
            <button className={styles.galleryBtn} onClick={nextSlide} aria-label="Next image">
              <FaChevronRight size={20} />
            </button>
          </div>
          <div className={styles.galleryDots}>
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentSlide ? styles.dotActive : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Heavy-Duty Equipment CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Heavy-Duty <span className="text-gradient">Equipment Manufacturer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '700px', margin: '0 auto 2rem' }}
          >
            We offer a wide range of metal materials, including steel, aluminium, copper, and brass. Our products are carefully sourced from top manufacturers and are available in a variety of sizes and shapes to meet your specific needs.
          </motion.p>
          <Link href="/fabrication" className="btn-primary">
            Find Out More
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.6 }}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring", bounce: 0.6 }}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial Equipment Sales — 6 Service Cards */}
      <section id="services" className={`section ${styles.servicesSection}`}>
        <div className="container">
          <motion.h2 
            className="text-gradient" style={{ textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Industrial Equipment Sales
          </motion.h2>
          <motion.p style={{ textAlign: 'center', marginBottom: '2rem' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Explore our full range of precision manufacturing services.
          </motion.p>
          
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className={`glass-panel ${styles.serviceCard}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -15, scale: 1.03 }}
              >
                <motion.div 
                  className={styles.serviceIcon}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 + idx * 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href="/fabrication" className="text-accent" style={{ fontWeight: 700, marginTop: '0.5rem', display: 'inline-block' }}>
                  Learn More &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
