import { useQueryClient } from "@tanstack/react-query";

interface ProductCartType {
  [id: string]: {
    quantity: number;
 }
}

const useCart = () => {
  const queryClient = useQueryClient();

  const setCart = (cart: ProductCartType) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    queryClient.invalidateQueries({ queryKey: ["cart-products"] });
  };

  const getCart = (): ProductCartType => {
    if (typeof window === 'undefined') {
      return {};
    }

    const cart = localStorage.getItem('cart');

    return JSON.parse(cart || '{}') as ProductCartType;
  };

  const addProductToCart = (id: number, quantity: number = 1) => {
    const cart = getCart();

    if (!cart[id]) {
      cart[id] = { quantity: 0 };
    }

    const prevQuantity = cart[id].quantity;
    cart[id].quantity = prevQuantity + quantity;

    setCart(cart);
  };
  
  const removeProductFromCart = (id: number) => {
    const cart = getCart();

    if (!cart[id]) {
      return;
    }

    delete cart[id];

    setCart(cart);

  };

  return {
    addProductToCart,
    removeProductFromCart,
    getCart
  }

}

export default useCart;
