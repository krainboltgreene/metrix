import {pipe} from "ramda"
import {omit} from "ramda"
import {prop} from "ramda"
import {mergeAll} from "ramda"
import {juxt} from "ramda"

export default function hammer (field) {
  return pipe(
    juxt([omit(field), prop(field)]),
    mergeAll
  )
}
