import PopupWithForm from './PopupWithForm';
import { useEffect } from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

    useEffect(() => {
        resetForm();
    }, [isOpen, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(values['link']);
    }

    function handleResetInputAvatar() {
        setValues({ link: '' });
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            btnText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <label className='popup__label'>
                <span className='popup__input-close popup__input-avatar-close' onClick={handleResetInputAvatar}>
                    &times;
                </span>
                <input
                    value={values['link'] || ''}
                    id='popup__input-avatar'
                    type='url'
                    name='link'
                    className='popup__input popup__input_type_avatar'
                    onChange={handleChange}
                    placeholder='Ссылка на аватар'
                    minLength={2}
                    maxLength={500}
                    required
                />
                <span className='popup__input-error popup__input-avatar-error'>{errors['link']}</span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup