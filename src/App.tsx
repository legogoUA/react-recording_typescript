import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// import { useReducer, useState } from 'react';

// interface Action {
//   type: string;
// }

// // const actions: Action[] = [
// //   { type: 'increase'},
// //   { type: 'increase'},
// //   { type: 'increase'},
// //   { type: 'increase'},
// //   { type: 'increase'},  
// //   { type: 'increase'},  
// //   { type: 'increase'},  
// //   { type: 'increase'},  

// // ];

// // function logAction(action: Action) {
// //   actions.push(action);
// //   console.log(actions);
// // }

// function reducer(amount: number, action: Action) {
//   switch (action.type) {
//     case 'decrease': 
//       return amount - 1;
//     case 'increase':
//       return amount + 1;
//     default: 
//       return amount;
//   }
// }

// console.log(
//   actions.reduce(reducer, 20)
// );

// export const App = () => {
//   const [amount, dispatch] = useReducer(reducer, 3); // useReducer

//   const decrease = () => {
//     // setAmount(x => x - 1);
//     dispatch({ type: 'decrease' });
//   };

//   const increase = () => {
//     // setAmount(x => x + 1);
//     dispatch({ type: 'increase' });
//   };

//   return (
//     <main>
//       <button onClick={decrease}>-</button>
//       {amount}
//       <button onClick={increase}>+</button>
//     </main>
//   );
// };