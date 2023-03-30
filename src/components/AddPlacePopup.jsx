import PopupWithForm from './PopupWithForm';
import { useEffect } from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

    useEffect(() => {
        resetForm();
    }, [isOpen, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: values['place'],
            link: values['url']
        });
    }

    function handleResetInputPlace() {
        setValues({ name: '' });
    }

    function handleResetInputLink() {
        setValues({ link: '' });
    }

    return (
        <PopupWithForm
            name='place'
            title='Новое место'
            btnText='Создать'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <label className='popup__label'>
                <span className='popup__input-close popup__input-place-close' onClick={handleResetInputPlace}>
                    &times;
                </span>
                <input
                    value={values['place'] || ''}
                    id='popup__input-place'
                    type='text'
                    name='place'
                    className='popup__input popup__input_type_place'
                    onChange={handleChange}
                    placeholder='Название'
                    minLength={2}
                    maxLength={40}
                    required
                />
                <span className='popup__input-error popup__input-place-error'>{errors['place']}</span>
            </label >
            <label className='popup__label'>
                <span className='popup__input-close popup__input-url-close' onClick={handleResetInputLink}>
                    &times;
                </span>
                <input
                    value={values['url'] || ''}
                    id='popup__input-url'
                    type='url'
                    name='url'
                    className='popup__input popup__input_type_link'
                    onChange={handleChange}
                    placeholder='Ссылка на картинку'
                    minLength={2}
                    maxLength={500}
                    required
                />
                <span className='popup__input-error popup__input-url-error'>{errors['url']}</span>
            </label>
        </PopupWithForm >
    )
}

export default AddPlacePopup