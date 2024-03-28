
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath:'userApi',
    tagTypes:['postlist','postbyid'],
    baseQuery: fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/',
        prepareHeaders:(headers,{getState})=>{
            const stateInfo:any = getState();
            console.log(stateInfo,"INSIDE")
            headers.set('authorization',"klaskjkjakjakjkajskajskajskajkaj"+stateInfo.user_info.name)
            return headers
        }
    }),

    endpoints:(builder)=>({

        getAllPost:builder.query<string,any>({
            query:()=>({
                url:'posts',
                methods:'GET',
               // params:{id:2}
            }),
            providesTags:['postlist']
        }),
        getPostById:builder.query({
            query:(id)=>({
                url:'posts/12',
                methods:'GET',
                params:{id:2}
            }),
            providesTags:["postbyid"]
        }),

        createPost:builder.mutation({ 
            query: (requestData)=>{
                return {
                    url:'posts',
                    method:'POST',
                    body:requestData
                }
            },
            invalidatesTags:['postlist']
        }),


    })
})

export const { useGetAllPostQuery,useGetPostByIdQuery,useCreatePostMutation } = userApi