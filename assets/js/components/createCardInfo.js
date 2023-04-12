function createCardInfo(fullName) {
  const cardName = createElement('h1', {className: 'cardName'});
  cardName.textContent = fullName;

  const cardDescription = createElement('p', {className: 'cardDescription'});
  cardDescription.textContent = DESCRIPTION;
  return createElement('div', {className: 'cardInfo'}, cardName, cardDescription);
}