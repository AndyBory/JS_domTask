function createLinksContainer(userLinks) {
  const links = userLinks.map((e) => createIconLink(e));
  const linksList = createElement('ul', { className: 'linksList' }, ...links);
  return createElement("div", { className: "linksContainer" },
  linksList);
}