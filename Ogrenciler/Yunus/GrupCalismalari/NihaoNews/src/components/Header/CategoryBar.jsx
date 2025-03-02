import { NavLink } from "react-router";
import {Categories} from "../../utils/Categories";

const CategoryBar = () => {
    return (
        <div className="category-bar d-flex text-center gap-3 align-items-center justify-content-center">
        {Categories.map((category) => (

            <NavLink  to={`/news/${category.name}`}  key={category.id} className = "">
                <p>{category.name}</p>
            </NavLink>
        ))}
        </div>
    );
    }
    export default CategoryBar;