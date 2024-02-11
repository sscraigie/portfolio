"use client";
//Inspiration: https://dribbble.com/shots/19669977-Furniture-shop-checkout-page
import Image from "next/image";
import React from "react";
import { Delete } from "@mui/icons-material";
import CartItem from "./components/CartItem";
// import confetti from "https://esm.run/canvas-confetti@1";
import ReactCanvasConfetti from "react-canvas-confetti";
import Confetti from "./components/Confetti";

const ProductImg = ({
  image,
  onClick,
}: {
  image: string;
  onClick: () => void;
}) => {
  return (
    <Image
      onClick={onClick}
      src={`/d2/${image}.jpg`}
      alt="side"
      width={75}
      height={75}
    ></Image>
  );
};

const products = [
  { name: "Wooden Top Table", image: "table.jpg", price: 560 },
  { name: "Wooden Plywood Chair", image: "main.jpg", price: 600 },
  { name: "Single Lamb-Like Sofa", image: "sofa.jpg", price: 680 },
];

const DescriptionRow = ({
  children,
  title,
  text,
}: {
  title: string;
  children?: React.ReactNode;
  text?: string;
}) => (
  <>
    <b className="flex items-center">{title}</b>
    <p className="col-span-2">
      {children}
      {text}
    </p>
  </>
);

export default function Checkout() {
  const [image, setImage] = React.useState("main");
  const [fireConfetti, setFireConfetti] = React.useState(false);
  return (
    <div className="border-1 full flex h-screen flex-col md:flex-row">
      {/* ---------- Product ---------- */}
      <div className="flex flex-col border-r-2 border-r-slate-700 p-5 md:w-1/2">
        <div className="flex justify-between">
          <h3>Molded Plywood Chair</h3>
          <h3>$600.00</h3>
        </div>
        {/* Images  */}
        <div className="flex w-full flex-grow  items-center justify-center">
          <div className="flex  h-[300px] w-[500px]">
            <div className="flex h-full w-1/3 flex-col items-center justify-between ">
              {["side", "front", "back"].map((image) => (
                <ProductImg
                  key={image}
                  onClick={() => setImage(image)}
                  image={image}
                />
              ))}
            </div>
            <div className="flex w-2/3 items-center justify-center">
              <Image
                alt="main"
                src={`/d2/${image}.jpg`}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* Description Grid */}
        {/* Todo: Remake this in flexbox? */}
        <div className="grid grid-cols-3 gap-4">
          {/* <div className="flex items-center justify-around"> */}
          <DescriptionRow title="Colors">
            <div className="flex h-10 items-center justify-around">
              {["bg-slate-700", "bg-orange-800", "bg-gray-500"].map((color) => (
                <div
                  key={color}
                  className={`${color} h-8 w-8 rounded-full border-black shadow-md transition-all hover:h-10 hover:w-10`}
                />
              ))}
            </div>
          </DescriptionRow>
          <DescriptionRow
            title="Description"
            text=" Wooden chair with 3 stands, super aesthetic and made to suit every modern home. Specially made with plywood fabric upholstery & cushion material. Suitable for living rooms & lounge. Available in different colors"
          />
        </div>
        <div className="my-5 flex h-0.5 w-full rounded bg-gray-300 md:hidden "></div>
      </div>
      <div className="display-none flex h-full w-0.5 rounded bg-gray-300 "></div>
      {/* ---------- Cart ---------- */}
      <div className="flex  flex-col justify-between p-5 md:w-1/2">
        <div className="flex justify-between">
          <h3>Cart</h3>
          <button className="border-none bg-transparent">
            <Delete />
          </button>
        </div>
        <div className="flex grow flex-col gap-5">
          {products.map((product) => (
            <CartItem
              name={product.name}
              price={product.price}
              image={product.image}
              key={product.name}
            />
          ))}
        </div>
        {/* Todo: Have item quantity update the price */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$184.00</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>$78.00</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>$1918.00</p>
        </div>
        {/* <Confetti
          // Props to control the confetti animation
          particleCount={100}
          spread={160}
          // Other props...
        /> */}
        {fireConfetti && <Confetti />}
        <button
          onClick={() => {
            setFireConfetti(!fireConfetti);
            // alert("Checkout successful!!");
          }}
          className=" h-10  w-full rounded-md border-none bg-slate-950  text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
