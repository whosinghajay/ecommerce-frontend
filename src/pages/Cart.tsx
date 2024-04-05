import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const cartItem = [
  {
    productId: "ajajajaja",
    photo:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-config-202402?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1708371033110",
    name: "max",
    price: 3000,
    quantity: 40,
    stock: 320,
  },
];
const subtotal = 100;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 123;
const total = subtotal + shippingCharges + tax;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItem.length > 0 ? (
          cartItem.map((i, idx) => <CartItems key={idx} cartItem={i} />)
        ) : (
          <h1>No item added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: INR {subtotal}</p>
        <p>Shipping Charges: INR {shippingCharges}</p>
        <p>Tax: INR {tax}</p>
        <p>
          Discount: <em className="red">- INR {discount}</em>
        </p>
        <p>
          <b>Total: INR {total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              INR {discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItem.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
