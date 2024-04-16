import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "currency";

export const ReservationTitle = (record: TReservation): string => {
  return record.currency?.toString() || String(record.id);
};
