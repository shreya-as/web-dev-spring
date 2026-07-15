import { useState } from "react";
import { useEffect } from "react";

function Users() {
//   const users = [
//     { firstName: "Ram", lastName: "Khadka" },
//     { firstName: "Shyam", lastName: "Khadka" },
//     { firstName: "Hari", lastName: "Khadka" },
//   ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(data, "datadatadata");
  // imp: side effects life cycle
  useEffect(() => {
    // 2. Define an async function inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        // Fetch does not throw on 404/500 errors, so we handle it manually
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result, "result");
        setData(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <>Loading....</>;
  }
  return (
    <ul>
      {/* {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))} */}

      {data.map((user) => {
        console.log(user, "user");
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}
export default Users;
