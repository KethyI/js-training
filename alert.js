// task1
let user = {
  name: "Іван Іванов",
  age: 35
};

let json = JSON.stringify(user);
let obj = JSON.parse(json);

// task2
let room = {
  number: 23
};

let meetup = {
  title: "Конференція",
  occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
  place: room
};

// циклічне посилання
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  if (value === meetup) return undefined;
  return value;
}));

/* результат повинен бути:
{
  "title":"Конференція",
  "occupiedBy":[{"name":"Іван"},{"name":"Аліса"}],
  "place":{"number":23}
}
*/