import UseCallSign from "../../hooks/useCallsign"
import { useEffect } from "react";
import styles from "./callsign.module.css"

const CallSignList = ({name, register} ) => {
    const { isLoadingGet, dataGet, successGet, get } = UseCallSign();
    useEffect(() => {
        get();
      }, []);
     
    return (
        <div className={styles["div-select"]}>
            {isLoadingGet && !successGet && (
                <div>
                <p >loading</p>
                </div>
            )}
            {!isLoadingGet && successGet && (
            <select {...register(name)}>  
                <option className={styles["disabled"]} value="" key="1" disabled={true}>Elige un indicativo</option>
            {dataGet.map( ({id_callsign, callsign_number, country}) => (                     
                <option key={id_callsign} value={id_callsign}>{country} {callsign_number}</option>                
            )
            )}
            </select>)}
        </div>
    )
}

export default CallSignList;
