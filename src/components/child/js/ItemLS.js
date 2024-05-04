import React from 'react';
import '../css/ItemLS.css';
import anh1 from '../../images/image 12.png';

function ItemLS(props) {

    const danhSachLoaiLS = [
        {
            id: "lichsu1",
            tieuDe: "Đang diễn ra",
            tt: "tt1"
        },
        {
            id: "lichsu2",
            tieuDe: "Hoàn tất",
            tt: "tt2"
        },
        {
            id: "lichsu3",
            tieuDe: "Chờ thanh toán",
            tt: "tt3"
        },
        {
            id: "lichsu4",
            tieuDe: "Thất bại",
            tt: "tt4"
        }
    ];

    return (
        <div>
            {danhSachLoaiLS.map((item, index) => (
                props.Trangthai === index + 1 && (

                    <div key={index} id={item.id}>
                        <img src={anh1} alt="Maytinh" width="297.71" height="230" />
                        <div className="thongtin">
                            <p>DELL XXX AAA</p>
                            <p>Giá giao dịch: {props.GiaGD}</p>
                            <p>Mã người bán: {props.MaNB}</p>
                            <p>Thời gian: {props.TG}</p>
                        </div>
                        <div id={item.tt}>
                            <p style={{ fontWeight: 'bold', fontSize: '14px', color: 'white' }}>{item.tieuDe}</p>
                        </div>
                    </div>

                )
            ))}
        </div>
    );
}

export default ItemLS;

