import { useSelector } from "react-redux";

import dictionary from "../assets/en.json";
export type DictionaryType = typeof dictionary;
export function useGetDictionary(): any {
  const serverDictionary: DictionaryType = useSelector(
    (state: any) => state.control.dictionary
  );
  console.log(serverDictionary);
  

  const mergeDictionaries = (
    server: DictionaryType,
    local: DictionaryType = dictionary
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

  return mergeDictionaries(serverDictionary, dictionary);
}
