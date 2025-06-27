"use client";

import { openingHours, socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", { y: "-50", duration: 1, ease: "power1.inOut" })
      .from("#f-left-leaf", { y: "50", duration: 1, ease: "power1.inOut" }, "<")
      .from("#f-drinks", { y: "50", duration: 1, ease: "power1.inOut" }, "<");
  });

  return (
    <footer id="contact">
      <Image
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        width={308}
        height={319}
      />
      <Image
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
        width={356}
        height={393}
      />
      <Image
        src="/images/footer-drinks.png"
        alt="footer-drinks"
        id="f-drinks"
        className=""
        width={445}
        height={467}
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd, #404, Los Angeles, CA 90510</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>(555) 987-2579</p>
          <p>hello@velvetpour.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map(({ icon, name, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Image src={icon} alt={name} width={30} height={30} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
