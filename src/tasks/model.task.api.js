const BASE_URL = 'https://authencation.vercel.app/api/todo/'

const END_POINTS = {
    CREATE: BASE_URL + 'create',
    READ: BASE_URL + 'list',
    UPDATE: BASE_URL + 'update?id=',
    DELETE: BASE_URL + 'delete?id=',
    DELETE_ALL: BASE_URL + 'delete_all?user_id='
}

const userID = localStorage.getItem('user')
console.log(userID)

export async function ReadTask(){
    try {
        const res = await fetch(END_POINTS.READ)
        const data = await res.json()

        const newData = data.filter(task => task.user.id === userID)
        return newData
    } catch (error) {
        console.log(error)
    }
}

export async function AddTask(value){
    const data = { name: value, user_id: userID };
    try {
        const res = await fetch( END_POINTS.CREATE, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        const resData = await res.json()
        console.log(resData)
        return resData.id
    } catch (error) {
        console.log(error)
    }
}

export function DeleteAll(){
    fetch( END_POINTS.DELETE_ALL + userID, {
        method: 'POST'
    })
    .catch(err=>{
        console.log(err)
    })
}

export function Delete(id){
    fetch( END_POINTS.DELETE + id, {
        method: 'POST'
    })
    .catch(err=>{
        console.log(err)
    })
}

export function Update(id, newValue){
    const data = { name: newValue };

    fetch( END_POINTS.UPDATE + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .catch(err=>{
        console.log(err)
    })
}