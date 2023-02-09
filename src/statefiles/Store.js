import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "./reducers/Userreducer";
import thunk from "redux-thunk";
const middleware=thunk
export const store=configureStore({reducer:Userreducer,middleware:[middleware]})