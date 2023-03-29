import PopupWithForm from './PopupWithForm';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [isOpen, currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleResetInputDescription(e) {
        setDescription('');
    }

    function handleResetInputName(e) {
        setName('');
    }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            btnText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className='popup__label'>
                <span className='popup__input-close popup__input-name-close' onClick={handleResetInputName}>
                    &times;
                </span>
                <input
                    value={name}
                    id='popup__input-name'
                    type='text'
                    name='name'
                    className='popup__input popup__input_type_name'
                    onChange={handleChangeName}
                    placeholder='Ваше имя'
                    minLength={2}
                    maxLength={40}
                    required
                />
                <span className='popup__input-error popup__input-name-error'></span>
            </label>
            <label className='popup__label'>
                <span className='popup__input-close popup__input-job-close' onClick={handleResetInputDescription}>
                    &times;
                </span>
                <input
                    value={description}
                    id='popup__input-job'
                    type='text'
                    name='job'
                    className='popup__input popup__input_type_job'
                    onChange={handleChangeDescription}
                    placeholder='Ваша профессия'
                    minLength={2}
                    maxLength={200}
                    required
                />
                <span className='popup__input-error popup__input-job-error'></span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup