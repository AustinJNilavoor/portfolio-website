import { useEffect, useState } from "react";

/* Deletes the first role, then types/deletes through the list forever. */
export default function useTypewriter(roles) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const current = roles[roleIndex];
      let delay;

      if (deleting) {
        charIndex -= 1;
        delay = 35;
      } else {
        charIndex += 1;
        delay = 80;
      }
      setText(current.substring(0, charIndex));

      if (!deleting && charIndex === current.length) {
        delay = 2200;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2000);
    return () => clearTimeout(timer);
  }, [roles]);

  return text;
}
