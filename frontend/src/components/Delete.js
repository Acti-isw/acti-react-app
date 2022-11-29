
async function del(id){
    await fetch(`http://localhost:3000/user/${id}`, {
    method: 'DELETE'}
)}

export default del