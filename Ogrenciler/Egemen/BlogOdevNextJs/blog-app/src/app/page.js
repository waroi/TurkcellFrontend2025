"use client";
import styles from "./page.module.css";
import { getBlog } from "../../services/Api";
import { useEffect } from "react";
import Card from "../app/components/Card";
import { useDispatch } from "react-redux";
import { addAllBlog, searchBlogs } from "../app/redux/slices/blogSlice";
import { useSelector } from "react-redux";
import UpdateModal from "../app/components/UpdateModal";
import { getAllBLogs } from "../../firebase/dbController";
import { auth } from "../../firebase/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const blogs = useSelector((state) => state.blog.blogs);
  const searchTerm = useSelector((state) => state.blog.searchTerm);
  const user = auth.currentUser;
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/userPage");
      } else {
        if (searchTerm == "") {
          async function fetchBlog() {
            const data = await getAllBLogs();
            if (data) {
              dispatch(addAllBlog(data));
            }
          }
          fetchBlog();
        } else {
          dispatch(searchBlogs(searchTerm));
        }
      }
    });

    return () => unsubscribe();
  }, [searchTerm, router]);

  return (
    <div className={styles.page}>
      <main className="container">
        <h3 className="my-3 text-center text-dark fw-semibold">
          Blog Yazıları
        </h3>
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-dark slide"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner mb-4 ">
            <div className="carousel-item active ">
              <Image
                src="/cr1.jpg"
                width={500}
                height={600}
                className="d-block w-75 img-fluid mx-auto"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block  bg-dark text-light bg-opacity-75 rounded p-3 my-3">
                <h5>İnsan Odaklı Yaşam Alanları</h5>
                <p>
                  Daha az beton, daha çok doğa… Geleceğin şehirleri dev
                  gökdelenlerden ziyade insanı ve doğayı kucaklayan,
                  sürdürülebilir ve minimalist yapılarla dolu.{" "}
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <Image
                src="/cr2.jpg"
                width={500}
                height={600}
                className="d-block w-75 img-fluid mx-auto"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block bg-dark text-light bg-opacity-75 rounded p-3 my-3">
                <h5>İnsan ve Makinenin Dansı</h5>
                <p>
                  Her hareketimiz bir algoritma tarafından analiz ediliyor, her
                  kararımız yapay zeka ile destekleniyor.
                </p>
              </div>
            </div>
            <div className="carousel-item  ">
              <Image
                src="/cr3.jpg"
                width={500}
                height={600}
                className="d-block w-75 img-fluid mx-auto"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block bg-dark text-light bg-opacity-75 rounded p-3 my-3">
                <h5>Geleceğin şehirleri gökyüzüne uzanıyor.</h5>
                <p>
                  Yolların yerini havada süzülen araçlar alırken, gökdelenler
                  birer sanat eseri gibi yükseliyor. İnsanlık, sınırlarını
                  teknolojiyle yeniden tanımlıyor
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="row">
          {blogs.length > 0 ? (
            blogs?.map((blog) => (
              <div key={blog?.id} className="col-12">
                <Card key={blog?.id + "card"} card={blog} />
              </div>
            ))
          ) : (
            <p>Yükleniyor...</p>
          )}
        </div>
        <UpdateModal />
      </main>
    </div>
  );
}
