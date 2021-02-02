const menuLoaded = (newMenu) => {
  return {
    type: 'MENU-LOADED',
    payload: newMenu,
  };
};

export { menuLoaded };
