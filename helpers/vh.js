const vh = async () => {
    let realHeight = await window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${realHeight}px`)
};

const vhOnResize = async () => {
    window.addEventListener('resize', () => {
    let realHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${realHeight}px`);
  })
};

export {vh, vhOnResize};