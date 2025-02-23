const languageIcons = {
    JavaScript: <i className="fa-solid fa-circle" style={{ color: "rgb(186, 255, 59)" }}></i>,
    Python: <i className="fa-solid fa-circle" style={{ color: "rgb(0, 0, 0)" }}></i>,
    Java: <i className="fa-solid fa-circle" style={{ color: "rgb(255, 141, 59)" }}></i>,
    Php: <i className="fa-solid fa-circle" style={{ color: "rgb(59, 213, 255)" }}></i>,
    Rust: <i className="fa-solid fa-circle" style={{ color: "rgb(59, 255, 150)" }}></i>,
    Csharp: <i className="fa-solid fa-circle" style={{ color: "rgb(95, 59, 255)" }}></i>,
    TypeScript: <i className="fa-solid fa-circle" style={{ color: "rgb(59, 255, 118)" }}></i>,
    Go: <i className="fa-solid fa-circle" style={{ color: "rgb(255, 59, 88)" }}></i>,
    Swift: <i className="fa-solid fa-circle" style={{ color: "rgb(59, 255, 144)" }}></i>,
    Kotlin: <i className="fa-solid fa-circle" style={{ color: "rgb(173, 59, 255)" }}></i>,
    Dart: <i className="fa-solid fa-circle" style={{ color: "rgb(157, 59, 255)" }}></i>,
    Shell: <i className="fa-solid fa-circle" style={{ color: "rgb(255, 59, 59)" }}></i>,
    Ruby: <i className="fa-solid fa-circle" style={{ color: "rgb(255, 59, 59)" }}></i>,
    Vue: <i className="fa-solid fa-circle" style={{ color: "rgb(59, 255, 59)" }}></i>,
    HTML: <i className="fa-solid fa-circle" style={{ color: "rgb(59, 255, 59)" }}></i>,
    CSS: <i className="fa-solid fa-circle" style={{ color: "rgb(59, 173, 255)" }}></i>,
    "C++": <i className="fa-solid fa-circle" style={{ color: "rgb(59, 255, 59)" }}></i>,
    
  };
  
  const LanguageIcon = ({ language }) => {
    return languageIcons[language] || <span>😼</span>;
  };
  
  export default LanguageIcon;
  