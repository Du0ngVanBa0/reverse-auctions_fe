import React from 'react';
import '../css/List.css';
import '../css/Product.css';

import { Data } from '../../Data';
import Product from '../js/Product';

function List(props) {
    return (
        <div className='frame'>
            <div className='list'>
                {Data.map((item) => {
                    if (item.loai === props.loai) {
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
        </div>
    );
}

export default List;
