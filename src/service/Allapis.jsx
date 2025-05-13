import { commonApi  } from "./Commonstructure"
import { BASE_URL } from "./Baseurl";

export const registerApi=async(body)=>{
return  await  commonApi('POST',`${BASE_URL}/user/register`,body,"")

}

export const loginApi=async(data)=>{
    return await commonApi('POST',`${BASE_URL}/user/login`,data,"")
} 

export const addCategoryApi=async()=>{
      return await commonApi('POST',`${BASE_URL}/staff/addCategory`,"data","")
  
}

export const getCategoryApi=async()=>{
      return await commonApi('GET',`${BASE_URL}/staff/getCategory`,"","")
  
}

// export const addProdutApi=async(data,header)=>{
//     return await commonApi("POST",`${BASE_URL}/user/add-product`,data,header)
// }

// export const getProducttApi=async(header)=>{
//     return await commonApi("GET",`${BASE_URL}/user/get-user-projects`,"",header)
// }


// export const get3ProductApi=async()=>{
//     return await commonApi("GET",`${BASE_URL}/user/get-limited-products`,"","")
// }
//queryparams
// export const getAllProjectApi=async(searchData)=>{
//     return await commonApi("GET",`${BASE_URL}/user/get-all-projects?search=${searchData}`,"","")
// }

//to editproject
// export const editProjectApi=async(header,body,id)=>{
//  return await commonApi("PUT",`${BASE_URL}/user/edit-projects/${id}`,body,header)} 

//  //to delete project
//  export const deleteProjectApi=async(_id)=>{
//     return await commonApi("GET",`${BASE_URL}/user/delete-projects/${_id}`,"","")}  

// //to update profile-id jwtmiddleware il vach req.payload il eduth vakkunund-ath ella requestnum access cheyyam
// export const editProfileApi=async(header,body)=>{
//     return await commonApi("PUT",`${BASE_URL}/user/edit-profile`,body,header)} 
   

   
