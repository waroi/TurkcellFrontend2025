import { NavLink } from "react-router";
import {Categories} from "../../../utils/Categories";

const CategoryBar = () => {
    return (
        <div className="category-bar d-flex text-center gap-3 align-items-center justify-content-center overflow-hidden">
        {Categories.map((category) => (
            <NavLink to={`/news/category/${category.name}`} key={category.id} className={({ isActive }) => isActive ? "active-category" : ""}>
                <p>{category.name}</p>
            </NavLink>
        ))}
        </div>
    );
    }
    export default CategoryBar;