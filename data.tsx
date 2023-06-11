import React from "react";

const Component = ({ text }) => {
  return (
    <div>
      <h1 className="title">{text}</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quisquam
        vitae voluptate accusamus aliquid veniam ullam, suscipit nisi harum modi
        officiis eveniet atque, temporibus non? Quasi obcaecati iure totam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        voluptatibus corrupti, ut sapiente maiores facilis. doloremque!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ad
        architecto autem expedita, provident ex tenetur assumenda aliquid
        dignissimos, eaque pariatur vero mollitia.
      </p>
    </div>
  );
};

export const data = [
  {
    name: "first tab",
    component: <Component text="Component One" />,
  },
  {
    name: "second tab",
    component: <Component text="Component Two" />,
  },
  {
    name: "third tab",
    component: <Component text="Component Three" />,
  },
];
