import { InputJsonValue } from "../../types";

export type ReservationCreateInput = {
  accountingStates?: InputJsonValue;
  currency?: string | null;
  reservationIds?: InputJsonValue;
};
