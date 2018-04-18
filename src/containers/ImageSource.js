import axios from 'axios'
import { GET_IMAGE } from '../actions/ActionTypes'

const APIEndpoint = 'https://api.pexels.com/v1';

const ImageSourcing = {

	findCreativeImg(query) {
		return function(dispatch) {
			axios.get('${APIEndpoint}/search/?query=`${query}&per_page=20&page=1', {headers: {Authorization: process.env.PEXELSKEY}})
			.then(response => {
				dispatch({
					type: GET_IMAGE,
					payload: response.data.data.photos[1].src.landscape
				})
			})
			.catch((error) => {
				console.log(error)
			})
		}
	
	}
}

export default ImageSourcing	
