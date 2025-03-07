import Marquee from "react-fast-marquee";

const ScrollingText = () => {
  return (
    <Marquee 
      speed={100} 
      gradient={true} 
      gradientWidth={100} 
      className="bg-warning py-2 fw-bold fs-6"
    >
      📚 En Güzel Kitaplar Burada! 📖 Kaçırma! ✨ En Yeni ve Popüler Kitaplar Seni Bekliyor! 🚀
    </Marquee>
  );
};

export default ScrollingText;
