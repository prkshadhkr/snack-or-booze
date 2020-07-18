import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
  
  // added following for drinks 
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // added for post request
  static postItem(item, data){
    axios.post(`${BASE_API_URL}/${item}`, data)
    .then( response =>{
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    });
  }

}

// function postItem(title, formData){
//   axios.post(`${BASE_API_URL}/${title}`, formData)
//   .then( response =>{
//     console.log(response)
//   })
//   .catch(error =>{
//     console.log(error)
//   });
// }

export default SnackOrBoozeApi;
// export { postItem };
