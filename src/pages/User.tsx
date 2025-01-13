import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <h1>
      User with id {userId}
    </h1>
  );
}
export default User;