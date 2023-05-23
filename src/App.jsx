import WidgetAside from "./Components/WidgetAside";
import Widget from "./Components/Widget";
import WidgetTitle from "./Components/WidgetTitle";
import {AvailableRates} from "./Components/AvailableRates";
import {useCallback, useEffect, useState} from "react";
import SelectRate from "./Components/SelectRate.jsx";

function App({app, id}) {

  const [rates, setRates] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [selectRate, setSelectRate] = useState(null)

  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setRates(data);
    }

    try {
      setIsLoading(true);
      fetchData();
    }catch (e) {

    }finally {
      setIsLoading(false);
    }
  }, [])


  const newSelectRate = useCallback((rate) =>{
    setSelectRate(rate)
  }, [])

  return (
      <WidgetAside>
        {isLoading
          ?<div>Загрузка</div>
          :(
            <Widget app={app}>
              {selectRate
                ? <SelectRate rate={selectRate} onBack={newSelectRate}/>
                :<>
                  <WidgetTitle id={id}/>
                  <AvailableRates rates={rates} setSelectRate={newSelectRate}/>
                </>
              }
            </Widget>
          )
        }
      </WidgetAside>
  )
}

export default App
