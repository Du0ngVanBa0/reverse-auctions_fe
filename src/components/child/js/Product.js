import { Flex, Typography } from 'antd';
import '../css/Product.css'
import React from 'react';
import { Image, Button } from 'antd'
import { Link } from 'react-router-dom';
const { Text, Title } = Typography;
function Product(props) {
    return (

        <div className='box'
            style={{
                border: '1px solid #e7e7e7'
            }}>
            <p style={{ color: '#bbb8b8', marginTop: '0px' }}>Thời gian đấu giá</p>
            <Title level={4} >{props.time}</Title>
            <Image
                width={300}
                height={200}
                style={{
                    borderRadius: '0 40px 0 40px',
                    border: '3px solid #e7e7e7'
                }}
                src={props.img}
                alt="Product_Image"
            />
            <Title level={3} >{props.title}</Title>
            <div className="price-container-2">
                <table style={{ width: '100%', boxSizing: 'border-box', height: '70px' }}>
                    <tr style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <td style={{ width: '150px', height: '40px', color: '#bbb8b8', fontSize: '17px' }}>Giá khởi điểm:</td>
                        <td style={{ height: '40px', color: '#bbb8b8', fontSize: '17px' }}  >{props.priceStart} VND</td>
                    </tr>
                    <tr style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <td style={{ width: '150px', height: '30px', color: '#bbb8b8', fontSize: '17px' }}>Giá hiện tại:</td>
                        <td style={{ height: '30px', color: '#bbb8b8', fontSize: '17px' }}>{props.priceNow} VND</td>
                    </tr>
                </table>
            </div>
            <Link to={"/chitiet"}> <Button className='hv' type='primary' style={{ textAlign: 'center', borderRadius: '15px 15px 15px 0px', backgroundColor: '#a5d6f1', float: 'left', width: '100px' }}>Chi tiết</Button></Link>

        </div >
    )
}
export default Product;