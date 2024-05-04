import React, { useState } from 'react';
import { useUser } from './UserContext';
import LoginForm from './LoginForm'; // Import LoginForm từ tệp của nó

const MyComponent = () => {
    const [showLoginForm, setShowLoginForm] = useState(false); // State để quản lý hiển thị form đăng nhập
    const { user, login, logout } = useUser();

    const handleCloseLoginForm = () => {
        setShowLoginForm(false); // Đóng form đăng nhập khi nhấn nút đóng
    };

    const handleLogin = () => {
        setShowLoginForm(false); // Đóng form đăng nhập khi đăng nhập thành công
        // Thêm logic xác thực đăng nhập ở đây
    };

    return (
        <div>
            {user ? (
                <a href="#" className="btn" onClick={logout}>Đăng xuất</a> // Nếu đã đăng nhập, hiển thị nút đăng xuất và gọi hàm logout khi nhấn
            ) : (
                <>
                    <a onClick={() => setShowLoginForm(true)} className="btn">Đăng nhập</a> {/* Nếu chưa đăng nhập, hiển thị nút đăng nhập và mở form đăng nhập khi nhấn */}
                    {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />} {/* Hiển thị form đăng nhập nếu showLoginForm được đặt thành true */}
                </>
            )}
        </div>
    );
};

export default MyComponent;
