import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaCogs } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <FaCogs size={30} className={styles.logoAccent} />
            <span className={styles.logoText}>
              Precision <span className={styles.logoAccent}>Industry</span>
            </span>
          </div>
          <p className={styles.desc}>
            Since 1999, we have set the standard in high-quality metal materials and fabrication. Revolutionizing operations with cutting-edge technology.
          </p>
        </div>
        
        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.col}>
          <h4>Contact Us</h4>
          <ul className={styles.contactInfo}>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              <span>
                No.99/818, Sy.No.114, 6th Cross, Kachanayakanahalli,<br/>
                Near SBI Bank, Bommasandara Industrial Area,<br/>
                Hennagara Post, Bangalore - 560099
              </span>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:info@precisionindustry.in">info@precisionindustry.in</a>
            </li>
            <li>
              <FaPhoneAlt className={styles.icon} />
              <span>
                <a href="tel:+919611880003">+91 9611880003</a><br/>
                <a href="tel:+919481488309">+91 9481488309</a> (Office)
              </span>
            </li>
            <li>
              <FaWhatsapp className={styles.icon} />
              <a href="https://wa.me/919611880003" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>Copyright &copy; {new Date().getFullYear()} Precision Industry - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
