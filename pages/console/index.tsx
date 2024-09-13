import React from "react";

type Pizza = {
  id: number;
  name: string;
  price: number;
};

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

// Add an Order type with id, pizza, and status properties
// Use literal types and unions to update Order status to be only "ordered" or "completed"
type Order = {
  id: number;
  pizza: Pizza;
  // status: string;
  status: "ordered" | "completed";
};

type UserRole = "guest" | "member" | "admin";

type User = {
  id: number;
  userName: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextPizzaId = 1;
let nextUserId = 1;

let menu: Array<Pizza> = [
  { id: nextPizzaId++, name: "Marguerita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 8 },
  { id: nextPizzaId++, name: "Marguerita", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

console.log("MENU", menu);

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  console.log("function called", identifier);
  if (typeof identifier === "string") {
    console.log("called as string");
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    return menu.find((pizza) => pizza.id === identifier);
  }
}

const users: User[] = [
  { id: nextUserId++, userName: "Joe Margolis", role: "member" },
  { id: nextUserId++, userName: "Jane Doe", role: "admin" },
  { id: nextUserId++, userName: "Kaf Pergolis", role: "guest" },
];

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget === target);
// // Expected output: true
function updateUser(id: number, updates: UpdatedUser) {
  const user = users.find((user) => user.id === id);
  if (!user) {
    console.error("User not found");
    return;
  }
  const updatedUser = Object.assign(user, updates);
  return updatedUser;
}

// console.log("USER", updateUser(2, { id: 10, role: "guest" }));
// console.log("USER", updateUser(1, { id: 10, userName: "Janette Mamam" }));

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.userName === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = { ...newUser, id: nextUserId++ };
  users.push(user);
  return user;
}
addNewUser({ userName: "Jim Schmoe", role: "member" });
console.log("USERSS", users);
export default function index() {
  let orderId = 1;

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

  // Create an array of people objects and manually type it as an array of Person types
  let people: Person[] = [person1, person2];
  //also (same): another syntax
  Array<Person>;

  function addNewPizza(pizzaObject: Pizza): void {
    pizzaObject.id = nextPizzaId++;
    menu.push(pizzaObject);
  }
  const newPizza: Pizza = { id: 6, name: "Peppolitanna", price: 14 };
  addNewPizza(newPizza);
  console.log("menu", menu);

  // Write an utility function, placeOrder, that takes a pizza parameter and:
  // 1. finds that pizza object in the menu
  // 2. adds the income to the cashInRegister
  // 3. pushes a new "order object" to the orderQueue
  // eg. { pizza: selectedPizzaObjectFromStep1, status: "ordered"}
  // 4. Returns the new order object (just in case we need it later)
  function placeOrder(pizza: string): Order | undefined {
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
  function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
      console.error(`${orderId} not found in the orderQueue`);
      return;
    }
    order.status = "completed";
    return order;
  }

  // Create an utility function getPizzaDetail that takes a parameter called `identifier`
  // that is either the string name of the pizza or its id

  //console.log("selected pizza", getPizzaDetail("hawaiian"));

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

  // let myName: string = "Bob";
  // let numberOfWheels: number = 4;
  // let isStudent: boolean = false;
}
