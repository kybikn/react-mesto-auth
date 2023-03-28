import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import avatarImage from '../images/Kusto.jpg';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletePopup from './DeletePopup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ProtectedRouteElement from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import auth from '../utils/auth.js';
import NotFound from './NotFound';

function App() {
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    avatar: avatarImage,
    name: 'Жак-Ив Кусто',
    about: 'Исследователь океана',
  });
  const [cards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [infoSuccess, setInfoSuccess] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const navigate = useNavigate();


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleDeletePopupClick(card) {
    setCardToDelete(card);
    setDeletePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateAvatar(link) {
    api
      .editAvatar(link)
      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile({ name, about })
      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addNewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleDeletePopupSubmit(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(
          (stateCard) => stateCard._id !== card._id
        );
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleLogin(email, password) {
    // идем на сервер
    auth.login(email, password)
      .then((payload) => {
        // в случае успеха
        if (payload.token) {
          localStorage.setItem('jwt', payload.token);
          setLoggedIn(true);
          navigate('/', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        // в случае не успеха
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(`Что-то пошло не так!
      Попробуйте ещё раз.`)
      });
  }

  function handleRegister(email, password) {
    // идем на сервер
    auth.register(email, password)
      .then((payload) => {
        // в случае успеха
        if (payload.data) {
          navigate('/signin', { replace: true });
          setInfoTooltipOpen(true);
          setInfoSuccess(true);
          setInfoMessage(`Вы успешно зарегистрировались!`)
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        // в случае не успеха
        setInfoTooltipOpen(true);
        setInfoSuccess(false);
        setInfoMessage(`Что-то пошло не так!
    Попробуйте ещё раз.`)
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setEmail('');
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.checkToken(token)
        .then((payload) => {
          console.log('data', payload);
          if (payload.data) {
            setLoggedIn(true);
            setEmail(payload.data.email);
            navigate("/", { replace: true })
            Promise.all([api.getProfile(), api.getInitialCards()])
              .then(([profile, initialCards]) => {
                setCurrentUser(profile);
                setCards(initialCards);
              })
              .catch((err) => {
                console.log(err);
                alert(err);
              });
          }
        })
        .catch(() => { return false });
    }
  }, [navigate]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((stateCard) =>
          stateCard._id === card._id ? newCard : stateCard
        );
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  function closeAllPopups(event) {
    if (
      !event ||
      event.target.classList.contains('popup_active') ||
      event.target.classList.contains('popup__close')
    ) {
      setEditAvatarPopupOpen(false);
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setDeletePopupOpen(false);
      setInfoTooltipOpen(false);
      setSelectedCard(null);
    }
  }

  const isOpen =
    isAddPlacePopupOpen ||
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isDeletePopupOpen ||
    isInfoTooltipOpen ||
    selectedCard;

  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
      return () => {
        document.removeEventListener('keydown', handleEscClose);
      };
    }
  }, [isOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className='page'>
        <Header
          loggedIn={loggedIn}
          email={email}
          onSignOut={handleSignOut} />
        <Routes>
          <Route
            path='/'
            element={<ProtectedRouteElement
              element={Main}
              loggedIn={loggedIn}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onDeletePopup={handleDeletePopupClick}
              cards={cards}
              onCardLike={handleCardLike} />}
          ></Route>
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path='*'
            element={<NotFound />}
          ></Route>
        </Routes>
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <DeletePopup
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          onDeletePopup={handleDeletePopupSubmit}
          cardToDelete={cardToDelete}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          success={infoSuccess}
          message={infoMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
