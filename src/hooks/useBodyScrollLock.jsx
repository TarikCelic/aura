import { useEffect } from 'react';

export default function useBodyScrollLock(isLocked) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflowY;
    if (isLocked) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = originalStyle;
    };
  }, [isLocked]);
}
