import memory from "./memory"
import scrub from "./scrub"

const SECOND = 1000

setInterval(memory, 1 * SECOND)
setInterval(scrub, 30 * SECOND)
