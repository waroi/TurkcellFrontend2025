import { getOneUser } from "../services/Api";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addOneUser } from "../redux/slices/bookSlice";
const PublisherView = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.book.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOneUser = async () => {
      const data = await getOneUser(id);
      dispatch(addOneUser(data));
    };
    fetchOneUser();
  }, []);

  return <div>{user?.publisher}</div>;
};

export default PublisherView;
