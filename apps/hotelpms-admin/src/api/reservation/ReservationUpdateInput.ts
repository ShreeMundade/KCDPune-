import { InputJsonValue } from "../../types";

export type ReservationUpdateInput = {
  accountingStates?: InputJsonValue;
  currency?: string | null;
  reservationIds?: InputJsonValue;
};
