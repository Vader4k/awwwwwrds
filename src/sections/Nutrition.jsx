import React, { useEffect, useState } from "react";
import { nutrientLists } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Nutrition = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [list, setList] = useState(nutrientLists);

  useEffect(() => {
    if (isMobile) {
      setList(nutrientLists.slice(0, 3));
    } else {
      setList(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const title = SplitText.create(".nutrition-title", {
      type: "chars",
    });

    const paragraph = SplitText.create(".nutrition-section .font-paragraph", {
      type: "words, lines",
      linesClass: "paragraph-line", //this sets a style for the affected texts, eg giving it a look of coming from below without showing the original y position (overflow hidden prevents it)
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });

    contentTl
      .from(title.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraph.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const clipTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    clipTl.to(".nutrition-text-scroll", {
      delay: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt="slider"
        className="w-full object-cover"
      />

      <img
        src="/images/big-img.png"
        alt="nutritional-image"
        className="big-img"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown">
                <h2 className="text-milk-yellow pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                  Body Good
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box ">
          <div className="list-wrapper">
            {list.map((item, i) => (
              <div key={i} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{item.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {item.amount}
                  </p>
                </div>

                {i !== list.length - 1 && <div className="spacer-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
