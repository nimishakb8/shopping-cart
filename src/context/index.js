import React from 'react';

export const ItemDataContext = React.createContext([[], () => {}]);
ItemDataContext.displayName = 'ItemDataContext';

export const SearchFilterSortContext = React.createContext([[], () => {}]);
SearchFilterSortContext.displayName = 'SearchFilterSortContext';

export const CartContext = React.createContext([[], () => {}]);
CartContext.displayName = 'CartContext';
