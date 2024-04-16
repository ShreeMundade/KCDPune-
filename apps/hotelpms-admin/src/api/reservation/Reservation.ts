import { JsonValue } from "type-fest";

export type Reservation = {
  accountingStates: JsonValue;
  createdAt: Date;
  currency: string | null;
  id: string;
  reservationIds: JsonValue;
  updatedAt: Date;
};
