import React, { useState, createContext  } from "react";

const MenuContext = createContext({});

export function MenuContextProvider({ children }) {
  const [homeref, setHomeref] = useState(false);
  const [contref, setContref] = useState(false);
  const [seref, setSeref] = useState(false);
  const [portref, setPortref] = useState(false);
  const [testref, setTestref] = useState(false);

  return (
    <MenuContext.Provider value={{ homeref:homeref, setHomeref:setHomeref, contref:contref, setContref:setContref, seref:seref ,setSeref:setSeref , portref:portref, setPortref:setPortref, testref:testref, setTestref:setTestref }}>
        {children}
    </MenuContext.Provider>
  );
}
export default MenuContext;