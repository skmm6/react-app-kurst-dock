// function Clock({ time }) {
//   let hours = time.getHours();
//   return (
//     <h1 className={hours >= 0 && hours <= 6 ? "night" : "day"} id="time">
//       {time.toLocaleTimeString()}
//     </h1>
//   );
// }
// или

function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return (
    <h1 className={className} id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
}

export default function ClockRender() {
  let time = new Date();
  return (
    <>
      <Clock time={time} />
    </>
  );
}
/*

// 
Обратите внимание, что всякий раз, когда часы обновляются, “Создать историю” добавляется дважды. Это служит намеком на то, что у нас есть мутация во время рендеринга — строгий режим вызывает компоненты дважды, чтобы сделать эти проблемы более заметными.

StoryTray функция не является чистой. Вызывая push полученный stories массив (реквизит!), он изменяет объект, который был создан до StoryTray начала рендеринга. Это приводит к сбоям и очень трудному прогнозированию.

Самое простое исправление - вообще не трогать массив и отображать “Создать историю” отдельно:
В качестве альтернативы, вы могли бы создать новый массив (скопировав существующий), прежде чем вставлять в него элемент:
export default function StoryTray({ stories }) {
  // Copy the array!
  let storiesToDisplay = stories.slice();

  // Does not affect the original array:
  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {storiesToDisplay.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
Это сохраняет вашу локальную мутацию и вашу функцию рендеринга в чистоте. Однако вам все равно нужно быть осторожным: например, если вы попытаетесь изменить какой-либо из существующих элементов массива, вам также придется клонировать эти элементы.

Полезно помнить, какие операции над массивами изменяют их, а какие нет. Например, push, pop, reverse и sort изменит исходный массив, но slice, filter и map создаст новый.
 */
