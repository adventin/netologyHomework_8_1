export default function ListItem(props) {
  const { item, selectedItem, handlerSelectItem } = props;

  return (
    <li className={selectedItem?.id === item.id ? 'list-item active' : 'list-item'} onClick={() => handlerSelectItem(item)}>{item.name}</li>
  )
}