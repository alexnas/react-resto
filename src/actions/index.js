const menuLoaded = (newMenu) => {
  return {
    type: 'MENU-LOADED',
    payload: newMenu,
  };
};

const menuRequested = () => {
  return {
    type: 'MENU-REQUESTED',
  };
};

const menuError = () => {
  return {
    type: 'MENU-ERROR',
  };
};

const addedToCart = (id) => {
  console.log('addedToCart action', id);
  return {
    type: 'ADD-ITEM-TO-CART',
    payload: id,
  };
};

export { menuLoaded, menuRequested, menuError, addedToCart };
