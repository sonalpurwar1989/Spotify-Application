import axios from 'axios';



export default {

  getArtist(name){
    return axios.get(`/artist/${name}`);
  }

}