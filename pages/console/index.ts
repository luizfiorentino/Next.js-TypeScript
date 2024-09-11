import React from "react";

export default function index() {
  let orderId = 1;

  // Create a Pizza object type, that includes a name and a price property
  type Pizza = {
    name: string;
    price: number;
  };
  let menu: Array<Pizza> = [
    { name: "Marguerita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 8 },
    { name: "Marguerita", price: 10 },
    { name: "Veggie", price: 9 },
  ];

  let myName: string = "Bob";
  let numberOfWheels: number = 4;
  let isStudent: boolean = false;

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
    address?: Address;
  };
  let person1: Person = {
    name: "John",
    age: 42,
    isStudent: false,
    // address: {
    //   street: "Gioconda St.",
    //   city: "Boston",
    //   country: "Barbados",
    // },
  };
  let person2: Person = {
    name: "Marry",
    age: 33,
    isStudent: true,
  };
  let cashInRegister = 100;
  const orderQueue: Order[] = [];

  function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`);
  }
  displayInfo(person1);

  // Use literal types and unions to update Order status to be only "ordered" or "completed"

  // Add an Order type with id, pizza, and status properties
  type Order = {
    id: number;
    pizza: Pizza;
    // status: string;
    status: "ordered" | "completed";
  };

  // Create an array of people objects and manually type it as an array of Person types

  let people: Person[] = [person1, person2];
  //also (same): another syntax
  Array<Person>;
  // Add utility function that takes a pizza object and adds it to the menu
  function addNewPizza(pizzaObject: Pizza) {
    menu.push(pizzaObject);
  }
  const newPizza: Pizza = { name: "Peppolitanna", price: 14 };
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
    //console.log("selectedPizza", selectedPizza);
    if (!selectedPizza) {
      console.error("Not found");
      return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = {
      id: orderId++,
      pizza: selectedPizza,
      status: "ordered",
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
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
      console.error(`${orderId} not found in the orderQueue`);
      return;
    }
    order.status = "completed";
    return order;
  }

  addNewPizza({ name: "Chicken Ranch", price: 12 });
  addNewPizza({ name: "BBQ", price: 12 });
  addNewPizza({ name: "Spicy Sausage", price: 11 });
  console.log("menu", menu);
  placeOrder("Chicken Ranch");
  placeOrder("BBQ");
  console.log("orderQueue", orderQueue);
  completeOrder(1);
  console.log("completeOrder:", completeOrder(1));
  console.log("completeOrder:", completeOrder(3));
  console.log("Menu:", menu);
  console.log("Cash in register", cashInRegister);
  console.log("Order queue", orderQueue);

  type UserRole = "gest" | "admin";
  let userRole: UserRole = "admin";
  type User = {
    userName: string;
    role: UserRole;
  };

  // return (
  //   // <div>
  //   //   <h1>App Explorer</h1>
  //   // </div>
  // );
}
