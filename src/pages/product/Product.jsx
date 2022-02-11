import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { productData } from "../../data";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";
import { useState } from "react";

export default function Product() {
  const [input, setInput] = useState({});
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const [file, setFile] = useState(
    "https://img.search.brave.com/aPTgrcbKWAKOJ6zJtDm87MQRLYW92A-d44dMoiJaLfM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/VzU0V2MyWDZ6QmQ4/UHlLa1hnRHFnSGFI/YSZwaWQ9QXBp"
  );
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((p) => p._id === productId)
  );
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const p = { ...input, ...cat, img: file };
    updateProduct(productId, p, dispatch);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue"> {productId}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">color:</span>
              <span className="productInfoValue">{product.color}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">size:</span>
              <span className="productInfoValue">{product.size}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">price:</span>
              <span className="productInfoValue">${product.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={handleSubmit}>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              name="title"
              type="text"
              placeholder={product.title}
              onChange={handleChange}
            />
            <label>Product Description</label>
            <input
              name="desc"
              type="text"
              placeholder={product.desc}
              onChange={handleChange}
            />
            <label>Price</label>
            <input
              name="price"
              type="number"
              placeholder={product.price}
              onChange={handleChange}
            />
            <label>Categories</label>
            <input
              name="categories"
              type="text"
              placeholder={product.categories}
              onChange={handleCat}
            />
            <label>Color</label>
            <input
              name="color"
              type="text"
              placeholder={product.color}
              onChange={handleCat}
            />
            <label>Size</label>
            <input
              name="size"
              type="text"
              placeholder={product.size}
              onChange={handleCat}
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
