"use client"; 

import React, { useState } from "react"; 
import Image from "next/image"; 
import Link from "next/link"; 
import styles from "./ourvalue.module.css"; 
import Value1 from "../../../Public/values-1.jpeg"

export default function OurValues() {
    const values = [
        { title: 'Customer Success', icon: '👍', description: 'Your success is our success. We are devoted to providing exceptional support and resources to help you achieve your hiring goals.' },
        { title: 'Innovation', icon: '🚀', description: 'We are committed to continuously improving our technology to meet the evolving needs of our users and stay ahead of industry trends.' },
        { title: 'Transparency', icon: '👁️', description: "We value open and honest communication, both within our team and with our clients. We're dedicated to building trust through clarity and integrity."},
        { title: 'Simplicity', icon: '🔄', description: 'We believe that great technology should be intuitive and easy to use. Our solutions are designed to streamline your hiring process without unnecessary complexity.' },
        { title: 'Inclusivity', icon: '🤝', description: 'We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases and ensuring fairness, we empower every candidate to present their unique strengths and capabilities.' },
        { title: 'Security', icon: '🔒', description: 'We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard your information and ensure privacy, giving you peace of mind.' },
      ];
    
      return (
        <div className={styles.container}>
          <h1 className={styles.title}>Our Values</h1>
          <p className={styles.subtitle}>At Everything Talent, our core values drive everything we do</p>
          
          <div className={styles.valuesContainer}>
            {values.map((value, index) => (
              <div key={index} className={`${styles.valueItem} ${styles[`value${index + 1}`]}`}>
                <div className={styles.icon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
            
            <div className={styles.centerImage}>
              <Image
                src={Value1}
                alt="Futuristic Cityscape"
                width={400}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      );
  }
