import React from "react";
import { FacebookProvider, Page } from "react-facebook";

const APP_ID = "671667283462747";

function FacebookWidget() {
  return (
    <div className='fb-container'>
      <FacebookProvider appId={APP_ID}>
        <Page href="https://www.facebook.com/IPIREI" tabs="timeline" />
      </FacebookProvider>
    </div>
  );
}

export default FacebookWidget;
