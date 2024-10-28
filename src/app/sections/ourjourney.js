"use client"; 
import React from "react"; 
import Image from "next/image"; 
import styles from "./ourjourney.module.css"; 
import Journey1 from "../../../Public/Images/journey1.webp";
import Journey2 from "../../../Public/Images/journey2.webp";
import Journey3 from "../../../Public/Images/journey3.webp";
import Journey4 from "../../../Public/Images/journey4.webp";

export default function OurJourney() {
  const journeyEvents = [
    {
      date: "Aug 2021",
      title: "IDC Names Arctic Wolf a Leader",
      image: {Journey1},
      position: "left",
    },
    {
      date: "Feb 2022",
      title: "Arctic Wolf Incident Launch",
      image: {Journey2},
      position: "right",
    },
    {
      date: "Oct 2022",
      title: "Arctic Wolf Expands to ANZ",
      image: {Journey3},
      position: "left",
    },
    {
      date: "May 2023",
      title: "Arctic Wolf on CNBC Disruptor 50",
      image: {Journey4},
      position: "right",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Journey</h1>
      <p className={styles.description}>
        Since our founding in 2021, Arctic Wolf has risen to the rank of market
        leader in security operations, adding thousands of employees and
        customers, as well as a trophy case of awards along the way.
      </p>

      <div className={styles.timeline}>
        {journeyEvents.map((event, index) => (
          <div
            key={index}
            className={`${styles.event} ${event.position === "left" ? styles.left : styles.right}`}
          >
            <div className={styles.eventContent}>
              <p className={styles.date}>{event.date}</p>
              <div className={styles.imageContainer}>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
                  layout="responsive"
                  priority
                />
              </div>
              <p className={styles.eventTitle}>{event.title}</p>
            </div>
            <div className={styles.timelinePoint}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
