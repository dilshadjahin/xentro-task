import { useEffect, useState } from "react";
import Tables from "../table/Tables"
import axios from "axios";
import { Popconfirm, Space } from "antd";
import { Link } from "react-router-dom";
import TableHeader from "../table/tableHeader/TableHeader";

const Products = () => {
  const [products, setProdcts] = useState([]);

  useEffect(() => {
    axios.get("https://api.restful-api.dev/objects").then(res => setProdcts(res?.data))

  }, [])


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Capacity',
      dataIndex: 'data',
      key: 'data',
      render: (text) => <a>{text?.capacity || text?.Capacity}</a>,
    },
    {
      title: 'Color',
      dataIndex: 'data',
      key: 'data',
      render: (text) => <a>{text?.color}</a>,
    },
    {
      title: 'Generation',
      dataIndex: 'data',
      key: 'data',
      render: (text) => <a>{text?.Generation}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'data',
      key: 'data',
      render: (text) => <a>{text?.price}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (item) => {

        const handleDelete = (id) => {
          axios.delete(`https://api.restful-api.dev/objects/${id}`).then(res => setProdcts(res?.data))
        }

        return (

          <Space size="middle">
            <div
            >
              <Link to={`/product/${item.id}`} state={item} >Details</Link>
            </div>

            <Popconfirm
              title="Are you sure to delete this product?"
              className="text-red-500 cursor-pointer"
              onConfirm={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </Popconfirm>
           
          </Space>
        )

      },
    },
  ]
  return (
    <div>
      <TableHeader setFilterData={setProdcts} tableData={products} title="Products" />
      <Tables columns={columns} filterData={products} pageSize={5} />
    </div>
  )
}

export default Products
