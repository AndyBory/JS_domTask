const {
  USER_DATA: { DEFAULT_NAME, DESCRIPTION },
} = CONSTANTS;

const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);
/**
 * @param {object} user
 * @returns {HTMLElement}
 */
function createUserCard(user) {
  const { firstName, lastName, profilePicture, contacts } = user;

  const fullName =
    !firstName && !lastName ? DEFAULT_NAME : `${firstName} ${lastName}`;

  const imgWrapper = createImage({
    fullName,
    profilePicture,
  });

  /*
    Создать функцию, которая бы подчистила процесс создания 
    cardInfo 
    за пример взять createImage
  */
  const cardInfo = createCardInfo(fullName);
  
  // const cardInfo = document.createElement('div');
  // cardInfo.classList.add('cardInfo');

  // const cardName = document.createElement('h1');
  // cardName.classList.add('cardName');

  // cardName.textContent = fullName;

  // const cardDescription = document.createElement('p');
  // cardDescription.classList.add('cardDescription');
  // cardDescription.textContent = DESCRIPTION;

  // cardInfo.append(cardName, cardDescription);

  const linksContainer = createLinksContainer(contacts);

  const article = createElement(
    'article',
    { className: 'workerCard' },
    imgWrapper,
    cardInfo,
    linksContainer
  );

  return createElement('li', { className: 'workerItem' }, article);
}

function deleteHandler(e) {
  e.target.remove();
}

/**
 * Создает HTML и настраивает элемент
 * @param {string} tagName тег создаваемого элемента
 * @param {object} options обьект настроек для элемента
 * @param {string} options.className классы для элемента
 * @param {object} options.eventListeners обьект с функциями - слушателями
 * @param {object} options.attributes обьект атрибутами
 * @param  {...(Element | Node | string)} children - дочерние элементы, узлы или текст
 * @returns {HTMLElement}
 */

