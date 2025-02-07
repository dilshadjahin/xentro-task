import { Table } from 'antd';

const Tables = ({ columns, filterData,pageSize }) => {

    return (
        <>
            <Table scroll={{ x: 600 }} columns={columns} dataSource={filterData} pagination={{ pageSize }} />
        </>
    )
};
export default Tables;