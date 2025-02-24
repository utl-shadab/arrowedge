import styles from "./Cursor.module.scss";
import { MutableRefObject, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { IDesktop, isSmallScreen } from "pages";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50",
};

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const follower: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const onHover = useCallback(() => {
    if (cursor.current && follower.current) {
      gsap.to(cursor.current, { scale: 0.5, duration: 0.3 });
      gsap.to(follower.current, { scale: 3, duration: 0.3 });
    }
  }, []);

  const onUnhover = useCallback(() => {
    if (cursor.current && follower.current) {
      gsap.to(cursor.current, { scale: 1, duration: 0.3 });
      gsap.to(follower.current, { scale: 1, duration: 0.3 });
    }
  }, []);

  const moveCircle = useCallback((e: MouseEvent) => {
    if (cursor.current && follower.current) {
      gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(follower.current, { x: e.clientX, y: e.clientY, duration: 0.3 });
    }
  }, []);

  const initCursorAnimation = useCallback(() => {
    if (cursor.current && follower.current) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      document.addEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onUnhover);
      });
    }
  }, [moveCircle, onHover, onUnhover]);

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
    
    return () => {
      document.removeEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, [isDesktop, initCursorAnimation, moveCircle, onHover, onUnhover]);

  return (
    <>
      <div ref={cursor} className={`${styles.cursor} ${CURSOR_STYLES.CURSOR}`}></div>
      <div ref={follower} className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}></div>
    </>
  );
};

export default Cursor;
