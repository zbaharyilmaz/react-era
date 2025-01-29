//mutfak

const initial={
  yapılacaklar:[{id:1, task:"Redux öğren", completed:false},{id:2, task:"Node.js öğren", completed:true}]
}
const todoReducer = (state=initial,{type,payload}) => {
    switch (type) {
 case "EKLE":
  return{yapılacak:[{id:3,task:payload,completed:false}]}
        default:
            return state
    }}
export default todoReducer