import React, {PropTypes} from "react"
import sAgo from "s-ago"

export default function BoxTime ({timestamp}) {
  if (timestamp) {
    return <em>
      Updated <time dateTime={timestamp}>{sAgo(timestamp)}</time>
    </em>
  }

  return <em>
    Awaiting information...
  </em>
}
BoxTime.propTypes = {
  timestamp: PropTypes.instanceOf(Date)
}
