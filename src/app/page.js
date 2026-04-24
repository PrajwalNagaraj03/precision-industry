"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCogs, FaTools, FaIndustry } from 'react-icons/fa';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              <span className="text-gradient">Precision</span> Industry
            </h1>
            <p className={styles.heroDesc}>
              Revolutionize your operations with our cutting-edge technology. Delivering exceptional products and personalized service since 1999.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              alt="Precision Industry Facility" 
              className={styles.aboutImage} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gradient">Our Expertise</h2>
            <p>
              Since 1999, Precision Industries has proudly set the standard in high-quality metal materials. With over two decades of expertise, we are dedicated to delivering exceptional products and personalized service, forging trusted partnerships nationwide.
            </p>
            <p>
              Our commitment to excellence drives us forward, empowering industries and shaping projects of all scales with precision and reliability. Join us on this journey as we continue to push the boundaries of quality and innovation.
            </p>
            <Link href="/about" className="btn-secondary" style={{ marginTop: '1rem' }}>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            We offer a wide range of metal materials, including steel, aluminium, copper, and brass.
          </motion.p>
          
          <div className={styles.servicesGrid}>
            {[
              {
                title: 'CNC Turning',
                desc: 'Produce cylindrical components with high precision using our computer numerical control machines.',
                icon: <FaCogs size={40} />
              },
              {
                title: 'VMC Milling',
                desc: 'Precise cutting and shaping of materials into complex components for intricate designs.',
                icon: <FaTools size={40} />
              },
              {
                title: 'Metal Fabrication',
                desc: 'Creating metal structures through cutting, bending, and assembling materials with utmost quality.',
                icon: <FaIndustry size={40} />
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                className={`glass-panel ${styles.serviceCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href="/services" className="text-accent" style={{ fontWeight: 600 }}>
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
