import totalMemory from "./totalMemory"
import freeMemory from "./freeMemory"
import usedMemory from "./usedMemory"

const SECOND = 1000
const FREQUENT = 1
const LAZY = 15

setInterval(totalMemory, LAZY * SECOND)
setInterval(freeMemory, FREQUENT * SECOND)
setInterval(usedMemory, FREQUENT * SECOND)
