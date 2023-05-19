
const INCRIMENTCOUNT = "INCRIMENTCOUNT"
const DICRIMENTCOUNT = "DICRIMENTCOUNT"
const ADDTOCART = "ADDTOCART"

const defaultState = [
    {id: 1, title: 'Велосипед', count: 5},
    {id: 2, title: 'Самокат', count: 4},
    {id: 3, title: 'Гантели', count: 7},
    {id: 4, title: 'Ракетки', count: 1}
 ]
 
 export const cartReducer = (state=defaultState,action)=>{
    const copyState = [...state]
    const produktItem = copyState.find(elem=>elem.id===action.payload)
    switch(action.type){
        case INCRIMENTCOUNT:
            if (produktItem.count < 25){
                produktItem.count++
            }
            return [...copyState] 

        case DICRIMENTCOUNT:
                produktItem.count--
                return [...copyState].filter(elem=>elem.count>0)
    
        case ADDTOCART:
            const newProdukt = {id: Date.now(),
                                title: prompt(),
                                count: 1
                               }
                return[...copyState,newProdukt]
    }
    return state
 }

 export const incriment_count_action = (payload)=>({type:INCRIMENTCOUNT,payload})
 export const dicriment_count_action = (payload)=>({type:DICRIMENTCOUNT,payload})
 export const add_to_cart_action = ()=>({type:ADDTOCART})