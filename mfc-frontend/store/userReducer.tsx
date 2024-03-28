import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'  


const userReducer = createSlice({
    name:'user',
    initialState:{
        name:'LoanBox',
        userlist:[{id:1,name:'dummy'}]
    },
    reducers:{

        userNameSet:(state, action)=> { 
            state.name = action.payload 
            state.userlist.push({id:2,name:'okok'})
        },

        userNameSet2(state,action){
            state.name = action.payload+' Singh'
        } 

    },
    extraReducers:(builder)=> {

        builder
            .addCase(getUserFromApi.pending,(state,action)=>{
               // console.log("PENDING")
            })
            
            .addCase(getUserFromApi.fulfilled,(state,action)=>{
             //   console.log("Succes",action)
                state.name = action.payload.name
                state.userlist = action.payload.data
            })

            .addCase(getUserFromApi.rejected,(state,action)=>{
                console.log("reject")
            })

    }

})


export  const getUserFromApi =  createAsyncThunk('user/fetch',async(id)=>{
    const res = await fetch('http://localhost/api/article-list?id='+id);
    const data = await res.json();
    return data;
})

// export const getUserFromApi  = (id)=>{
//     return (dispatch)=>{
//         var url = 'http://localhost/api/article-list'
//         fetch(url)
//         .then(data=>data.json())
//         .then(response=>{
//             console.log("response===",response)
//             dispatch(setApiData(response))
//         })
//     }
// }

export const {userNameSet,userNameSet2} = userReducer.actions;

export default userReducer.reducer