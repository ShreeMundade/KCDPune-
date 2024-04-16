import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReservationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reservations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AccountingStates" source="accountingStates" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField label="ID" source="id" />
        <TextField label="ReservationIds" source="reservationIds" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
