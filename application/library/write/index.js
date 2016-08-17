import {store} from "~/application/remote"

export default function write ({type, value, expire}) {
  const updatedAt = Date.now()
  const key = `${type}/${updatedAt}`

  return store.set(key, value)
    .then(() => store.sadd("types", type))
    .then(() => store.pexpire(key, expire * 5))
    .then(() => console.log({type, key, value}))
}
