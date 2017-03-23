import totalMemory from "./totalMemory"
import freeMemory from "./freeMemory"
import usedMemory from "./usedMemory"
import designTimeProjects from "./designTimeProjects"
import usersTotal from "./usersTotal"
import usersPaid from "./usersPaid"
import usersOrdered from "./usersOrdered"
import newlyJoinedUsers from "./newlyJoinedUsers"
import designers from "./designers"
import newlyJoinedDesigners from "./newlyJoinedDesigners"
import privateDesigners from "./privateDesigners"
import purchasedProjects from "./purchasedProjects"
import refundAmounts from "./refundAmounts"
import frontPageLoadTime from "./frontPageLoadTime"

const initiate = (ƒunction) => {
  ƒunction()[0]()
  ƒunction()[0]()
  setInterval(...ƒunction())
}

initiate(totalMemory)
initiate(freeMemory)
initiate(usedMemory)
initiate(usersTotal)
initiate(usersPaid)
initiate(usersOrdered)
initiate(newlyJoinedUsers)
initiate(designers)
initiate(newlyJoinedDesigners)
initiate(privateDesigners)
initiate(designTimeProjects)
initiate(purchasedProjects)
initiate(refundAmounts)
initiate(frontPageLoadTime)
