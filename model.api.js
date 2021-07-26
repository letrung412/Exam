export async function ReadTask(){
    try {
        const res = await fetch('https://authencation.vercel.app/api/todo/list')
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export function AddTask(value){
    const data = { name: value };
    const url = ' https://authencation.vercel.app/api/todo/create'
    fetch( url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    return data.id
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

export function DeleteAll(){
    const url = 'https://authencation.vercel.app/api/todo/delete_all'

    fetch( url, {
        method: 'POST'
    })
    .then(console.log(`Deleted all tasks`))
    .catch(err=>{
        console.log(err)
    })
}

export function Delete(id){
    const url = 'https://authencation.vercel.app/api/todo/delete?id=' + id

    fetch( url, {
        method: 'POST'
    })
    .then(console.log(`Deleted ${id}`))
    .catch(err=>{
        console.log(err)
    })
}

export function Update(id, newValue){
    const data = { name: newValue };
    const url = 'https://authencation.vercel.app/api/todo/update?id=' + id

    fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(console.log(`Updated ${id}`))
    .catch(err=>{
        console.log(err)
    })
}