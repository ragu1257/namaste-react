import { useContext } from "react";
import UserContext from "../utils/UserContext";

function Footer() {
  const { loggedInUSer, setUserName } = useContext(UserContext);
  return (
    <div>
      <p>this is footer of {loggedInUSer}</p>;
      <input
        type="text"
        value={loggedInUSer}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
}

export default Footer;
