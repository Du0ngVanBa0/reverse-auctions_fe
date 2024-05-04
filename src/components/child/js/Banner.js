import '../css/Banner.css';
import images1 from '../../../assets/img/T (11) 1.png'
import images2 from '../../../assets/img/logos_facebook.png'
import images3 from '../../../assets/img/simple-icons_zalo.png'
function Banner() {
    return (
        <div id="gioi-thieu">
            <img className='logo' src={images1} alt="Logo" />
            <p className='p1'>HÂN HẠNH ĐỒNG HÀNH CÙNG BẠN TRONG DỰ ÁN NÀY</p>
            <div id="info-2">
                <div id="info-2-1">
                    <img src={images2} alt="Logo Facebook" />
                    <p>TStudio</p>
                </div>
                <div id="info-2-2">
                    <img src={images3} alt="Logo Zalo" />
                    <p>0774515743</p>
                </div>
            </div>
        </div>

    )
}
export default Banner;
