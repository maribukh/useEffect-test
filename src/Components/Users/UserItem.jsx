import { useEffect, useState } from "react";

export default function userList() {
  const [data, setData] = useState([]); // აქ ყოველთვის მონაცემების დროს საჭიროა მასივი  []
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (show) {
    return (
      <>
        <div className="userList">
          <table>
            <thead>
              <tr>
                <th>სახელი</th>
                <th>გვარი</th>
                <th>მეილი</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
