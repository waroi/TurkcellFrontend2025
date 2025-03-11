import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteBlog, setBlog } from "../redux/slices/blogSlice";
import { deleteApiBlog } from "../../../services/Api";
import UpdateModal from "./UpdateModal";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(card.id));
    deleteApiBlog(card.id);
    console.log("Silindi");
  };

  const handleUpdate = () => {
    dispatch(setBlog(card));
  };

  return (
    <>
      <div className="card mb-3 position-relative">
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
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.body}</p>
              <p className="card-text">{card.author}</p>
              <p className="card-text">
                {" "}
                <small>{card.created_at}</small>
              </p>
            </div>
            <div className="card-footer p-2 d-flex justify-content-between align-items-center">
              <div className="">
                <button
                  className="btn btn-primary me-2"
                  onClick={handleUpdate}
                  data-bs-toggle="modal"
                  data-bs-target="#updateBlogModal"
                >
                  <MdEdit />
                </button>
                <button onClick={handleDelete} className="btn btn-danger">
                  <MdDeleteForever />
                </button>
              </div>
              <span
                className="badge text-bg-warning  p-2 m-2"
                style={{ width: "min-content" }}
              >
                {card.topic}
              </span>
            </div>
            <UpdateModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
