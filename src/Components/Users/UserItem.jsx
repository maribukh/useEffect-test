import { useEffect, useState } from "react";
import "./UserItem.css";

export default function UserList() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [expandedID, setExpandedID] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function Details(id) {
    if (expandedID === id) {
      return (
        <span
          className="material-symbols-outlined"
          onClick={() => setExpandedID(null)}
          style={{ cursor: "pointer" }}
        >
          arrow_drop_down
        </span>
      );
    } else {
      return (
        <span
          className="material-symbols-outlined"
          onClick={() => setExpandedID(id)}
          style={{ cursor: "pointer" }}
        >
          arrow_drop_up
        </span>
      );
    }
  }

  if (show) {
    return (
      <>
        <div className="userList">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    {Details(item.id)}
                    {expandedID === item.id && (
                      <div className="address-details">
                        <div>{item.address.street}</div>
                        <div>{item.address.suite}</div>
                        <div>{item.address.city}</div>
                        <div>{item.address.zipcode}</div>
                        <div>
                          Geo:
                          <div>{item.address.geo.lat}</div>
                          <div>{item.address.geo.lng}</div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-hidden" onClick={() => setShow(false)}>
            Hide All
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={() => setShow(true)}>Show All</button>
    </>
  );
}
