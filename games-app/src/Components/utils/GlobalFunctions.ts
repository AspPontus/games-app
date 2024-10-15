export const handleVote = async (id, review , vote, inc) :Promise<void> => {
    await fetch(`http://localhost:3000/api/user/${id}/reviews/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          review,
          vote,
          inc,
          id
        })
      })
}

export const handleFollow = async (currentUser:object, clickedUser:object) :Promise<void> => {
  console.log({
    currentUser: currentUser,
    followedUser: clickedUser
  })
  await fetch(`http://localhost:3000/api/user/follow`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      currentUser,
      clickedUser
    })
  })
}
export const handleUnFollow = async (currentUser:object, clickedUser:object) :Promise<void> => {
  console.log({
    currentUser: currentUser,
    followedUser: clickedUser
  })
  await fetch(`http://localhost:3000/api/user/un-follow`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      currentUser,
      clickedUser
    })
  })
}