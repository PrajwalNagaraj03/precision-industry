"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './page.module.css';

const services = [
  {
    id: 'cnc-turning',
    title: 'CNC Turning',
    desc: 'Produce cylindrical components with high precision using our computer numerical control machines. We guarantee fast turnarounds and exceptional quality.',
    features: ['High precision & accuracy', 'Fast turnaround times', 'Complex geometries', 'Cost-effective'],
    image: '/images/cnc-turning.png'
  },
  {
    id: 'vmc-milling',
    title: 'VMC Milling',
    desc: 'VMC milling utilizes computer numerical control to precisely cut and shape materials into complex components for intricate designs.',
    features: ['Versatile machining', 'High surface finish', 'Rigid setup', 'Custom parts'],
    image: '/images/vmc-milling.png'
  },
  {
    id: 'metal-fabrication',
    title: 'Metal Fabrication',
    desc: 'Creating metal structures through cutting, bending, and assembling materials. Our fabrication processes are built to handle projects of any scale.',
    features: ['Structural integrity', 'Custom bending', 'Expert welding', 'Durable finishes'],
    image: '/images/fabrication.png'
  }
];

// Stagger variants for the feature list
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.5 } }
};

export default function ServicesPage() {
  return (
    <>
      <div className="animated-bg"></div>

      <section className={styles.header}>
        <div className="container">
          <motion.h1 
            className={`text-gradient ${styles.title}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          >
            Machinery & Services
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Explore our cutting-edge technology designed to deliver unparalleled precision.
          </motion.p>
        </div>
      </section>

      <section className={styles.servicesContainer}>
        <div className="container">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <motion.div 
                className={styles.imageWrapper}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <img src={service.image} alt={service.title} className={styles.serviceImage} />
              </motion.div>
              <div className={styles.serviceInfo}>
                <motion.h2
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {service.desc}
                </motion.p>
                <motion.ul 
                  className={styles.featureList}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li key={idx} variants={itemVariants}>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/contact" className="btn-secondary">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
