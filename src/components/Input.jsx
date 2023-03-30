function Input({ children }) {
    return (
        <label className='popup__label'>
            <span className='popup__input-close popup__input-place-close'>
                {/* <span className=`popup__input-close  popup__input-${name}-close`> */}
                &times;
            </span>
            {/* <input
                value={name}
                id='popup__input-place'
                type='text'
                name='place'
                className='popup__input popup__input_type_place'
                onChange={handleChangeName}
                placeholder='Название'
                minLength={2}
                maxLength={30}
                required
            /> */}
            {children}
            <span className='popup__input-error popup__input-place-error'></span>
        </label >
    )
}

export default Input;