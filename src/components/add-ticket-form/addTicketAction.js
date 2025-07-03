import {
  openNewTicketPending,
  openNewTicketSuccess,
  openNewTicketFail,
} from "./addTicketSlicer";
import { createNewTicket } from "../../api/ticketApi";

export const openNewTicket = (frmData) => async (dispatch) => {
  try {
    dispatch(openNewTicketPending());

    const result = await createNewTicket(frmData);

    if (result.status === "error") {
      dispatch(openNewTicketFail(result.message));
      return;
    }

    dispatch(openNewTicketSuccess(result.message));
  } catch (error) {
    console.log(error);
    dispatch(openNewTicketFail(error.message));
  }
};
