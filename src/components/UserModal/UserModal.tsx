import "./UserModal.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../app/Slices/AuthSlice";
import { clearCart } from "../../app/Slices/CartSlices";

type Props = {
  userName: string;
  onClose: () => void;
};

const UserModal: React.FC<Props> = ({ userName, onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logout());
    onClose();
  };

  return (
    <div className="user-modal-backdrop" onClick={onClose}>
      <div className="user-modal" onClick={(e) => e.stopPropagation()}>
        <p>Logged in as: <strong className="user-name">{userName}</strong></p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserModal;
