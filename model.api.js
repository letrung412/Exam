export async function ReadTask() {
  try {
    const res = await fetch('https://authencation.vercel.app/api/todo/list')
    const data = await res.json()
    return data
  } catch (error) {
    console.log("Loi:" + error)
  }
}

export function SaveTask(value) {
  const data = { name: value };

fetch('https://authencation.vercel.app/api/todo/create', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => data.id)
.catch((error) => {
  console.error('Error:', error);
});
}

export function DeleteAll() {
  fetch('https://authencation.vercel.app/api/todo/delete_all', {
  method: 'POST', // or 'PUT'
})
.then(
  console.log("Xoa tat ca")
)
.catch((error) => {
  console.error('Error:', error);
});
}


export function RemoveTask(id) {
  fetch('https://authencation.vercel.app/api/todo/delete?id=' +id, {
  method: 'POST', // or 'PUT'
})
.then(
  console.log("Xoa 1")
)
.catch((error) => {
  console.error('Error:', error);
});
}

export function UpdateTask(id , newvalue) {
  const data = {name: newvalue}

  fetch('https://authencation.vercel.app/api/todo/update?id=' + id, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(
  console.log(`Updated ${id}`)
)
.catch((error) => {
  console.error('Error:', error);
  
});
}

