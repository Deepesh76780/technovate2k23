import React from "react";
import Wrapper from "./wrapper";


export default function SponsersLayout({ children }) {

  return (
    <React.Fragment>
      <Wrapper>
        {children}
      </Wrapper>
    </React.Fragment>
  );
}


