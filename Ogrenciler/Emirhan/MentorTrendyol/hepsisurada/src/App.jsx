import "./App.css";
import Navbar from "./components/Navbar";
import StarRating from "./components/Rating";

const products = [
  {
    productName: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 79.99,
    discount: 10,
    inStock: true,
    rating: 4.5,
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    seller: "TechZone",
    stockCode: "TZ-WH-001",
  },
  {
    productName: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 25.0,
    discount: 0,
    inStock: true,
    rating: 4.2,
    description:
      "Comfortable and eco-friendly t-shirt made from 100% organic cotton.",
    seller: "GreenWear",
    stockCode: "GW-TS-003",
  },
  {
    productName: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 15.99,
    discount: 5,
    inStock: false,
    rating: 4.8,
    description:
      "Keep your drinks hot or cold for hours with this durable water bottle.",
    seller: "HomeEssentials",
    stockCode: "HE-WB-002",
  },
  {
    productName: "Gaming Mouse with RGB Lighting",
    category: "Electronics",
    price: 49.99,
    discount: 15,
    inStock: true,
    rating: 4.6,
    description:
      "Precision gaming mouse with customizable RGB lighting and programmable buttons.",
    seller: "GamerPro",
    stockCode: "GP-MOUSE-009",
  },
  {
    productName: "Yoga Mat with Carrying Strap",
    category: "Sports & Outdoors",
    price: 29.99,
    discount: 0,
    inStock: true,
    rating: 4.3,
    description:
      "Non-slip yoga mat with extra cushioning and convenient carrying strap.",
    seller: "FitLife",
    stockCode: "FL-YM-007",
  },
  {
    productName: "Smart LED Light Bulb",
    category: "Home & Kitchen",
    price: 19.99,
    discount: 10,
    inStock: true,
    rating: 3.1,
    description:
      "Control your lighting with your smartphone or voice assistant.",
    seller: "BrightHome",
    stockCode: "BH-LED-004",
  },
  {
    productName: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    discount: 20,
    inStock: true,
    rating: 4.7,
    description:
      "Premium quality leather wallet with multiple card slots and a coin pocket.",
    seller: "StyleHub",
    stockCode: "SH-WL-010",
  },
  {
    productName: "Electric Kettle",
    category: "Home Appliances",
    price: 49.99,
    discount: 5,
    inStock: false,
    rating: 1.4,
    description:
      "Fast boiling electric kettle with auto shut-off and stainless steel design.",
    seller: "KitchenPro",
    stockCode: "KP-KET-005",
  },
  {
    productName: "Men's Running Shoes",
    category: "Footwear",
    price: 89.99,
    discount: 10,
    inStock: true,
    rating: 4.3,
    description:
      "Lightweight and breathable running shoes with superior cushioning.",
    seller: "ActiveFeet",
    stockCode: "AF-RS-006",
  },
  {
    productName: "Portable Power Bank",
    category: "Electronics",
    price: 29.99,
    discount: 0,
    inStock: true,
    rating: 3.5,
    description:
      "Charge your devices on the go with this high-capacity power bank.",
    seller: "ChargeUp",
    stockCode: "CU-PB-008",
  },
  {
    productName: "Smart Watch",
    category: "Elektronik",
    price: 799,
    discount: 15,
    inStock: true,
    rating: 4.4,
    description: "Gelişmiş özelliklere sahip akıllı saat.",
    seller: "TechStore",
    stockCode: "TS-001",
  },
  {
    productName: "Ergonomik Ofis Sandalyesi",
    category: "Mobilya",
    price: 1250,
    discount: 20,
    inStock: true,
    rating: 4.7,
    description: "Uzun çalışma saatlerinde rahatlık sağlayan ofis sandalyesi.",
    seller: "FurniCo",
    stockCode: "FC-102",
  },
  {
    productName: "Yoga Matı",
    category: "Spor & Outdoor",
    price: 250,
    discount: 10,
    inStock: false,
    rating: 2.2,
    description: "Kaymaz yüzeye sahip, rahat yoga matı.",
    seller: "FitLife",
    stockCode: "FL-050",
  },
  {
    productName: "Bluetooth Kulaklık",
    category: "Elektronik",
    price: 499,
    discount: 5,
    inStock: true,
    rating: 4.1,
    description: "Kablosuz kullanım için ideal bluetooth kulaklık.",
    seller: "SoundHub",
    stockCode: "SH-202",
  },
  {
    productName: "Çocuk T-shirt",
    category: "Giyim",
    price: 89,
    discount: 0,
    inStock: true,
    rating: 4.3,
    description: "Yaz ayları için hafif ve rahat t-shirt.",
    seller: "KidsWear",
    stockCode: "KW-301",
  },
  {
    productName: "Teflon Tava",
    category: "Mutfak Eşyaları",
    price: 149,
    discount: 25,
    inStock: true,
    rating: 4.5,
    description: "Yapışmaz yüzeye sahip kaliteli teflon tava.",
    seller: "CookPro",
    stockCode: "CP-110",
  },
  {
    productName: "Şarjlı El Süpürgesi",
    category: "Ev Aletleri",
    price: 599,
    discount: 10,
    inStock: false,
    rating: 4.6,
    description: "Küçük ve pratik, taşınabilir el süpürgesi.",
    seller: "HomeCare",
    stockCode: "HC-750",
  },
  {
    productName: "Bebek Arabası",
    category: "Bebek Ürünleri",
    price: 1599,
    discount: 0,
    inStock: true,
    rating: 4.8,
    description: "Konforlu ve güvenli bebek arabası.",
    seller: "BabyStore",
    stockCode: "BS-204",
  },
  {
    productName: "Kitap Okuma Lambası",
    category: "Aydınlatma",
    price: 120,
    discount: 5,
    inStock: true,
    rating: 4.0,
    description: "Gece kitap okumak için ideal LED lamba.",
    seller: "LightHouse",
    stockCode: "LH-008",
  },
  {
    productName: "Deri Cüzdan",
    category: "Aksesuar",
    price: 299,
    discount: 15,
    inStock: false,
    rating: 4.3,
    description: "Şık ve kullanışlı gerçek deri cüzdan.",
    seller: "StyleHub",
    stockCode: "SH-330",
  },
  {
    productName: "Elektrikli Scooter",
    category: "Spor & Outdoor",
    price: 3499,
    discount: 10,
    inStock: true,
    rating: 4.7,
    description: "Şehir içi ulaşımda pratik ve çevre dostu elektrikli scooter.",
    seller: "UrbanRide",
    stockCode: "UR-101",
  },
  {
    productName: "Grafik Tasarım Tableti",
    category: "Elektronik",
    price: 1899,
    discount: 5,
    inStock: false,
    rating: 4.6,
    description: "Profesyonel çizimler için hassas dokunmatik ekranlı tablet.",
    seller: "CreativeTools",
    stockCode: "CT-200",
  },
  {
    productName: "Organik Bitki Çayı",
    category: "Gıda",
    price: 69,
    discount: 15,
    inStock: true,
    rating: 4.4,
    description: "Doğal yollarla üretilmiş rahatlatıcı bitki çayı.",
    seller: "HerbalWorld",
    stockCode: "HW-055",
  },
  {
    productName: "Çok Amaçlı Tornavida Seti",
    category: "Hırdavat",
    price: 199,
    discount: 20,
    inStock: true,
    rating: 4.8,
    description: "Ev ve iş yerleri için ideal çok amaçlı tornavida seti.",
    seller: "ToolMaster",
    stockCode: "TM-876",
  },
  {
    productName: "Masaj Tabancası",
    category: "Kişisel Bakım",
    price: 799,
    discount: 10,
    inStock: false,
    rating: 4.5,
    description:
      "Kas ağrılarını gidermeye yardımcı profesyonel masaj tabancası.",
    seller: "RelaxPro",
    stockCode: "RP-300",
  },
  {
    productName: "Kedi Maması 5kg",
    category: "Evcil Hayvan Ürünleri",
    price: 350,
    discount: 0,
    inStock: true,
    rating: 4.9,
    description: "Yetişkin kediler için dengeli besin değerlerine sahip mama.",
    seller: "PetLife",
    stockCode: "PL-601",
  },
  {
    productName: "Dekoratif Yastık",
    category: "Ev Dekorasyonu",
    price: 120,
    discount: 25,
    inStock: true,
    rating: 4.2,
    description: "Evinize renk katacak yumuşak ve şık dekoratif yastık.",
    seller: "HomeStyle",
    stockCode: "HS-112",
  },
  {
    productName: "Taşınabilir Şarj Cihazı",
    category: "Elektronik",
    price: 249,
    discount: 10,
    inStock: true,
    rating: 4.1,
    description: "Yüksek kapasiteli, hızlı şarj destekli powerbank.",
    seller: "ChargeUp",
    stockCode: "CU-500",
  },
  {
    productName: "Çocuk Puzzle Seti",
    category: "Oyuncak",
    price: 89,
    discount: 5,
    inStock: false,
    rating: 4.6,
    description: "Zihinsel gelişimi destekleyen eğlenceli puzzle seti.",
    seller: "FunToys",
    stockCode: "FT-220",
  },
  {
    productName: "Koşu Ayakkabısı",
    category: "Giyim",
    price: 649,
    discount: 15,
    inStock: true,
    rating: 4.7,
    description: "Rahat ve dayanıklı koşu ayakkabısı.",
    seller: "SportLife",
    stockCode: "SL-309",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="home-grid">
          <div>
            <div className="card border-0 py-3 px-4 rounded-0">
              <div>
                <h6>Sırala</h6>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sortOptions"
                    id="oldToNew"
                  />
                  <label className="form-check-label fs-6" htmlFor="oldToNew">
                    Eskiden Yeniye
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sortOptions"
                    id="newToOld"
                  />
                  <label className="form-check-label fs-6" htmlFor="newToOld">
                    Yeniden Eskiye
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sortOptions"
                    id="AZsort"
                  />
                  <label className="form-check-label fs-6" htmlFor="AZsort">
                    Alfabeye Göre (A-Z)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sortOptions"
                    id="ZAsort"
                  />
                  <label className="form-check-label fs-6" htmlFor="ZAsort">
                    Alfabeye Göre (Z-A)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-grid">
            {products.map((product, index) => (
              <div key={index} className="">
                <div className="card h-100">
                  <img
                    src="https://productimages.hepsiburada.net/s/235/222-222/110000217430874.jpg/format:webp"
                    className="card-img-top"
                    alt="Ürün Görseli"
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-6">{product.productName}</h5>
                    <div className="d-flex align-items-center gap-2">
                      <StarRating rating={product.rating} />
                      <span className="custom-font text-secondary">
                        {product.rating}
                      </span>
                    </div>
                    <div>
                      <p className="card-text fs-6 fw-semibold">
                        <span className="text-decoration-line-through text-secondary me-2">
                          ${product.price}
                        </span>
                        <span className="custom-font">%{product.discount}</span>
                      </p>
                    </div>
                    <p className="card-text fs-5 fw-semibold">
                      $
                      {product.price - product.price * (product.discount / 100)}
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    >
                      <span className="add-cart-text">Sepete Ekle</span>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
