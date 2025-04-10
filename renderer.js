// nodeName = type of element, eg: "p", "div", "h1", etc
// attributes = object with key value pairs for the node/element, eg: {"class": "my-class", "id": "my-id"}
// ...children = rest parameter, bundles up all arguments after attribute object and convert them into a single array called "children", eg:
// function greetEveryone(greeting, ...names) {
// return names.map(name => `${greeting}, ${name}!`).join('\n');
// }

// Testing the function:
// console.log(greetEveryone('Hello', 'Vinayak', 'Priya', 'Rahul'));
// Output:
// Hello, Vinayak!
// Hello, Priya!
// Hello, Rahul!

// console.log(greetEveryone('Good morning', 'Alice', 'Bob'));
// Output:
// Good morning, Alice!
// Good morning, Bob!

function createVirtualDOM(nodeName, attributes, ...children) {
  return { nodeName, attributes, children };
}

function render(virtualNode) {
  // to handle plain text
  if (typeof virtualNode === "string") {
    return document.createTextNode(virtualNode);
  }
  //   create element based on nodeName like div, h1, p
  const element = document.createElement(virtualNode.nodeName);

  //   apply attributes to the element
  const attributes = virtualNode.attributes || {};
  Object.keys(attributes).forEach((attribute) => {
    element.setAttribute(attribute, attributes[attribute]);
  });
  (virtualNode.children || []).forEach((child) => {
    element.appendChild(render(child));
  });

  // return completed DOM element
  return element;
}

export { createVirtualDOM, render };
