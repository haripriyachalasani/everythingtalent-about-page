import React from 'react';
import Image from 'next/image';
import styles from './ourexpertteam.module.css';
import IN1 from "../../../Public/Images/in1.webp"
import IN2 from "../../../Public/Images/in2.webp"
import INF1 from "../../../Public/Images/inf1.webp"
import INF2 from "../../../Public/Images/inf2.webp"
import INF4 from "../../../Public/Images/inf4.webp"
import AM1 from "../../../Public/Images/am1.webp"
import AM2 from "../../../Public/Images/am2.webp"
import AM3 from "../../../Public/Images/am3.webp"
import AMF1 from "../../../Public/Images/amf1.webp"
import AMF2 from "../../../Public/Images/amf2.webp"


export default function OurExpertsTeam() {
  const teamMembers = [
    { id: 1, image: {IN1} },
    { id: 2, image: {AM1} },
    { id: 3, image: {AM2} },
    { id: 4, image: {AM3} },
    { id: 5, image: {AMF1} },
    { id: 6, image: {AMF2} },
    { id: 7, image: {IN1} },
    { id: 8, image: {IN2} },
    { id: 9, image: {INF2} },
    { id: 10, image: {INF2} },
    { id: 11, image: {INF4} },
    { id: 12, image: {AM1} },
    { id: 13, image: {AMF1} },
    { id: 14, image: {AM3} },
    { id: 15, image: {INF1} },
    { id: 16, image: {IN1} },

  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Experts Team</h1>
      <p className={styles.description}>
        At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
      </p>

      <div className={styles.teamCircle}>
        {teamMembers.map((member) => (
          <div key={member.id} className={`${styles.teamMember} ${styles[`member${member.id}`]}`}>
            <Image
              src={member.image}
              alt={`Team member ${member.id}`}
              width={60}
              height={60}
              className={styles.memberImage}
            />
          </div>
        ))}
      </div>

      <div className={styles.cultureSection}>
        <h2 className={styles.cultureTitle}>Our Culture</h2>
        <p className={styles.cultureText}>
          We foster a collaborative and inclusive environment where innovation thrives, professional growth is supported, and every team member is valued.
        </p>
        <p className={styles.cultureText}>
          Everything Talent is built on the principles of collaboration, respect, and continuous growth. We are a team of dedicated professionals passionate about improving the hiring experience for both employers and candidates. Our culture fosters creativity, encourages learning, and supports each individual's development.
        </p>
        <p className={styles.cultureText}>
          We are driven by a shared commitment to making a positive impact on the world of recruitment. As we grow, we remain focused on delivering solutions that are not only effective but also aligned with our core values. We invite you to join us on this journey and experience the difference our platform can make in your hiring process.
        </p>
        <button className={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
}
