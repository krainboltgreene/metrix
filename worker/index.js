import memory from "./memory"
import scrub from "./scrub"

const SECOND = 500
const FREQUENT = 1
const MODERATE = 5
const LAZY = 15

setInterval(memory, FREQUENT * SECOND)
setInterval(scrub, LAZY * SECOND)
