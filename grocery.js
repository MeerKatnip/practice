let addTextBox = document.getElementById('addTextBox')
let addStoreButton = document.getElementById('addStoreButton')
let deleteTextBox = document.getElementById('deleteTextBox')
let deleteStoreButton = document.getElementById('deleteStoreButton')
let addList = document.getElementById('addList')


let database = firebase.database()
let rootRef = database.ref()


rootRef.on('value', (snapshot) => {

    let stores = []

    let snapshotValue = snapshot.val()
    console.log(snapshotValue)

    for(let key in snapshotValue) {

        let store = snapshotValue[key]
        stores.push(store)
    }

    let liItems = stores.map(s => {
        return `<li>${s.name}</li>`
    })

    addList.innerHTML = liItems.join("")
})


addStoreButton.addEventListener('click',() => {
    let addList = addTextBox.value

    rootRef.push({
        name: addList
    })
})


// stores.pop(store)

deleteStoreButton.addEventListener('click', function() {
    let removeList = deleteTextBox.value

//    let ref = rootRef.orderByChild(deleteTextBox.value).equalTo(key).once('value', snapshot => {
//         const updates = {}
//         snapshot.forEach(child => updates[child.key] = null)
//         ref.update(updates)
//     });

    
})
