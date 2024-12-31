import axios from "axios"

const commonAPI=async (httpMethod,url,reqBody)=>{
          const reqConfig={
                    method:httpMethod,
                    url,
                    data:reqBody
          }

          return await axios(reqConfig).then(res=>{ //here axios returns promise. so we use then and catch. also it is asynchronous, so we use async-await. return also wait till gets data.
                    return res
          }).catch(err=>{
                    return err
          })

}
export default commonAPI