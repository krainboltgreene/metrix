import totalMemory from "./totalMemory"
import freeMemory from "./freeMemory"
import usedMemory from "./usedMemory"

const initiate = (ƒunction) => {
  ƒunction()[0]()
  ƒunction()[0]()
  setInterval(...ƒunction())
}

initiate(totalMemory)
initiate(freeMemory)
initiate(usedMemory)
