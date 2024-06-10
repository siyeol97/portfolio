import { useEffect, useRef } from 'react';

const useSectionScroll = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const canScroll = useRef<boolean>(true);
  const currentPage = useRef<number>(0);

  const scrollDown = () => {
    const pageHeight = wrapperRef.current?.children.item(0)?.clientHeight;

    if (wrapperRef.current && pageHeight) {
      wrapperRef.current.scrollTo({
        top: pageHeight * (currentPage.current + 1),
        left: 0,
        behavior: 'smooth',
      });

      canScroll.current = false;

      setTimeout(() => {
        canScroll.current = true;
      }, 500);

      if (wrapperRef.current.childElementCount - 1 > currentPage.current) {
        currentPage.current++;
      }
    }
  };

  const scrollUp = () => {
    const pageHeight = wrapperRef.current?.children.item(0)?.clientHeight;

    if (wrapperRef.current && pageHeight) {
      wrapperRef.current.scrollTo({
        top: pageHeight * (currentPage.current - 1),
        left: 0,
        behavior: 'smooth',
      });

      canScroll.current = false;

      setTimeout(() => {
        canScroll.current = true;
      }, 500);

      if (currentPage.current > 0) {
        currentPage.current--;
      }
    }
  };

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (!canScroll.current) {
      return;
    }

    const { deltaY } = e;

    if (deltaY > 0 && wrapperRef.current) {
      scrollDown();
    } else if (deltaY < 0 && wrapperRef.current) {
      scrollUp();
    }
  };

  useEffect(() => {
    wrapperRef.current?.addEventListener('wheel', wheelHandler);

    return () => wrapperRef.current?.removeEventListener('wheel', wheelHandler);
  }, []);

  return wrapperRef;
};

export default useSectionScroll;
