import { useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem"

export default function List(props) {
  const { handlerSelectItem, selectedItem } = props;
  const [list, setList] = useState([]);

  const listUrl = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  useEffect(() => {
    fetch(listUrl)
      .then(response => response.json())
      .then(data => {
        setList(data);
      })
  }, [])

  return (
    <div>
      <ul className="list">
        {list.map(item => <ListItem key={item.id} item={item} selectedItem={selectedItem} handlerSelectItem={handlerSelectItem} />)}
      </ul>
    </div>
  )
}