import { Input, message } from "antd"
import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";



const AddProduct = ({ setIsModalOpen }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    color: "",
    capacity: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data =
    {
      color: newProduct.color,
      capacity: newProduct.capacity,
      price: newProduct.price,
    }

    axios.post("https://api.restful-api.dev/objects", { name: newProduct?.name, data })
      .then((response) => {
        if (response.status === 200) {
          message.success("Product created successfully");
          setIsModalOpen(false);

        }
      })
      .catch((error) => {
        message.error("Error creating product:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Product</h1>
      <Input name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} className="mb-2 mt-4 py-2" />
      <Input name="color" placeholder="Color" value={newProduct.color} onChange={handleInputChange} className="mb-2 py-2" />
      <Input name="capacity" placeholder="Capacity (e.g., 128 GB)" value={newProduct.capacity} onChange={handleInputChange} className="mb-2 py-2" />
      <Input name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} type="number" className="mb-2 py-2" />

      <div className="text-end">
        <button className="btn btn-info" type="submit">Create</button>
      </div>
    </form>
  )
}

export default AddProduct
