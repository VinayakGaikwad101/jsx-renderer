import { createVirtualDOM, render } from "./renderer.js";

const virtualDOM = createVirtualDOM(
  "div",
  { id: "my-id", class: "my-class" },
  createVirtualDOM(
    "h1",
    { id: "h1-id", class: "h1-class" },
    "Hello, this is h1 inside div"
  ),
  createVirtualDOM(
    "p",
    { id: "p-id", class: "p-class" },
    "Hello, this is p inside div"
  )
);

const dom = render(virtualDOM);

document.body.appendChild(dom);
