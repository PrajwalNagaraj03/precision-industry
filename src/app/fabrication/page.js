"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './page.module.css';

const services = [
  {
    id: 'fabrication',
    title: 'Fabrication',
    desc: 'Metal fabrication involves creating metal structures through cutting, bending, and assembling materials. At Precision Industry, we are dedicated to providing high-quality industrial equipment solutions to businesses of all sizes.',
    features: ['Structural steel work', 'Custom bending & forming', 'Expert welding', 'Durable protective finishes'],
    image: '/images/fabrication.png'
  },
  {
    id: 'cnc-turning',
    title: 'CNC Turning Components',
    desc: 'CNC turning is a machining process that uses computer numerical control (CNC) to produce cylindrical components with high precision. A rotating workpiece is shaped by cutting tools that remove material to create desired dimensions and finishes.',
    features: ['High precision & accuracy', 'Fast turnaround times', 'Complex geometries', 'Cost-effective for volume'],
    image: '/images/cnc-turning.png'
  },
  {
    id: 'vmc-milling',
    title: 'VMC Milling Components',
    desc: 'VMC milling, or vertical machining centre milling, utilizes computer numerical control (CNC) to precisely cut and shape materials into complex components. A vertically oriented spindle rotates cutting tools to remove material from a stationary workpiece, allowing for intricate designs and features.',
    features: ['Versatile machining capabilities', 'High surface finish quality', 'Rigid setup for hard materials', 'Suitable for custom parts'],
    image: '/images/vmc-milling.png'
  },
  {
    id: 'milling-machines',
    title: 'Milling Machines',
    desc: 'Our milling machines are designed for precision and accuracy. We offer vertical milling machines, horizontal milling machines, and universal milling machines to meet all your milling needs.',
    features: ['Robust construction', 'Easy maintenance', 'Advanced control systems', 'High efficiency output'],
    image: '/images/milling-machines.png'
  },
  {
    id: 'cnc-soft-jaws',
    title: 'CNC Soft Jaws',
    desc: 'CNC soft jaws are custom-engineered work holding solutions used in CNC machining to securely grip delicate or irregularly shaped components. Made from materials like aluminium or plastic, these jaws conform to the workpiece\'s contours, minimising deformation and ensuring precision during machining.',
    features: ['Custom fits for unique parts', 'Prevents part deformation', 'Quick setup times', 'Re-machinable for multiple uses'],
    image: '/images/cnc-soft-jaws.png'
  },
  {
    id: 'wire-cutting',
    title: 'Wire Cutting',
    desc: 'We offer a variety of shearing machines, including hydraulic shears, mechanical shears, and guillotine shears. Our shearing machines are built to cut through a range of materials with ease.',
    features: ['Clean and precise cuts', 'No thermal distortion', 'Capable of complex shapes', 'High repeatability'],
    image: '/images/wire-cutting.png'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.5 } }
};

export default function FabricationPage() {
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
            Fabrication
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            At Precision Industry, we are dedicated to providing high-quality industrial equipment solutions to businesses of all sizes. With our extensive range of products and services, we can help streamline your operations and increase your efficiency.
          </motion.p>
        </div>
      </section>

      <section className={styles.servicesContainer}>
        <div className="container">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <motion.div 
                className={styles.imageWrapper}
                whileHover={{ scale: 1.03 }}
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
                  transition={{ delay: 0.5 }}
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
