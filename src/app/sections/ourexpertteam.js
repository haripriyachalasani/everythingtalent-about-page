import React from 'react';
import Image from 'next/image';
import styles from './ourexpertteam.module.css';
import IN1 from "../../../Public/Images/in1.webp"
import IN2 from "../../../Public/Images/in2.webp"

export default function OurExpertsTeam() {
  const teamMembers = [
    { id: 1, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 2, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 3, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 4, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 5, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 6, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 7, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 8, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 9, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 10, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 11, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 12, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 13, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 14, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 15, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},
    { id: 16, image: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75"},

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
