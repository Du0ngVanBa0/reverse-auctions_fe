import '../css/Product.css'
// import './Sanpham.css'
import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Image, Button } from 'antd'
const { Text, Title } = Typography;
function Sanpham(props) {
    return (
        // <div class="item">
        //     <div className='time'>#120837</div>
        //     <div class="hinh-san-pham">
        //         <img className='hinh' src={props.img} alt="Hinh_sp" />
        //     </div>
        //     <div className='title'>{props.title}</div>
        //     <div class="gia">
        //         <div class="gia-kd">
        //             <div>Giá tiêu chuẩn: </div>
        //             <div>{props.priceStart} VND</div>
        //         </div>
        //         <div class="gia-kd" >
        //             <p>Laptop mới nhất 2024 Bộ nhớ 99T RAM lên tới 9999GB</p>
        //         </div>
        //     </div>
        //     <div className='frame'>
        //         <button class="button2">Chi tiết</button>
        //     </div>

        // </div>
        <div className='box'
            style={{
                border: '1px solid #e7e7e7'
            }}>
            <Title level={4} style={{ color: '#bbb8b8' }}>#{props.id}</Title>
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
                <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Giá tiêu chuẩn:</Title>
                    <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginRight: '50px', margin: 0 }}>{props.priceStart} VNĐ</Title>
                </div>
                <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Laptop mới nhất 2024 Bộ nhớ 99T RAM lên tới 9999GB</Title>
                </div>
            </div>
            <Link to={"/chitiet"}> <Button type='primary' style={{ textAlign: 'center', marginRight: '250px', marginTop: '20px', borderRadius: '10px 10px 10px 0px', backgroundColor: '#a5d6f1' }}>Chi tiết</Button></Link>

        </div>
    )
}
export default Sanpham;