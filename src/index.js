import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App () {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header () {
  const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style} >Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu () {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map(pizza => <Pizza pizza={pizza} key={pizza.name}></Pizza>)}
        </ul>
      ) : <p>We're still working on our menu. Please come back later.</p>}

      {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10} />
      <Pizza name='Pizza Funghi' ingredients='Tomato, mashrooms' price={12} photoName='pizzas/funghi.jpg'></Pizza> */}
    </main>
  );
}


function Pizza ({ pizza }) {     // <- This is JSX

  if (pizza.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </li>
  );
}

function Footer () {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert('We\'re currently open!');
  // else alert('Sorry we\'re closed!');

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour}></Order> : <p>We are happy to welcome you between <strong>{openHour}:00</strong> and <strong>{closeHour}:00</strong></p>}
    </footer >
  );
  // return React.createElement('footer', null, "We're currently open!");
}

function Order ({ closeHour }) {
  return (
    <div className="order">
      <p>
        We're open until <strong>{closeHour}:00</strong>. Visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}


// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root"));