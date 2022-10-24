const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
//-------------------------------------------------------------------
//1
const fortuneBtn = document.querySelector('#fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
fortuneBtn.addEventListener('click', getFortune)

//----------------------------------------------------------------------
//2
const personalComBtn = document.querySelector('#personalCom')
const nameInput = document.querySelector('#name')

const getPCom = () => {
    axios.post("http://localhost:4000/api/personalcom/", {name: nameInput.value})
    .then(res => {
        const data = res.data
        alert(data)
    })
}
personalComBtn.addEventListener('click', getPCom)

//--------------------------------------------------------
//3
const changeMeBtn = document.querySelector('#changeButton')


const changeMe = () => {
    axios.put("http://localhost:4000/api/changeMe/")
    .then(res => {
        const data = res.data
        changeMeBtn.innerText = data
    })
}
changeMeBtn.addEventListener('click', changeMe)
//----------------------------------------------------------
//4
const deleteTxtBtn = document.querySelector('#deleteTxt')


const deleteText = () => {
    axios.delete("http://localhost:4000/api/delete/")
    .then(res => {
        const data = res.data
        deleteTxtBtn.innerText = data
        setTimeout(()=>{
            deleteTxtBtn.remove()
        }, 4000)
    })
}
deleteTxtBtn.addEventListener('click', deleteText)
