function createImage(data) {
  const { fullName, profilePicture } = data;

  const initialsText =
    fullName === DEFAULT_NAME ? fullName : getInitials(fullName);
  const initials = createElement('p', { className: 'initials' }, initialsText);

  const img = createElement('img', {
    className: 'cardImg',
    eventListeners: {
      error: deleteHandler,
    },
    attributes: {
      alt: fullName,
      src: profilePicture,
    },
  });

  return createElement('div', { className: 'imgWrapper' }, initials, img);
}