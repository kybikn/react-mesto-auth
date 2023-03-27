import PopupWithForm from './PopupWithForm';
import { useRef, useEffect } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const inputNameRef = useRef();
    const inputLinkrRef = useRef();

    useEffect(() => {
        inputNameRef.current.value = "";
        inputLinkrRef.current.value = "";
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: inputNameRef.current.value,
            link: inputLinkrRef.current.value
        });
        e.target.reset();
    }

    function handleResetInputPlace() {
        inputNameRef.current.value = "";
    }

    function handleResetInputLink() {
        inputLinkrRef.current.value = "";
    }

    return (
        <PopupWithForm
            name='place'
            title='Новое место'
            btnText='Создать'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className='popup__label'>
                <span className='popup__input-close popup__input-place-close' onClick={handleResetInputPlace}>
                    &times;
                </span>
                <input
                    ref={inputNameRef}
                    className='popup__input popup__input_type_place'
                    id='popup__input-place'
                    type='text'
                    name='place'
                    placeholder='Название'
                    minLength={2}
                    maxLength={30}
                    required
                />
                <span className='popup__input-error popup__input-place-error'></span>
            </label>
            <label className='popup__label'>
                <span className='popup__input-close popup__input-url-close' onClick={handleResetInputLink}>
                    &times;
                </span>
                <input
                    ref={inputLinkrRef}
                    className='popup__input popup__input_type_link'
                    id='popup__input-url'
                    type='url'
                    name='url'
                    placeholder='Ссылка на картинку'
                    required
                />
                <span className='popup__input-error popup__input-url-error'></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup