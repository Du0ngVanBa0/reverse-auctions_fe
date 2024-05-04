import '../../css/ListAdmin.css'
import { Image } from 'antd';
function SPAdmin(props) {
    return (
        <tr class='tbbody'>
            <td>
                <div class='anh2'><Image scr={props.img}></Image></div>
            </td>
            <td>
                <div class='ten'>
                    <p>
                        {props.title}
                    </p>
                </div>
            </td>
            <td className='loai'>
                <p>{props.loaiSP}</p>
            </td>
            <td> <div className='gia'> <p>{props.priceStart} VND</p></div></td>
            <td><button class='sua button'> Sua</button></td>
            <td><button class='xoa button'> Xoa</button></td>
        </tr >
    )
}
export default SPAdmin;