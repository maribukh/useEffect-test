import { createElement, useEffect, useState } from "react";
import "./UserItem.css";

export default function UserList() {
  const [data, setData] = useState([]); // აქ ყოველთვის მონაცემების დროს საჭიროა მასივი  []
  const [show, setShow] = useState(false);
  const [expandedID, setExpandedID] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function Details(id) {
    if (!expandedID) {
      return (
        <span
          className="material-symbols-outlined"
          onClick={() => setExpandedID(true)}
        >
          arrow_drop_up
        </span>
      );
    } else {
      return (
        <span
          className="material-symbols-outlined"
          onClick={() => setExpandedID(false)}
        >
          arrow_drop_down
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
                  <td onClick={() => setExpandedID(!expandedID)}>
                    <div className="details">
                      <Details />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-hidden" onClick={() => setShow(false)}>
            Hide All
          </button>
        </div>
        ;
      </>
    );
  }

  return (
    <>
      <button onClick={() => setShow(true)}>Show All</button>
    </>
  );
}
