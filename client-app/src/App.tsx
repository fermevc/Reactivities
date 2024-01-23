import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/activities")
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <Header as="h2" icon="users" content="Reactivities" />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    </>
  );
}

export default App;
