import React ,{UseContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
  const {User} = UserContext(UserContext)

  if (!User) return <div>please login</div>
  return <div>Welcome {User.username}</div>
}

export default Profile