type IChild = Node | string | null | undefined;

function appendChild(elm: Node, child: IChild) {
  if (typeof child === 'string') {
    elm.appendChild(document.createTextNode(child.toString()));
  } else if (
    child !== null &&
    child !== undefined &&
    typeof child !== 'boolean'
  ) {
    elm.appendChild(
      (child as HTMLElement).nodeType == null
        ? document.createTextNode(child.toString())
        : child
    );
  }
}

export { appendChild };
