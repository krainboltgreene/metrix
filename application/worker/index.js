import totalMemory from "./totalMemory"
import freeMemory from "./freeMemory"
import usedMemory from "./usedMemory"
import {FREQUENT} from "~/application/library"
import {MODERATE} from "~/application/library"
import {LAZY} from "~/application/library"


setInterval(totalMemory, LAZY)
setInterval(freeMemory, FREQUENT)
setInterval(usedMemory, FREQUENT)
