import totalMemory from "./totalMemory"
import freeMemory from "./freeMemory"
import usedMemory from "./usedMemory"


setInterval(...totalMemory())
setInterval(...freeMemory())
setInterval(...usedMemory())
