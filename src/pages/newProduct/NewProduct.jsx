import "./newProduct.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
export default function NewProduct() {
  const [input, setInput] = useState({});
  const [file, setFile] = useState(
    "https://img.search.brave.com/aPTgrcbKWAKOJ6zJtDm87MQRLYW92A-d44dMoiJaLfM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/VzU0V2MyWDZ6QmQ4/UHlLa1hnRHFnSGFI/YSZwaWQ9QXBp"
  );
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat((prev) => {
      return { ...prev, [e.target.name]: e.target.value.split(",") };
    });
  };
  console.log(cat);
  const handleClick = (e) => {
    e.preventDefault();
    const product = { ...input, ...cat, img: file };
    addProduct(product, dispatch);
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" id="" onChange={handleChange}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="...description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100$"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            name="categories"
            type="text"
            placeholder="category"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input
            name="color"
            type="text"
            placeholder="color"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input
            name="size"
            type="text"
            placeholder="size"
            onChange={handleCat}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
