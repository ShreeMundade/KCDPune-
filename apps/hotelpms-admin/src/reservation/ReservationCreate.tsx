import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Currency" source="currency" />
        <div />
      </SimpleForm>
    </Create>
  );
};
