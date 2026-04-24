"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './page.module.css';

const services = [
  {
    id: 'cnc-turning',
    title: 'CNC Turning Components',
    desc: 'CNC turning is a machining process that uses computer numerical control (CNC) to produce cylindrical components with high precision. A rotating workpiece is shaped by cutting tools that remove material to create desired dimensions and finishes.',
    features: ['High precision & accuracy', 'Fast turnaround times', 'Complex geometries handled easily', 'Cost-effective for high volumes'],
    image: 'https://images.unsplash.com/photo-1612015949589-3ae8e6d2a84c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'vmc-milling',
    title: 'VMC Milling Components',
    desc: 'VMC milling, or vertical machining centre milling, utilizes computer numerical control (CNC) to precisely cut and shape materials into complex components. In this process, a vertically oriented spindle rotates cutting tools to remove material from a stationary workpiece, allowing for intricate designs and features.',
    features: ['Versatile machining capabilities', 'High surface finish quality', 'Rigid setup for hard materials', 'Suitable for custom parts'],
    image: 'https://images.unsplash.com/photo-1621616875355-6674a9eb6cd9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'milling-machines',
    title: 'Milling Machines',
    desc: 'Our milling machines are designed for precision and accuracy. We offer vertical milling machines, horizontal milling machines, and universal milling machines to meet all your milling needs.',
    features: ['Robust construction', 'Easy maintenance', 'Advanced control systems', 'High efficiency'],
    image: 'https://images.unsplash.com/photo-1590502598375-403487c6999a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'cnc-soft-jaws',
    title: 'CNC Soft Jaws',
    desc: 'CNC soft jaws are custom-engineered work holding solutions used in CNC machining to securely grip delicate or irregularly shaped components. Made from materials like aluminium or plastic, these jaws are designed to conform to the workpiece\'s contours, minimising deformation and ensuring precision during machining.',
    features: ['Custom fits for unique parts', 'Prevents part deformation', 'Quick setup times', 'Re-machinable for multiple uses'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'wire-cutting',
    title: 'Wire Cutting',
    desc: 'We offer a variety of shearing machines, including hydraulic shears, mechanical shears, and guillotine shears. Our shearing machines are built to cut through a range of materials with ease.',
    features: ['Clean and precise cuts', 'No thermal distortion', 'Capable of complex shapes', 'High repeatability'],
    image: 'https://images.unsplash.com/photo-1563821034-70494df0516d?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <motion.h1 
            className={`text-gradient ${styles.title}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Capabilities & Machinery
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We offer a wide range of metal materials and fabrication services, sourced from top manufacturers and executed with unparalleled precision.
          </motion.p>
        </div>
      </section>

      <section className={styles.servicesContainer}>
        <div className="container">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} className={styles.serviceImage} />
              </div>
              <div className={styles.serviceInfo}>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary">
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
