import { useState } from "react"
import { useEffect } from "react"

export default function Details(props) {

  const [detailsData, setDetailsData] = useState({});
  const { item } = props;

  useEffect(() => {
    const detailsUrl = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json`;

    fetch(detailsUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDetailsData(data);
      });
  }, [item])

  return (
    <div className="details">
      <div className="card">
        <div className="card-image" style={{ backgroundImage: `url(${detailsData.avatar})` }} />
        <div className="card-title">{detailsData.name}</div>
        <div className="list">
          <div className="list-item">City: {detailsData?.details?.city}</div>
          <div className="list-item">Company: {detailsData?.details?.company}</div>
          <div className="list-item">Position: {detailsData?.details?.position}</div>
        </div>
      </div>
    </div>
  )
}