import {AppButton} from "./UI/AppButton";
import {RateStyle} from "../styled/style.js";

export default function Rate({rate, setSelectRate}) {

  return (
    <RateStyle>
      <p>
        {rate.title}
      </p>
      <AppButton text={'подключить'} onClick={()=>setSelectRate(rate)}/>
    </RateStyle>
  )
}