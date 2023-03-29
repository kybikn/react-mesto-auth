import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        setAvatar('');
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatar);
    }

    function handleChangeAvatar(e) {
        setAvatar(e.target.value);
    }

    function handleResetInputAvatar() {
        setAvatar('');
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            btnText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className='popup__label'>
                <span className='popup__input-close popup__input-avatar-close' onClick={handleResetInputAvatar}>
                    &times;
                </span>
                <input
                    value={avatar}
                    onChange={handleChangeAvatar}
                    className='popup__input popup__input_type_avatar'
                    id='popup__input-avatar'
                    type='url'
                    name='link'
                    placeholder='Ссылка на аватар'
                    minLength={2}
                    maxLength={40}
                    required
                />
                <span className='popup__input-error popup__input-avatar-error'></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup