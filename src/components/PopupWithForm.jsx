import Popup from './Popup';

function PopupWithForm({ isOpen, onClose, name, title, btnText, children, onSubmit, isValid }) {

  return (
    <Popup
      name={name}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='popup__content'>
        <h2 className='popup__title'>{title}</h2>
        <form
          onSubmit={onSubmit}
          className={`popup__form popup__form-${name}`}
          name={`popup__form-${name}`}
        >
          <fieldset className='popup__box'>
            {children}
            <button
              disabled={!isValid}
              className='popup__button'
              id={`popup__button-${name}`}
              type='submit'
            >
              {btnText}
            </button>
          </fieldset>
        </form>
      </div>
    </Popup >
  );
}

export default PopupWithForm;
