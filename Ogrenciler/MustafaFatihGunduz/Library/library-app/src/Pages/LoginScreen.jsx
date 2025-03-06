import {useRef,useState,useEffect} from "react";
import {useNavigate} from "react-router";
import {signWithEmailAndPassword, createWithEmailAndPassword} from "../controller/AuthController";

const LoginScreen = () => {
	const containerRef = useRef(null);
	const registerBtnRef = useRef(null);
	const loginBtnRef = useRef(null);
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [publishing, setPublishing] = useState("");

	useEffect(() => {
		const container = containerRef.current;
		const registerBtn = registerBtnRef.current;
		const loginBtn = loginBtnRef.current;

		if (registerBtn && loginBtn && container) {
			registerBtn.addEventListener("click", () => {
				container.classList.add("active");
			});

			loginBtn.addEventListener("click", () => {
				container.classList.remove("active");
			});
			return () => {
				registerBtn.removeEventListener("click", () => {
					container.classList.add("active");
				});
				loginBtn.removeEventListener("click", () => {
					container.classList.remove("active");
				});
			};
		}
	}, []);

	const handleLoginWithSignIn = async (event) => {
		event.preventDefault(); 
		const user = await signWithEmailAndPassword(email, password);
		if (user) {
		  navigate("/");
		} else {
		  alert("Kullanıcı Bilgileri Hatalı Lütfen Tekrar Deneyin");
		}
	  };

	  const handleLoginWithSignUp = async (event) => {
		event.preventDefault(); 
		const user = await createWithEmailAndPassword(email, password,publishing);
		if (user) {
		  navigate("/");
		} else {
		  alert("Kullanıcı Bilgileri Hatalı Lütfen Tekrar Deneyin");
		}
	  };


	return (
		<section className="loginSection">
			<div className="container" id="container" ref={containerRef}>
				<div className="form-container sign-up">
					<form onSubmit={handleLoginWithSignUp}>
						<h1>Hesap Oluştur</h1>
						<div className="social-icons">
							<a href="#" className="icon">
								<i className="fa-brands fa-google-plus-g"></i>
							</a>
							<a href="#" className="icon">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a href="#" className="icon">
								<i className="fa-brands fa-github"></i>
							</a>
							<a href="#" className="icon">
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
						</div>
						<span>ya da email hesabı kullan</span>
						<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
						<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
						<select name="publising" id="publishing" onChange={(e) => setPublishing(e.target.value)}>
							<option value= "kodlab">Kodlab</option>
							<option value= "abaküs">Abaküs</option>
							<option value= "papatya">Papatya</option>
							<option value= "pusula">Pusula</option>
						</select>
						<button type="submit">Kayıt Ol</button>
					</form>
				</div>
				<div className="form-container sign-in">
					<form onSubmit={handleLoginWithSignIn}>
						<h1>Giriş Yap</h1>
						<div className="social-icons">
							<a href="#" className="icon">
								<i className="fa-brands fa-google-plus-g"></i>
							</a>
							<a href="#" className="icon">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a href="#" className="icon">
								<i className="fa-brands fa-github"></i>
							</a>
							<a href="#" className="icon">
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
						</div>
						<span>ya da email ve şifre kullan</span>
						<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
						<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
						<a href="#">Parolanı mı unuttun?</a>
						<button onClick={async () => await signWithEmailAndPassword(email,password,navigate)}>Giriş yap</button>
					</form>
				</div>
				<div className="toggle-container">
					<div className="toggle">
						<div className="toggle-panel toggle-left">
							<h1>Tekrardan Hoşgeldin!</h1>
							<p>Kullanıcı bilgilerini girerek kitap dünyasının içine adım at</p>
							<button className="hidden" id="login" ref={loginBtnRef}>
								Giriş yap
							</button>
						</div>
						<div className="toggle-panel toggle-right">
							<h1>Selam, Arkadaşım!</h1>
							<p>
								Sana uygun seçeneklerden birini seçerek kitap dünyasının kapılarını arala ve hemen kayıt ol
							</p>
							<button className="hidden" id="register" ref={registerBtnRef}>
								Kayıt Ol
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginScreen;
