import React from "react";
import { Resource } from "react-admin";

import { RoomList } from "./rooms";

export function GRIDResources() {
    <Resource name="hubs" list={RoomList} options={{ label: "Rooms" }} />
}