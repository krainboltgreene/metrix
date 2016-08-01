import memory from "./memory"
import designers from "./designers"
import scrub from "./scrub"

const SECOND = 1000
const FREQUENT = 1
const MODERATE = 5
const LAZY = 10

setInterval(memory, FREQUENT * SECOND)
setInterval(scrub, LAZY * SECOND)
