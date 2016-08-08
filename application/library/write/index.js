import {store} from "~/application/remote"

export default function write ({type, key, value, expire}) {
  return store.setAsync(key, value)
    .then(() => store.saddAsync("types", type))
    .then(() => store.expireAsync(key, expire))
}
