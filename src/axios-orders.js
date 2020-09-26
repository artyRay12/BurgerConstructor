import Axios from "axios";

const instance = Axios.create({
    baseURL: "https://react-burger-b190a.firebaseio.com/",
});

export default instance;
