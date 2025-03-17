import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteBlog, setBlog } from "../../../redux/slices/blogSlice";
import Link from "next/link";
import { deleteFbBlog } from "../../../../../firebase/dbController";

const Card = ({ card, userAuth = false, d_button = "d-flex" }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteFbBlog(card.id);
    dispatch(deleteBlog(card.id));
    console.log("Silindi");
  };

  const handleUpdate = () => {
    dispatch(setBlog(card));
  };

  return (
    <>
      <div className="card my-3 position-relative">
        <div className="row g-0">
          <div className="col-md-4 overflow-hidden">
            <img
              src={card?.image}
              className="object-cover h-100 w-100 rounded-start"
              alt="card_img"
            />
          </div>
          <div className="col-md-8 d-flex justify-content-between flex-column">
            <div className="card-body">
              <h5 className="card-title">{card?.title}</h5>
              <p className="card-text">{card.body + "..."}</p>
              <p className="card-text">✍️ {card.author}</p>
              <p className="card-text">
                <small>{card.created_at}</small>
              </p>
            </div>
            <div className="card-footer p-2 d-flex justify-content-between align-items-center">
              <div className={d_button}>
                {userAuth ? (
                  <div>
                    <button
                      className="btn btn-primary m-1"
                      onClick={handleUpdate}
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="btn btn-danger m-1"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                ) : null}

                <Link href={`/blog/${card.id}`}>
                  <button className="btn btn-warning m-1">
                    <MdVisibility />
                  </button>
                </Link>
              </div>
              <span
                className="badge  fs-6 text-black  p-2 m-2"
                style={{ width: "min-content" }}
              >
                {card.topic}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
