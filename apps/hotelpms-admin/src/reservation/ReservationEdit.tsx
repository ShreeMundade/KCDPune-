import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Currency" source="currency" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
