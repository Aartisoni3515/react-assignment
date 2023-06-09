import { createStoreHook } from "react-redux";
import reducer from "./reducer";
const store = createStoreHook(reducer);
export default store;
