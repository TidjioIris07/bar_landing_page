"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { sliderLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    // gsap.from("#m-left-leaf", {
    //   x: -100,
    //   y: 100,
    // });
    // gsap.from("#m-right-leaf", {
    //   x: 100,
    //   y: 100,
    // });
  }, [currentIndex]);

  const totalCocktails = sliderLists.length;

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset: number) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nexCocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <Image
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
        width={275}
        height={304}
      />
      <Image
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
        width={241}
        height={355}
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <Image
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
              width={38}
              height={38}
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nexCocktail.name}</span>
            <Image
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
              width={38}
              height={38}
            />
          </button>
        </div>

        <div className="cocktail">
          <Image
            src={currentCocktail.image}
            className="object-contain"
            alt={currentCocktail.name}
            width={538}
            height={575}
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
