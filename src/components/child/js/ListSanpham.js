import '../css/List.css'
import Sanpham from '../Component_Child/js/Sanpham';
import { Data } from '../../Data';

function ListSanpham(props) {
    return (

        <div className='frame'>
            <div className='list'>
                {Data.map((item) => {
                    if (item.loai === props.loai) {
                        return (
                            <Sanpham
                                key={item.id}
                                time={item.time}
                                img={item.img}
                                title={item.title}
                                priceStart={item.priceStart}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}
export default ListSanpham;