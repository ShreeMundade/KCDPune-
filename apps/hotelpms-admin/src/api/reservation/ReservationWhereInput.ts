import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReservationWhereInput = {
  accountingStates?: JsonFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  reservationIds?: JsonFilter;
};
