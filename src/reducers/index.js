const initialState = {
  menu: [],
  loading: true,
  error: false,
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU-LOADED':
      console.log('reducer', 'MENU-LOADED');
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false,
      };
    case 'MENU-REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false,
      };
    case 'MENU-ERROR':
      return {
        ...state,
        menu: state.menu,
        loading: true,
      };
    case 'ADD-ITEM-TO-CART':
      const itemToAdd = state.menu.find((item) => item.id === action.payload);
      const newCartItem = {
        title: itemToAdd.title,
        price: itemToAdd.price,
        url: itemToAdd.url,
        category: itemToAdd.category,
        id: itemToAdd.id,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newCartItem],
      };

    default:
      return state;
  }
};

export default reducer;
