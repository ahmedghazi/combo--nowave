"use client";
import useDeviceDetect from "@/app/hooks/useDeviceDetect";
import React, { useEffect, useState, useRef } from "react";
import ReactLottie, { Options } from "react-lottie";

type Props = {
  file: string;
  playing?: boolean;
  loop?: boolean;
  reverseOnComplete?: boolean;
  externalDirection?: 1 | -1 | null; // 👈 new prop
};

const LottiePlayer = ({
  file,
  playing = true,
  reverseOnComplete = false,
  externalDirection = null,
  loop = false,
}: Props) => {
  const [animation, setAnimation] = useState<any>(null);

  const lottieRef = useRef<any>(null);
  const { isMobile } = useDeviceDetect();

  const defaultOptions: Options = {
    loop: loop, // required for ping-pong
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  /** Load animation JSON */
  useEffect(() => {
    const controller = new AbortController();

    fetch(file, { signal: controller.signal })
      .then((res) => res.json())
      .then((json) => json?.layers && setAnimation(json))
      .catch((error) => {
        // Ignore abort errors - they're expected when component unmounts
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [file]);

  /** 🔥 Apply external direction from parent */
  useEffect(() => {
    if (!externalDirection || !lottieRef.current) return;

    lottieRef.current.anim.setDirection(externalDirection);
    lottieRef.current.anim.play();
  }, [externalDirection]);

  return (
    // <div>
    <ReactLottie
      ref={lottieRef}
      options={defaultOptions}
      isPaused={!playing}
      eventListeners={[
        {
          eventName: "complete",
          callback: () => {
            if (!reverseOnComplete) return;
            console.log("complete 1");

            // skip ping-pong if parent is controlling direction
            if (externalDirection !== null) return;
            console.log("complete 2");

            // 🔁 toggle direction internally
            if (lottieRef.current?.anim) {
              const currentDirection = lottieRef.current.anim.playDirection;
              const next = (currentDirection * -1) as 1 | -1;

              requestAnimationFrame(() => {
                lottieRef.current?.anim.setDirection(next);
                lottieRef.current?.anim.play();
              });
            }
          },
        },
      ]}
    />
    // </div>
  );
};

export default LottiePlayer;
