import { Button } from "react-bootstrap";
import MyButton from "./components/ui/Button";
import StateCounter from "./components/ui/StateCounter";

// parent component
function BasicComponent() {
  return <>
  {/*child component*/}
  <MyButton>
    Test
  </MyButton>

  <MyButton>
    Ini buttonku, mana buttonmu
  </MyButton>

  <MyButton>
    Simpan
  </MyButton>

  <Button variant="warning">Test Component Lagi</Button>
    <StateCounter/>
  </>
}














export default BasicComponent;