import { useParams } from 'react-router';

const CategoryView = () => {
    const { categoryName } = useParams();
    console.log(categoryName)
  return (
    <div>{categoryName}</div>
  )
}

export default CategoryView