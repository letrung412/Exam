export async function ReadTask() {
  try {
      const res = await fetch('https://authencation.vercel.app/api/todo/list')
      const data = await res.json()
      console.log(data)
      return data
  } catch (error) {
      console.log(error)
  }
}

export function AddTask(value) {
  const data = { name : value}
  const options = {
    method: 'POST',
    //mode: 'cors',
    headers: {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(data)
  }
  return fetch('https://authencation.vercel.app/api/todo/create', options)
          .then(res => res.json())
          .then(data => data.id)
}

export function RemoveTask(id) {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    }
  }
  fetch('https://authencation.vercel.app/api/todo/delete?id=' + id, options)
    .then(res => res.json())
    .then(data => data)
}

export function UpdateTask(data) {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({name: data.name})
  }
  fetch('https://authencation.vercel.app/api/todo/update?id=' + data.id, options)
    .then(res => res.json())
    .then(data => data)
}
