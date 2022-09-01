export function awaitAnimate(element) {
  return new Promise((resolve) => {
    const resetAnimation = () => {
      element.removeEventListener('transitionend', resetAnimation);
      element.removeEventListener('transitioncancel', resetAnimation);
      element.removeEventListener('animationend', resetAnimation);
      element.removeEventListener('animationcancel', resetAnimation);
      resolve();
    };

    element.addEventListener('transitionend', resetAnimation);
    element.addEventListener('transitioncancel', resetAnimation);
    element.addEventListener('animationend', resetAnimation);
    element.addEventListener('animationcancel', resetAnimation);
  });
}

export async function animate(element, animation) {
  if (element.dataset.animation) {
    return Promise.resolve();
  }

  element.dataset.animation = animation;

  return awaitAnimate(element).then(() => {
    delete element.dataset.animation;
  });
}
