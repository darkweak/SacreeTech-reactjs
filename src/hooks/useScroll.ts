import { useEffect, useState } from 'react';

export function useScroll() {
  const [ isTop, setIsTop ] = useState(document.body.getBoundingClientRect().top < 20);

  const listener = () => {
    setIsTop(-document.body.getBoundingClientRect().top < 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {isTop};
}
