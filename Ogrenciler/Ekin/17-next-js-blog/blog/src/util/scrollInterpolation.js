export default function scrollInterpolation(element) {
  element.style.backgroundPosition = "0% 0%";

  return setInterval((current = parseFloat(element.style.backgroundPosition
      .split(" ")
      [innerWidth < 1400 ? 0 : 1].replace("%", "")), percentage = (scrollY * 100) / (document.documentElement.scrollHeight - innerHeight)) => {
    element.style.backgroundPosition =
      innerWidth < 1400
        ? `${(current + (percentage - current) * 0.01).toFixed(2)}% 0`
        : `0 ${(current + (percentage - current) * 0.01).toFixed(2)}%`;
  }, 10);
}
