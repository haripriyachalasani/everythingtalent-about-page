import React from "react";
import Image from "next/image";
import styles from "./ourStory.module.css";
import Story1 from "../../../Public/Images/story_1.webp"
import Story2 from "../../../Public/Images/story_2.webp"
import Story3 from "../../../Public/Images/story_3.webp"

export default function OurStory() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Story</h1>
        <p className={styles.subtitle}>
          We not only make the world’s most comfortable hammocks, but through
          training and sustainable job creation, we empower our weavers and
          their families to break the cycle of poverty and build a brighter
          future.
        </p>

        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2>The Journey to Transform Recruitment</h2>
            <p>
              Everything Talent was founded with a vision to transform the way
              organizations approach hiring. Frustrated by traditional,
              cumbersome methods of recruiting and recognizing the potential for
              bias in evaluating candidates, our founder set out to create a
              solution that simplifies the hiring journey while leveraging the
              latest advancements in technology.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img
              src={Story1}
              alt="Image representing journey"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.imageBlock}>
            <img
              src={Story2}
              alt="Team working together"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Combining Innovation with Efficiency</h2>
            <p>
              Our platform combines a free Applicant Tracking System (ATS) with
              AI-driven tech assessments. This allows you to evaluate candidates
              quickly and accurately, regardless of their background or the
              complexity of the role. We are committed to leveraging the latest
              technology to streamline the recruitment process and reduce bias.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2>Democratizing Recruitment Tools</h2>
            <p>
            We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img
              src={Story3}
              alt="Image representing journey"
              className={styles.image}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
