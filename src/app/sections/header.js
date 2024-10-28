"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Logo from "../../../Public/Images/logo.webp";
import About1 from "../../../Public/Images/about1.webp";
import About2 from "../../../Public/Images/about2.webp";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src={Logo}
            alt="Everything Talent Logo"
            width={40}
            height={40}
          />
          <span>Everything Talent</span>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.menuIcon}></span>
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/support">Support</Link>
          <button className={styles.loginButton}>Login →</button>
        </nav>
      </header>
      <main className={styles.main}>
        <section></section>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Everything Talent</span>{" "}
            simplifies hiring with a{" "}
            <span className={styles.highlight}>
              free ATS and AI-driven assessments.
            </span>
          </h1>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={About1}
            alt="Everything Talent simplifies hiring with a free ATS and AI-driven assessments."
            width={300}
            height={350}
            fetchPriority="high"
            decoding="async"
            className={`${styles.image} rotate-45 w-48 h-48 border-[3px] dark:border-[#3577f39a] lg:w-80 lg:h-80 object-cover`}
          />
          <Image
            src={About2}
            alt="Everything Talent simplifies hiring with a free ATS and AI-driven assessments."
            width={300}
            height={350}
            fetchPriority="high"
            decoding="async"
            className={`${styles.image} hidden md:block -mt-16 rotate-45 border dark:border-[#3577f39a] w-48 h-48 lg:w-80 lg:h-80 object-cover`}
          />
        </div>
      </main>
    </div>
  );
}
