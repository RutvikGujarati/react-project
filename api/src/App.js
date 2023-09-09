import { useState, useEffect } from "react";
import ApiCall from "./api/ApiCall";
import RandomUser from "./api/Userapi";
import Card from "./api/Card";
import UserCard from "./api/UserCard";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  //const [loading, setLoading]= useState();

  useEffect(() => {
    ApiCall().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    RandomUser().then((user) => setUserData(user.results));
  });

  // console.log(userData)

  return (
    <div className="postCard">
     {}
      {data ? (
        data.map((e) => <Card Title={e.title} Body={e.body} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
  //  <ApiCall />
}

export default App;
