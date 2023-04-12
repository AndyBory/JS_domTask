function createIconLink(data) {
  const hostLink = new URL(data);
  const iconLink = createElement("img", { className: "linkPic" });
  const link = createElement("a", { className: "link" }, iconLink);
    for (const [key, value] of icon) {
      if (key === hostLink.host) {
        link.setAttribute("href", hostLink);
        iconLink.setAttribute("src", value);
      }
    }
  return createElement("li", { className: "linkItem" }, link);
}
