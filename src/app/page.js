"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCogs, FaTools, FaIndustry } from 'react-icons/fa';
import styles from './page.module.css';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
              Revolutionize your operations with cutting-edge technology. Experience next-level manufacturing and fabrication.
            </motion.p>
            <motion.div 
              className={styles.buttonGroup}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
            >
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.6, duration: 0.8 }}
            >
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", bounce: 0.6, duration: 0.8 }}
            >
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </motion.div>
          </div>
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
            whileHover={{ scale: 1.05, rotate: 2 }}
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
            <h2 className="text-gradient">Our Expertise</h2>
            <p>
              Since 1999, Precision Industries has proudly set the standard in high-quality metal materials. With over two decades of expertise, we are dedicated to delivering exceptional products and personalized service, forging trusted partnerships nationwide.
            </p>
            <p>
              Our commitment to excellence drives us forward, empowering industries and shaping projects of all scales with precision and reliability. Join us on this journey as we continue to push the boundaries of quality and innovation.
            </p>
            <Link href="/contact" className="btn-secondary" style={{ marginTop: '1.5rem' }}>
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <motion.h2 
            className="text-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Core Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem' }}
          >
            We offer a wide range of metal materials, including steel, aluminium, copper, and brass.
          </motion.p>
          
          <div className={styles.servicesGrid}>
            {[
              {
                title: 'CNC Turning',
                desc: 'Produce cylindrical components with high precision using our computer numerical control machines.',
                icon: <FaCogs size={50} />
              },
              {
                title: 'VMC Milling',
                desc: 'Precise cutting and shaping of materials into complex components for intricate designs.',
                icon: <FaTools size={50} />
              },
              {
                title: 'Metal Fabrication',
                desc: 'Creating metal structures through cutting, bending, and assembling materials with utmost quality.',
                icon: <FaIndustry size={50} />
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                className={`glass-panel ${styles.serviceCard}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, type: "spring", bounce: 0.5 }}
                whileHover={{ y: -20, scale: 1.05 }}
              >
                <motion.div 
                  className={styles.serviceIcon}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + idx }}
                >
                  {service.icon}
                </motion.div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href="/services" className="text-accent" style={{ fontWeight: 700, marginTop: '1rem', display: 'inline-block' }}>
                  Read More &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
