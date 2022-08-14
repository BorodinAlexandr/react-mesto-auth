import { useContext } from 'react';
import userContext from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onDeleteCard }) {
  const { id } = useContext(userContext);

  const isOwn = card.owner._id === id;

  const cardDeleteButtonClassName = `places__delete ${
    isOwn ? '' : 'places__delete_hidden'
  }`;

  const isLiked = card.likes.some((i) => i._id === id);

  const cardLikeButtonClassName = `places__like ${
    isLiked ? 'places__like_active' : ''
  }`;

  return (
    <div className="places__place">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={() => onDeleteCard(card)}
      />
      <img
        className="places__img"
        src={card.link}
        alt={card.name}
        onClick={() => {
          onCardClick({ name: card.name, link: card.link });
        }}
      />
      <div className="places__text">
        <h3 className="places__name">{card.name}</h3>
        <div className="places__like-wrapper">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={() => onCardLike(card)}
          />
          <p className="places__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
