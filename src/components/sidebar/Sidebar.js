import React, {useEffect} from 'react';
import * as contentful from 'contentful'
const Enproceso = () => {
    const client = contentful.createClient({
        space: "jvle8732yb07",
        accessToken: "hh_QGUGAIOMNuAjVsVVmg85j0HWnqYpX4cp2dTxtWCc"
      });
      client.getEntries({content_type: 'general'})
      .then(entries => {
            const x = entries.items 
            console.log(x)

        })
      

    return ( <div className='sidebar'>
        <div className='sidebar-content'>Sección en Proceso</div>
         </div> );
}
 
export default Enproceso;