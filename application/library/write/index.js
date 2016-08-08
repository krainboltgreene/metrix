import {store} from "~/application/remote"

export default function write ({type, key, value, expire}) {
  return store.set(key, value)
    .then(() => store.sadd("types", type))
    .then(() => store.expire(key, expire))
}
