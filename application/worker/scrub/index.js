import {map} from "ramda"
import {keys} from "ramda"
import {sort} from "ramda"
import {reverse} from "ramda"
import {identity} from "ramda"
import {dropLast} from "ramda"
import {isEmpty} from "ramda"
import {store} from "~/application/remote"

const MAXIMUM = 5

export default function scrub () {
  return store.hkeys("types")
    .then(map((type) => {
      return store
        .hgetall(type)
        .then(keys)
        .then(map((timestamp) => new Date(timestamp)))
        .then(sort(identity))
        .then(reverse)
        .then(dropLast(MAXIMUM))
        .then(map((date) => date.toJSON()))
        .then((timestamps) => {
          if (isEmpty(timestamps)) {
            return Promise.resolve()
          }

          return store.hdel(type, ...timestamps)
        })
    }))
    .then((queries) => Promise.all(queries))
    .then(() => console.log("Cleaned old entries"))
    .catch(console.error)
}
