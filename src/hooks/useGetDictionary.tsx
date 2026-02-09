import { useSelector } from "react-redux";

import enDictionary from "../assets/en.json";
import arDictionary from "../assets/ar.json";
export type DictionaryType = typeof enDictionary;

export function useGetDictionary(): any {
  const serverDictionary: DictionaryType = useSelector(
    (state: any) => state.control.dictionary
  );
  const language = useSelector((state: any) => state.control.lang);

  

  const mergeDictionaries = (
    server: DictionaryType,
    local: DictionaryType = enDictionary
  ): any => {
    // console.log('server',server);
    // console.log('local',local);
    let Dict = JSON.parse(JSON.stringify(local));
    if(server){
        for(const key of Object.keys(server)){
          //@ts-ignore
              Dict[key] = {
              //@ts-ignore
                ...local[key],
                //@ts-ignore
                ...server[key],
            }

        }
        // console.log('Dict',Dict);
        
    }
      return Dict
    // if (!server) return local;

    // return server;
  };
//@ts-ignore
  return mergeDictionaries(serverDictionary, language === "ar" ? arDictionary : enDictionary);
}
