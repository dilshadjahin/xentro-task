import { Space } from "antd";
import axios from "axios"
import { useEffect, useState } from "react"
import Tables from "../table/Tables";
import { Link } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => setUsers(res?.data))

    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (text) => <a>{text.city}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (item) => {
                return (

                    <Space size="middle">
                        <div
                        >
                            <Link to={`/users/${item.id}`} state={item} >view details</Link>
                        </div>
                    </Space>
                )

            },
        },
    ];
    return (
        <div>
            <Tables columns={columns} filterData={users} pageSize={5} />
        </div>
    )
}

export default User
