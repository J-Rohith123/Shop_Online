import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "./reducers/Userreducer";

export const store=configureStore({reducer:Userreducer})