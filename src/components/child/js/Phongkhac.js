import '../css/PhongKhac.css';
import Product from '../Component_Child/js/Product';
import { Data } from '../../Data';

function Phongkhac() {
    let count = 0;

    return (
        <div className="containers" style={{ marginTop: '30px' }}>
            {Data.map((item) => {
                if (count < 3 && item.loai === 2) {
                    count++;
                    return (
                        <Product
                            key={item.id}
                            time={item.time}
                            img={item.img}
                            title={item.title}
                            priceStart={item.priceStart}
                            priceNow={item.priceNow}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}

export default Phongkhac;
