import { useState } from "react";
import contactService from "../services/contact";

export default function useContact() {
  const [stateSend, setStateSend] = useState({
    loadingSend: false,
    errorSend: null,
    dataSend: null,
  });
  
  const create = (newObject) => {
    setStateSend({ loadingSend: true, errorSend: null });
    contactService
      .create(newObject)
      .then((data) => {
        setStateSend({
          loadingSend: false,
          errorSend: null,
          dataSend: data.status,
        });
      })
      .catch((err) => {
        setStateSend({ loadingSend: false, errorSend: err, dataSend: null });
      });
  };

  return {
    isLoadingSend: stateSend.loadingSend,
    hasErrorSend: stateSend.errorSend,
    dataSend: stateSend.dataSend,
    successSend: Boolean(stateSend.dataSend),
    create,
  };
}
