// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

import { getImageUrl } from "./utils";

// export default function RenderingLists() {
//   const listItems = people.map((person) => <li>{person}</li>);
//   return <ul>{listItems}</ul>;
// }

const people = [
  {
    id: 0, // Used in JSX as a key
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1, // Used in JSX as a key
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2, // Used in JSX as a key
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3, // Used in JSX as a key
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4, // Used in JSX as a key
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

// export default function RenderingLists() {
//   // const chemist = people.filter((person) => person.profession === "chemist");

//   // const listItems = chemist.map((person) => (
//   //   <li key={person.id}>
//   //     <img src={getImageUrl(person)} alt={person} />
//   //     <p>
//   //       <b>{person.name}:</b>
//   //       {" " + person.profession + " "}
//   //       know for {person.accomplishment}
//   //     </p>
//   //   </li>
//   // ));

//   const listItems = people.map((person) => {
//     // const uuid = self.crypto.randomUUID();
//     // console.log(uuid);
//     return (
//       // <li key={uuid}>
//       <li key={person.id}>
//         <img src={getImageUrl(person)} alt={person} />
//         <p>
//           <b>{person.name}:</b>
//           {" " + person.profession + " "}
//           know for {person.accomplishment}
//         </p>
//       </li>
//     );
//   });

//   return <ul>{listItems}</ul>;
// }

// TODO 1 задание
// В этом примере показан список всех пользователей.
// Измените его, чтобы показывать два отдельных списка один за другим: химики и все остальные.Как и ранее, вы можете определить, является ли человек химиком, проверив, является лиperson.profession === 'chemist'.

function ListItemsChemist({ people }) {
  const chemist = people.filter((person) => person.profession === "chemist");
  const listItemsChemist = chemist.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItemsChemist}</ul>;
}

function AllList({ people }) {
  const allPeople = people.filter((person) => person.profession !== "chemist");

  const listItemsAll = allPeople.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItemsAll}</ul>;
}

export default function RenderingLists() {
  // const listItemsChemist = chemist.map((person) => (
  //   <li key={person.id}>
  //     <img src={getImageUrl(person)} alt={person.name} />
  //     <p>
  //       <b>{person.name}:</b>
  //       {" " + person.profession + " "}
  //       known for {person.accomplishment}
  //     </p>
  //   </li>
  // ));
  return (
    <>
      <article>
        <h1>Scientists</h1>
        <ListItemsChemist people={people} />
        <AllList people={people} />
      </article>
    </>
  );
}

// TODO 2
/*
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

//  TODO 3 
import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

 */

// const poem = {
//   lines: [
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };

// export default function Poem() {
//   let output = [];

//   // Fill the output array
//   poem.lines.forEach((line, i) => {
//     output.push(
//       <hr key={i + '-separator'} />
//     );
//     output.push(
//       <p key={i + '-text'}>
//         {line}
//       </p>
//     );
//   });
//   // Remove the first <hr />
// output.shift(); //удалает и возвращает 1 элемент из массива

//   return (
//     <article>
//       {output}
//     </article>
//   );
// }
