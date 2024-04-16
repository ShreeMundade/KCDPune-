import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  accountingStates?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  reservationIds?: SortOrder;
  updatedAt?: SortOrder;
};
