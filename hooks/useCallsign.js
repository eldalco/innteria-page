import { useCallback, useContext, useState } from "react";
import callsign from "../services/callsign";

export default function UseCallsign() {
  
  const [stateGet, setStateGet] = useState({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const get = useCallback(() => {
    setStateGet({ loadingGet: true, errorGet: null });
    callsign
      .get("")
      .then((data) => {
        setStateGet({
          loadingGet: false,
          errorGet: null,
          dataGet: data.body,
        });
      })
      .catch((err) => {
        setStateGet({ loadingGet: false, errorGet: err, dataGet: null });
      });
  }, []);

  return {
    isLoadingGet: stateGet.loadingGet,
    hasErrorGet: stateGet.errorGet,
    dataGet: stateGet.dataGet,
    successGet: Boolean(stateGet.dataGet),
    get,
  };
}