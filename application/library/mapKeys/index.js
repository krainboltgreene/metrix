import {curry} from "ramda"
import {fromPairs} from "ramda"
import {map} from "ramda"
import {adjust} from "ramda"
import {toPairs} from "ramda"

const FIRST = 0

export default curry((ƒunction, record) => fromPairs(map(adjust(ƒunction, FIRST), toPairs(record))))
