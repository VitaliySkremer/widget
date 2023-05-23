import {Button} from "../../styled/style.js";

export const AppButton = ({text, ...props}) => {

  return (
    <Button {...props}>
      {text}
    </Button>
  )
}