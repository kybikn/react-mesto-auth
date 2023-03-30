import PopupWithForm from './PopupWithForm';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useFormAndValidation from '../hooks/useFormAndValidation';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);

    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

    useEffect(() => {
        resetForm();
        setValues({
            name: currentUser.name,
            about: currentUser.about
        })
    }, [isOpen, currentUser, setValues, resetForm]);


    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: values['name'],
            about: values['about']
        });
    }

    function handleResetInputName() {
        setValues({ ...values, name: '' });
    }

    function handleResetInputAbout() {
        setValues({ ...values, about: '' });
    }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            btnText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <label className='popup__label'>
                <span className='popup__input-close popup__input-name-close' onClick={handleResetInputName}>
                    &times;
                </span>
                <input
                    value={values['name'] || ''}
                    id='popup__input-name'
                    type='text'
                    name='name'
                    className='popup__input popup__input_type_name'
                    onChange={handleChange}
                    placeholder='Ваше имя'
                    minLength={2}
                    maxLength={40}
                    required
                />
                <span className='popup__input-error popup__input-name-error'>{errors['name']}</span>
            </label>
            <label className='popup__label'>
                <span className='popup__input-close popup__input-job-close' onClick={handleResetInputAbout}>
                    &times;
                </span>
                <input
                    value={values['about'] || ''}
                    id='popup__input-job'
                    type='text'
                    name='about'
                    className='popup__input popup__input_type_job'
                    onChange={handleChange}
                    placeholder='Ваша профессия'
                    minLength={2}
                    maxLength={200}
                    required
                />
                <span className='popup__input-error popup__input-job-error'>{errors['about']}</span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup