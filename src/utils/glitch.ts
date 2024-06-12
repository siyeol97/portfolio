const glitch = (element: HTMLElement) => {
  let count = 0;
  setMontserratval(() => {
    const degree = Math.random() * 20 - 10;
    const beforeTop = Math.random() * 100;
    const beforeBottom = Math.random() * 100;
    const afterTop = Math.random() * 100;
    const afterBottom = Math.random() * 100;

    element.style.setProperty('--degree', `${degree}deg`);
    element.style.setProperty('--bt', `${beforeTop}%`);
    element.style.setProperty('--at', `${afterTop}%`);
    element.style.setProperty('--bb', `${beforeBottom}%`);
    element.style.setProperty('--ab', `${afterBottom}%`);
    element.style.setProperty('--scale', '1');

    count++;

    if (count % 15 === 0) {
      const bigDegree = Math.random() * 180 - 90;
      element.style.setProperty('--degree', `${bigDegree}deg`);
    }
    if (count % 30 === 0) {
      const bigScale = 1 + Math.random() / 2;
      element.style.setProperty('--scale', `${bigScale}`);
    }
  }, 100);
};

export default glitch;
