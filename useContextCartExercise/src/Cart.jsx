import { useCart } from "./cart-context";

export function Cart() {
  const { items } = useCart();
  return <h1>Items in cart {items}</h1>;
}
