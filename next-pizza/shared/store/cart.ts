export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  /* Receiving goods from the cart */
  fetchCartItems: () => Promise<void>;

  /* Request for updating the amount of goods */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Request to add goods to the cart */
  addCartItem: (values: CreateCartItemValues) => Promise<void>;

  /* Request for the removal of goods from the cart*/
  removeCartItem: (id: number) => Promise<void>;
}