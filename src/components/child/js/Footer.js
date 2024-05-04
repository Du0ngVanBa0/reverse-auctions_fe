import '../css/Footer.css';
import images1 from '../../../assets/img/Rectangle 19.png'
import images2 from '../../../assets/img/image 6.1.png'
import images3 from '../../../assets/img/image 7.png'
import images4 from '../../../assets/img/image 8.png'
import images5 from '../../../assets/img/image 9.png'

function Footer() {
    return (
        <div>
            <h2>ĐỐI TÁC LIÊN KẾT</h2>
            <div class="doi-tac">
                <img src={images1} alt="Phuong-nam" />
                <img src={images2} alt="Vuon_toi_tam_cao" />
                <img src={images3} alt="NAMA" />
                <img src={images4} alt="Chu_H" />
                <img src={images5} alt="Gia_Thinh" />
            </div>
            <div className='khung'>
                <p>Thông tin</p>
            </div>
            <div class="information">
                <div class="infor"></div>
                <div class="infor"></div>
                <div class="infor"></div>
            </div>
            <div className='foot'>
            </div>
        </div>
    )
}
export default Footer;