function Buton(props) {
  return (
    <button id="button" onClick={props.onclick}>{props.children}</button>
  )
}
export default Buton
