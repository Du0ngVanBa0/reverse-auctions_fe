import React from 'react';
import { Data } from '../../../Data';
import ItemLS from '../../js/ItemLS';


// Define your routes outside of the List component

function List() {
    return (
        <div >

            {Data.map((item) => {
                if (item.loai === 1 || item.loai === 2 || item.loai === 3) {
                    return (

                        < ItemLS
                            key={item.id}
                            Trangthai={item.trangthai}
                            GiaGD={item.giaGD}
                            MaNB={item.MaNB}
                            TG={item.time}
                        ></ItemLS>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default List;
