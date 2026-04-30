"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCogs } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <FaCogs size={30} className={styles.logoAccent} />
          <span className={styles.logoText}>
            Precision <span className={styles.logoAccent}>Industry</span>
          </span>
        </Link>
        
        <nav className={styles.navLinks}>
          <Link 
            href="/" 
            className={`${styles.link} ${pathname === '/' ? styles.linkActive : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`${styles.link} ${pathname === '/services' ? styles.linkActive : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className={`${styles.link} ${pathname === '/contact' ? styles.linkActive : ''}`}
          >
            Contact
          </Link>
          <ThemeToggle />
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
