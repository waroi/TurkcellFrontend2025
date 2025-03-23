import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { setDoc,doc } from "firebase/firestore";

const Register = () => {
  ; const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    basicSchema,
    onSubmit: async (values, actions) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          fullName: values.fullName,
          email: values.email,
          isAdmin: false,
        });

        toast.success("Kayıt başarıyla tamamlandı! 🎉 Giriş yapabilirsiniz.");
        navigate("/login");
      } catch (error) {
        toast.error(`Kayıt başarısız: ${error.message}`);
      }

      actions.resetForm();
    },
  });

  return (
    <div className="container mt-5">
      <h2>Kayıt Ol</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Ad Soyad"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          className="form-control mb-3"
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <div className="text-danger">{formik.errors.fullName}</div>
        )}
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="form-control mb-3"
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-danger">{formik.errors.email}</div>
        )}
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="form-control mb-3"
        />
        {formik.errors.password && formik.touched.password && (
          <div className="text-danger">{formik.errors.password}</div>
        )}
        <button type="submit" className="btn btn-success w-100">
          Kayıt Ol
        </button>
      </form>
      <p className="mt-3">
        Zaten bir hesabın var mı? <a href="/login">Giriş yap</a>
      </p>
    </div>
  );
};

export default Register;
