import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../../Public/Images/logo.webp";
import CityScape from "../../../Public/Images/bottom_san_fransisco_skyline.webp";



export default function Footer() {
  const resources = [
    "Blogs",
    "Success Stories",
    "Case Studies",
    "Whitepapers",
    "FAQs",
    "Hiring Guides",
    "Support",
  ];
  const getStarted = [
    "Pricing",
    "Hiring Solutions",
    "Guided Startups",
    "Free Trial",
    "Contact Support",
    "Request Demo",
    "Trust",
  ];
  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "CCPA Compliance",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt="Company Logo"
              width={150}
              height={150}
            />
          </div>
          <h2 className={styles.companyName}>Everything Talent</h2>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h3>RESOURCES</h3>
            <ul>
              {resources.map((item, index) => (
                <li key={index}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3>GET STARTED</h3>
            <ul>
              {getStarted.map((item, index) => (
                <li key={index}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3>LEGAL</h3>
            <ul>
              {legal.map((item, index) => (
                <li key={index}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.cityscape}>

        <Image
          src={CityScape}
          alt="Cityscape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.bottomBar}>
        <p>© 2024 Everything Talent Labs, LLC. All Rights Reserved.</p>
        <div className={styles.socialIcons}>
          <Link href="#">
            <span className={styles.icon}>𝕏</span>
          </Link>
          <Link href="#">
            <span className={styles.icon}>🇮🇳</span>
          </Link>
          <Link href="#">
            <span className={styles.icon}>▶️</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
