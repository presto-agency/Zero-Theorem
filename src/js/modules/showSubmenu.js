export const showSubmenu = (itemsLinks) => {

  function setHeight(itemsLinks) {
    if (itemsLinks.length > 0) {
      itemsLinks.forEach(item => {
        let itemLink = item.querySelector('p');
        if (!!itemLink) {
          itemLink.onclick = (e) => {
            e.preventDefault()
            let itemsMenu = item.querySelectorAll('ul>li');
            let submenuHeight = getHeight(itemsMenu)
            let active = item.parentNode.parentNode.querySelector('.active');
            let wrapper = itemsMenu[0].parentNode.parentNode;
            if (!!active && active !== wrapper) {
              active.querySelector('ul').style.maxHeight = 0 + 'px';
              active.classList.remove('active');
              checkHeight(itemsMenu[0], submenuHeight);
              wrapper.classList.add('active')
            } else if (!!active && active === wrapper) {
              active.querySelector('ul').style.maxHeight = 0 + 'px';
              active.classList.remove('active');
            } else {
              checkHeight(itemsMenu[0], submenuHeight)
              wrapper.classList.add('active')
            }
          }
        }
      })
    }
  }

  function getHeight(items) {
    let subHeight = Array.from(items).reduce((sum, current) =>
      sum + current.offsetHeight, 0);
    return subHeight
  }

  function checkHeight(item, height) {
    item.parentNode.style.maxHeight = height + 'px';
  }

  setHeight(itemsLinks)
}