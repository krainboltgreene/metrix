import box from "../box"
import boxTitle from "../boxTitle"
import boxValueLarge from "../boxValueLarge"
import boxTimeago from "../boxTimeago"

export default ({style, title, value, updatedAt}) => {
  return box(
    {
      selector: ".number",
      style,
      content: [
        boxTitle(title),
        boxValueLarge(value),
        boxTimeago(updatedAt)
      ]
    }
  )
}
