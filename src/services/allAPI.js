import commonAPI from "./commonAPI"
import serverURL from "./severURL"

//saveVideoAPI- post http request, add componnet
export const saveVideoAPI=async (videoDetails)=>{
       return await commonAPI(`POST`,`${serverURL}/uploadVideos`,videoDetails)
}


//getAllVideosAPI- get http request, view component, when component displayed in browser inside its useEffect Hook
export const getAllVideosAPI=async ()=>{
       return await commonAPI(`GET`,`${serverURL}/uploadVideos`,"")
}


//saveHistoryAPI-post http method to http://localhost:3000/history called by videocard when we click on video.
export const saveHistoryAPI=async (historyDetails)=>{
       return await commonAPI(`POST`,`${serverURL}/history`,historyDetails)
}


//getAllHistoryAPI- get http method to http://localhost:3000/history called by history componnet when it open in browser
export const getAllHistoryAPI=async ()=>{
       return await commonAPI(`GET`,`${serverURL}/history`,"")
}

//deleteHistoryAPI - delete method to http://localhost:3000/history/id called by history when clicked on delete button
export const deleteHistoryAPI=async(id)=>{
       return await commonAPI(`DELETE`,`${serverURL}/history/${id}`,{})
}

//removeVideoAPI - delete method to http://localhost:3000/uploadVideos/id called by videoCard when clicked on delete button
export const removeVideoAPI=async(id)=>{
       return await commonAPI(`DELETE`,`${serverURL}/uploadVideos/${id}`,{})
}


//saveCategoryAPI-post http method to http://localhost:3000/categories called by category componnet when user click on add btn.
// categoryDetails={categoryName,allVideos}
export const saveCategoryAPI=async (categoryDetails)=>{
       return await commonAPI(`POST`,`${serverURL}/categories`,categoryDetails)
}


//getAllCategoryAPI- get http method to http://localhost:3000/categories called by category componnet when component loaded in browser
export const getAllCategoryAPI=async ()=>{
       return await commonAPI(`GET`,`${serverURL}/categories`,{})
}


//deleteCategoryAPI - delete method to http://localhost:3000/categories/id called by category component when clicked on delete button
export const deleteCategoryAPI=async(id)=>{
       return await commonAPI(`DELETE`,`${serverURL}/categories/${id}`,{})
}


//updateCategoryAPI - delete method to http://localhost:3000/categories/id called by category component when clicked on delete button
export const updateCategoryAPI=async(categoryDetails)=>{
       return await commonAPI(`PUT`,`${serverURL}/categories/${categoryDetails.id}`,categoryDetails)
}