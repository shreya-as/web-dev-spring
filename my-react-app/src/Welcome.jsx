// functional component

import Users from "./Users";

// TODO: class component ,component lifecycle concept
function Welcome(props) {
  console.log(props, "props");
  return (
    <>
      <div>Welcome {props.firstName}</div>
      <Users />
    </>
  );
}
export default Welcome;
