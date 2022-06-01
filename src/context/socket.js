import React from "react";
import { io } from "socket.io-client";
const URL = 'http://localhost:4000';

export const socket = io.connect(URL);
export const SocketContext = React.createContext();