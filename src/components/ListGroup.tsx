//what the fragment does is that it allows us to group a list of children without adding extra nodes to the DOM.
//we can import the fragment or use the empty tag <> </> to create a fragment
//hooks are functions that let us hook into the react state and lifecycle features from function components
//props are immutable, we can't change them
//interface is a way to define a type in typescript
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   //event handler
  //   const handleclick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h3>{heading}</h3>

      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
