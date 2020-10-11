import * as contentful from 'contentful'
import { useState,useEffect} from 'react'

 export const client = contentful.createClient({
    space: "jvle8732yb07",
    accessToken: "hh_QGUGAIOMNuAjVsVVmg85j0HWnqYpX4cp2dTxtWCc"
  });
 
 export const useContentfulData = (contentType) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        client.getEntries({content_type: contentType, limit: 3})
        .then(entries => {
            setData(entries);
            setLoading(false);
        })
        
    },[contentType])
    return [data,loading]
}

export const useOneContentfulData = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
      client.getEntry(id.id)
      .then(entry => {
          setData(entry);
          setLoading(false);
      })
  },[id])
  return [data,loading]
}

