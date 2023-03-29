import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        setName('');
        setLink('');
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: name,
            link: link,
        });
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleResetInputPlace() {
        setName('');
    }

    function handleResetInputLink() {
        setLink('');
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
                    value={name}
                    onChange={handleChangeName}
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
                    value={link}
                    onChange={handleChangeLink}
                    className='popup__input popup__input_type_link'
                    id='popup__input-url'
                    type='url'
                    name='url'
                    placeholder='Ссылка на картинку'
                    minLength={2}
                    maxLength={40}
                    required
                />
                <span className='popup__input-error popup__input-url-error'></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup