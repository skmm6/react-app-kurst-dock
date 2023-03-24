function Item({ name, isPacked }) {
  //   if (isPacked) {
  //     // return <li className="item">{name} ✔</li>;
  //     return null;
  //   }
  //   let itemContent = name;
  //   if (isPacked) {
  //     itemContent = name + " ✔";
  //   }
  //   if (isPacked) {
  //     itemContent = <del>{name + " ✔"}</del>;
  //   }

  return (
    <li className="item">
      {/* {isPacked ? <del>{name + " ✔"}</del> : name + " 🤷‍♂️"} */}
      {/* {name} {isPacked && "✔"} */}
      {/* {itemContent} */}
      {name} {isPacked ? "✔" : "⛔"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// const drinks = {
//     tea: {
//       part: 'leaf',
//       caffeine: '15–70 mg/cup',
//       age: '4,000+ years'
//     },
//     coffee: {
//       part: 'bean',
//       caffeine: '80–185 mg/cup',
//       age: '1,000+ years'
//     }
//   };

//   function Drink({ name }) {
//     const info = drinks[name];
//     return (
//       <section>
//         <h1>{name}</h1>
//         <dl>
//           <dt>Part of plant</dt>
//           <dd>{info.part}</dd>
//           <dt>Caffeine content</dt>
//           <dd>{info.caffeine}</dd>
//           <dt>Age</dt>
//           <dd>{info.age}</dd>
//         </dl>
//       </section>
//     );
//   }

//   export default function DrinkList() {
//     return (
//       <div>
//         <Drink name="tea" />
//         <Drink name="coffee" />
//       </div>
//     );
//   }
