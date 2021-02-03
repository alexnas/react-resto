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

export { menuLoaded, menuRequested };
