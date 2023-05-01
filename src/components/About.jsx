import React from "react";
import { TbPlant } from "react-icons/tb";
import { BsBoxSeam, BsTelephoneOutbound } from "react-icons/bs";

const feature = [
  {
    id: 1,
    icon: <TbPlant />,
    title: "Large Assortment",
    description:
      "We offer many different types of products with fewer variations in each category.",
  },
  {
    id: 2,
    icon: <BsBoxSeam />,
    title: "Fast & Free Shipping",
    description:
      "4-day or less delivery time, free shipping and an expedited delivery option.",
  },
  {
    id: 3,
    icon: <BsTelephoneOutbound />,
    title: "24/7 Support",
    description:
      "Answers to any business related inquiry 24/7 and in real-time.",
  },
];

export default function About() {
  return (
    <>
      <div className="container text-center py-5">
        <h2>About us</h2>
        <p className="short-description">
          Order now and appreciate the beauty of nature
        </p>

        <div className="row">
          {feature.map((item) => {
            return (
              <div className="col-lg-4 px-5" key={item.id}>
                <div className="py-4 d-flex align-items-center justify-content-center">
                  <div className="fs-1 d-flex align-items-center justify-content-center feature-list">{item.icon}</div>
                </div>
                <p className="fw-bolder">{item.title}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
