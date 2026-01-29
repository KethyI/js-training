// task1
let messages = [
  {text: "Привіт", from: "Іван"},
  {text: "Як справи?", from: "Іван"},
  {text: "До зустрічі", from: "Аліса"}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);

alert (`Message is read: ` + readMessages.has(messages[0]));

// task2
let readMessagesDate = new WeakMap();
readMessagesDate.set(messages[0], new Date(2026, 1, 1));