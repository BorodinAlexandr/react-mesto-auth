import error from '../images/Union.svg';
import done from '../images/UnionDone.svg';

function InfoTooltip({ isOpen, onClose, isDone }) {
  const image = () => {
    return isDone ? done : error;
  };

  const text = () => {
    return isDone ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз';
  };

    return (
      <div className={`popup popup-info ${isOpen && 'popup_opened'}`}>
        <div className="popup__container popup-info__container">
          <img src={image()} alt="значок" className="popup-info__image" />
          <h3 className="popup-info__info">{text()}</h3>
          <button type="button" className="popup__close" onClick={onClose} />
        </div>
      </div>
    );
}

export default InfoTooltip;
