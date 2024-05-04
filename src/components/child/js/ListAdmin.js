import '../css/ListAdmin.css'
import SPAdmin from '../Component_Child/js/SPAdmin';
import { Data } from '../../Data';
function ListAdmin() {
    return (
        <table className='table'>
            <tr class='tbhead'>
                <th>Product</th>
                <th></th>
                <th>Loại</th>
                <th>Giá tiêu chuẩn</th>
                <th></th>
                <th></th>
            </tr>
            {Data.map((item) => {

                return (
                    <SPAdmin key={item.id} img={item.img} title={item.title} loaiSP={item.loaiSP} priceStart={item.priceStart} ></SPAdmin>
                );

            })}

        </table >
    )
}
export default ListAdmin;