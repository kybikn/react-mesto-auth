import successImg from '../images/success.svg';
import faultImg from '../images/fault.svg';
function InfoTooltip({ isOpen, onClose, success, message }) {
    return (
        <div
            onClick={onClose}
            className={`popup popup_type_tooltip ${isOpen && 'popup_active'}`}
        >
            <div className='popup__content'>
                <button
                    className='popup__close'
                    type='button'
                ></button>
                {success ? < img
                    className='profile__img'
                    src={successImg}
                    alt='success'
                /> : < img
                    className='profile__img'
                    src={faultImg}
                    alt='fault'
                />
                }
                <p>{message}</p>
            </div>
        </div>
    )
}

export default InfoTooltip