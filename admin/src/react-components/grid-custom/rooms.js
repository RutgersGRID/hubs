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
    <TextInput label="Search Name" source="name" alwaysOn />
  </Filter>
);

export const RoomList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <DateField label="Created At" source="inserted_at" />
    </Datagrid>
  </List>
);
