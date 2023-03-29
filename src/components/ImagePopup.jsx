import Popup from './Popup';

function ImagePopup({ isOpen, onClose, card }) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      name='photo'
    >
      <figure className='popup__figure'>
        <img className='popup__img' src={card?.link} alt={card?.name} />
        <figcaption className='popup__img-title'>{card?.name}</figcaption>
      </figure>
    </Popup >
  );
}
export default ImagePopup;
