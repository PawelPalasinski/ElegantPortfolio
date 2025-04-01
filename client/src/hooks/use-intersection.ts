import { useEffect, useRef, useState, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({
  threshold = 0,
  rootMargin = "0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);
        
        if (isIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}

// useIntersectionObserver używający React.RefObject 
export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: UseInViewOptions = {}
) {
  const [inView, setInView] = useState(false);
  const { threshold = 0, rootMargin = "0px", triggerOnce = true } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);
        
        if (isIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return inView;
}