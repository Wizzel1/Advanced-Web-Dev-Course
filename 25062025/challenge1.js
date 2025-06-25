const rawData = [
    {
      username: 'David',
      status: 'online',
      lastActivity: 10
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }
  ]
  
  const result = {}
  for (const entry of rawData){
    const { status, username, lastActivity } = entry;
    const actualStatus = lastActivity > 100 && status === "online" ? "away" : status
    if (!result[actualStatus]) result[actualStatus] = []
    result[actualStatus].push(username)
  }
  
  console.log(result)