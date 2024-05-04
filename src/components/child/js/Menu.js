import '../css/Menu.css';
import { Link } from 'react-router-dom';
import images1 from '../../../assets/img/image 2.png'
import images2 from '../../../assets/img/image 1.png'
function Menu() {
    return (
        <div className='menu'>
            <ul>
                <a src='/home'>
                    <li><a href="/">TRANG CHỦ</a></li>
                </a>
                <li><a href="/canhan">CÁ NHÂN</a></li>
                <li><a href="/sanpham">SẢN PHẨM</a></li>
                <li><a href="#">SỰ KIỆN</a></li>
                <li><a href="#">GIỚI THIỆU</a></li>
            </ul>
            <div class="search">
                <input type="text" id="searchInput" placeholder="Nhập từ khóa tìm kiếm..."></input>
                <button id="searchButton"></button>
            </div>
            <div class="gio-hang_vi">
                <Link to={"/lichsu"}>
                    <img id="Cart" src={images1} />
                </Link>

                <img id="CheckOut" src={images2} />
            </div>
        </div>

    )

}
export default Menu;