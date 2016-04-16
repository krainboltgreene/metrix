import {atEvery} from "oft"

import memory from "./memory"
import scrub from "./scrub"

atEvery("1 Second", memory)
atEvery("30 Second", scrub)
