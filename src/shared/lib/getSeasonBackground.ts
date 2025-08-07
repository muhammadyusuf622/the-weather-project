

import backgroundWinter from "../assets/images/background1.svg";
import backgroundSummer from "../assets/images/pexels-quang-nguyen-vinh-222549-10615224.jpg";
import backgroundFall from "../assets/images/pexels-pixabay-33109.jpg";
import backgroundSpring from "../assets/images/pexels-david-bartus-43782-1166209.jpg";

export const getSeasonBackground = () => {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) {
    return backgroundSpring;
  } else if (month >= 5 && month <= 7) {
    return backgroundSummer;
  } else if (month >= 8 && month <= 10) {
    return backgroundFall;
  } else {
    return backgroundWinter;
  }
};
