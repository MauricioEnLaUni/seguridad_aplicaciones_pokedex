import Logged from "./Logged";
import NotLogged from "./NotLogged";

const AuthComponents = () => {
    const auth = false;

    return <div>{auth ? <Logged /> : <NotLogged />}</div>;
};

export default AuthComponents;
