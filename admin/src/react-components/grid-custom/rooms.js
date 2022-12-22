/* eslint-disable no-unused-vars */
import React from "react";
import { SceneLink } from "../fields";

import {
  DateField,
  List,
  TextInput,
  Datagrid,
  TextField,
  Filter
} from "react-admin";

const RoomFilter = props => (
  <Filter {...props}>
    <TextInput label="Search SID" source="hub_sid" alwaysOn />
  </Filter>
);

export const RoomList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="Hub SID" source="hub_sid" />
      <DateField label="Created At" source="inserted_at" />
    </Datagrid>
  </List>
);
