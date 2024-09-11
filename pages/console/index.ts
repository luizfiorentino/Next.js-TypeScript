import React from "react";

export default function index() {
  let orderId = 0;

  // Create a Pizza object type, that includes a name and a price property

  type Pizza = {
    name: string;
    price: number;
  };
  const menu = [
    { name: "Marguerita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 8 },
    { name: "Marguerita", price: "ten" },
    { name: "Veggie", price: 9 },
  ];

  let myName: string = "Bob";
  let numberOfWheels: number = 4;
  let isStudent: boolean = false;
  myName = 1;

  // Move the nested address object type into a separate type definition

  type Address = {
    street: string;
    city: string;
    country: string;
  };

  type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    // address: {
    //   street: string;
    //   city: string;
    //   country: string;
    // };
    address: Address;
  };
  let person1: Person = {
    name: "John",
    age: 42,
    isStudent: false,
    address: {
      street: "Gioconda St.",
      city: "Boston",
      country: "Barbados",
    },
  };
  let cashInRegister = 100;
  const orderQueue = [];

  // Add utility function that takes a pizza object and adds it to the menu
  function addNewPizza(pizzaObject: Pizza) {
    if (!pizzaObject.name || !pizzaObject.price) {
      console.log("Please inform a name and a price for the new pizza");
      return;
    }
    menu.push = pizzaObject;
  }
  const newPizza = { name: "Peppolitanna", price: "ten" };
  addNewPizza(newPizza);
  console.log("menu", menu);

  // Write an utility function, placeOrder, that takes a pizza parameter and:
  // 1. finds that pizza object in the menu
  // 2. adds the income to the cashInRegister
  // 3. pushes a new "order object" to the orderQueue
  // eg. { pizza: selectedPizzaObjectFromStep1, status: "ordered"}
  // 4. Returns the new order object (just in case we need it later)
  function placeOrder(pizza: string) {
    const selectedPizza = menu.find((item) => item.name === pizza);
    console.log("selectedPizza", selectedPizza);
    if (!selectedPizza) {
      console.error("Not found");
      return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
      pizza: selectedPizza.name,
      status: "ordered",
      orderId: orderId + 1,
    };
    orderQueue.push(newOrder);
    return newOrder;
  }
  placeOrder("Marguerita");
  console.log("orderQueue", orderQueue, "cashInRegister", cashInRegister);

  // Write an utility function, completeOrder, that takes an orderId as a parameter
  // finds the correct order in the oderQueue, and makes its status as "completed".
  // For good measure return the found order from the function.
  // Use a global `nextOrderId` variable and increment it every time a new order
  // is created
  function completeOrder(orderId: number) {
    const foundOrder = orderQueue.find((item) => item.orderId === orderId);
    const indexOfOrder = orderQueue.findIndex(
      (item) => item.orderId === orderId
    );
    orderQueue[indexOfOrder].status = "completed";
    return foundOrder;
  }
  console.log("completeOrder:", completeOrder(1));
  addNewPizza({ name: "Chicken Ranch", price: 12 });
  addNewPizza({ name: "BBQ", price: 12 });
  addNewPizza({ name: "Spicy Sausage", price: 11 });
  placeOrder("Chicken Ranch");
  completeOrder(1);

  console.log("Menu:", menu);
  console.log("Cash in register", cashInRegister);
  console.log("Order queue", orderQueue);
  return (
    <div>
      <h1>App Explorer</h1>
    </div>
  );
}
