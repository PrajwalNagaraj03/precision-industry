"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <>
      <section className={styles.contactHeader}>
        <div className="container">
          <motion.h1 
            className={`text-gradient ${styles.title}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We love our customers, so feel free to visit during normal business hours or drop us a message anytime.
          </motion.p>
        </div>
      </section>

      <section className="container">
        <div className={styles.contactGrid}>
          <motion.div 
            className={styles.contactInfoCard}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}><FaMapMarkerAlt size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Our Location</h3>
                <p>No.99/818, Sy.No.114, 6th Cross, Kachanayakanahalli,<br />Near SBI Bank, Bommasandara Industrial Area,<br />Hennagara Post, Bangalore - 560099</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}><FaPhoneAlt size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Phone</h3>
                <p>Mobile: <a href="tel:+919611880003">+91 9611880003</a></p>
                <p>Office: <a href="tel:+919481488309">+91 9481488309</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}><FaEnvelope size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p><a href="mailto:info@precisionindustry.in">info@precisionindustry.in</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}><FaClock size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Business Hours</h3>
                <p>Mon - Sat: 09:00 am – 05:00 pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}><FaWhatsapp size={24} /></div>
              <div className={styles.infoContent}>
                <h3>WhatsApp</h3>
                <p><a href="https://wa.me/919611880003" target="_blank" rel="noopener noreferrer" className="text-accent">Message us directly on WhatsApp &rarr;</a></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={`glass-panel ${styles.contactFormCard}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Send a Message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" className={styles.input} placeholder="+91 xxxx xxxxx" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" className={styles.textarea} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
