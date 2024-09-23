import { useState } from "react";
import { Input, CartProduct } from "./../../Components/export";
import { useStateContext } from "../../Contexts/ContextProvider";
export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [coupon, setCoupon] = useState({
    coupon: "",
  });
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  const [update, setUpdate] = useState(true);
  const { cartProductsTotal } = useStateContext();
  return (
    <div className="container mx-auto flex gap-6 items-start p-6">
      <div className="space-y-4">
        <div className="bg-white max-w-lg ">
          <h1 className="bg-primary text-dark font-bold text-xl py-2 px-4 rounded-t-md capitalize">
            delivery address
          </h1>
          <form className="space-y-4 p-4">
            <Input
              isFirst={true}
              type="text"
              placeholder="Name"
              name="name"
              form={form}
              setForm={setForm}
              value={form.name}
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              form={form}
              setForm={setForm}
              value={form.email}
            />
            <Input
              type="text"
              placeholder="Address"
              name="address"
              form={form}
              setForm={setForm}
              value={form.address}
            />
            <Input
              type="text"
              placeholder="Phone Number"
              name="phone"
              form={form}
              setForm={setForm}
              value={form.phone}
            />
          </form>
        </div>
        <div className="bg-white rounded-lg">
          <h1 className="bg-primary text-dark font-bold text-xl py-2 px-4 rounded-t-md capitalize">
            coupon code
          </h1>
          <div className="p-4">
            <Input
              type="text"
              placeholder="Coupon Code"
              form={coupon}
              setForm={setCoupon}
              value={coupon.coupon}
              name="coupon"
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 pt-2 w-2/3 ">
        <h1 className="text-dark font-bold text-xl py-2 rounded-t-md capitalize border-b border-border">
          order summary
        </h1>
        <div className="">
          <div className="p-3 min-h-64 max-h-[25rem] overflow-y-auto">
            {cartProducts.map((product, index) => (
              <CartProduct
                product={product}
                setUpdate={setUpdate}
                key={index}
              />
            ))}
          </div>
          <div className="flex justify-between text-dark text-2xl font-bold items-center border-b border-border pb-2 mt-2">
            <div className="">Total:</div>
            <div>${cartProductsTotal}</div>
          </div>
        </div>
        <button className="uppercase bg-primary rounded text-lg font-bold text-dark w-full p-2 mt-6 mb-2 hover:opacity-95">
          place order
        </button>
      </div>
    </div>
  );
}
