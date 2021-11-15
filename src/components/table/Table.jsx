import React from "react";
import { Row, Col, Table as AntdTable } from "antd";
import "./Table.scss";

/***
 *  columns = [
 *      { "title": "Title", "dataIndex": "title" }
 *  ]
 */

const Table = (props) => {
    
    const { columns, dataSource, onChange } = props;

    const renderHeader = () => {
        return  <thead>
                    <tr>
                        {columns.map((col, index) => {
                            return <th key={index}>{col.title}</th>
                        })}
                    </tr>
                </thead>;
    }

    const renderDatas = () => {
        return  <tbody>
                    {dataSource.map((rows, index) => {
                        console.log(rows);
                        return  <tr 
                                    key={index} 
                                    onClick={() => moveToUrl(rows.id)}
                                >
                                    {columns.map((col, index) => {
                                        return <td key={index}>{rows[col.dataIndex]}</td>
                                    })}
                            </tr>
                    })}
                </tbody>;
    }

    const moveToUrl = (url) => {
        window.location.href = `#${url}`
    }

    return  <Row className="Table">
                <Col span={24}>
                    <table>
                        { renderHeader() }
                        { renderDatas() }
                    </table>
                </Col>
            </Row>
}

export default Table;