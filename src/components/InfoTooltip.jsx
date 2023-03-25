import successImg from '../images/success.svg';
import faultImg from '../images/fault.svg';
function InfoTooltip({ isOpen, onClose, success, message }) {
    return (
        <div
            onClick={onClose}
            className={`popup ${isOpen && 'popup_active'}`}
        >
            <div className='popup__content'>
                <button
                    className='popup__close'
                    type='button'
                ></button>
                {success ? < img
                    className='popup__img-tooltip'
                    src={successImg}
                    alt='success'
                /> : < img
                    className='popup__img-tooltip'
                    src={faultImg}
                    alt='fault'
                />
                }
                <p className='popup__title'>{message}</p>
            </div>
        </div>
    )
}

export default InfoTooltip