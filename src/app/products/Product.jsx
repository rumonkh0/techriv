"use client";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductTabs } from "./ProductTabs";

export default function ProductSection() {
  const [active, setActive] = useState("All Product");

  const products = [
    {
      category: "Website",
      image: "/images/product.png",
      title: "Starter Website",
      subtitle: "Perfect for small businesses",
      rating: 4,
      reviews: 24,
      features: [
        "5 Pages",
        "Mobile Responsive",
        "Basic SEO",
        "Contact Form",
        "1 Month Support",
      ],
      price: "$2,500",
    },
    {
      category: "Website",
      image: "/images/product.png",
      title: "Professional Website",
      subtitle: "Ideal for established businesses",
      rating: 5,
      reviews: 42,
      features: [
        "15 Pages",
        "Advanced SEO",
        "Blog System",
        "Analytics",
        "3 Months Support",
      ],
      price: "$5,000",
    },
    {
      category: "Website",
      image: "/images/product.png",
      title: "E-Commerce Store",
      subtitle: "Online shopping solution",
      rating: 4,
      reviews: 18,
      features: [
        "Unlimited Products",
        "Payment Gateway",
        "Inventory System",
        "Order Management",
        "6 Months Support",
      ],
      price: "$8,000",
    },
    {
      category: "Website",
      image: "/images/product.png",
      title: "E-Commerce Store",
      subtitle: "Online shopping solution",
      rating: 4,
      reviews: 18,
      features: [
        "Unlimited Products",
        "Payment Gateway",
        "Inventory System",
        "Order Management",
        "6 Months Support",
      ],
      price: "$8,000",
    },
    {
      category: "Website",
      image: "/images/product.png",
      title: "E-Commerce Store",
      subtitle: "Online shopping solution",
      rating: 4,
      reviews: 18,
      features: [
        "Unlimited Products",
        "Payment Gateway",
        "Inventory System",
        "Order Management",
        "6 Months Support",
      ],
      price: "$8,000",
    },
    {
      category: "Design",
      image: "/images/product.png",
      title: "E-Commerce Design",
      subtitle: "Online shopping solution",
      rating: 4,
      reviews: 18,
      features: [
        "Unlimited Products",
        "Payment Gateway",
        "Inventory System",
        "Order Management",
        "6 Months Support",
      ],
      price: "$8,000",
    },
    {
      category: "Marketing",
      image: "/images/product.png",
      title: "E-Commerce Marketing",
      subtitle: "Online shopping solution",
      rating: 4,
      reviews: 18,
      features: [
        "Unlimited Products",
        "Payment Gateway",
        "Inventory System",
        "Order Management",
        "6 Months Support",
      ],
      price: "$8,000",
    },
  ];

  const filtered =
    active === "All Product"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section className="pb-20 bg-[#F3F6FF]">
      {/* Tabs */}
      <ProductTabs active={active} setActive={setActive} />

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {filtered.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
