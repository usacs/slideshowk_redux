//ImageSource.js
import axios from 'axios'
import { GET_IMAGE, FIND_IMAGE } from '../actions/ActionTypes'

const PexelsAPIEndpoint = 'https://api.pexels.com/v1'
const GiphyAPIEndpoint = 'https://api.giphy.com/v1/gifs'

const picker = Math.round(Math.random() * 10)

const getCode = (query) => {
	let sum = 0
	for(let i = 0; i < query.length; i++) {
		sum += query.charCodeAt(i)
		//console.log(sum)
	}
	
	return Math.round(sum / query.length)
}

const getImage = (query) => {
	//console.log(getCode(query))
	let choose = getCode(query) % 3
	let x = getCode(query) % picker
	//console.log(x)
	if(choose !== 2) {
		//console.log('pex')
		return fetchImagePexels(query, x)
	} else {
		return fetchImageGiphy(query, x)
	}
}

const fetchImagePexels = (query, x) => {
	//return dispatcher function
	//that dispatches later
	
	return (dispatch) => {
		
		dispatch({ type: FIND_IMAGE })
	//returns a promise
		return axios.get(
			`${PexelsAPIEndpoint}/search?query=${query}&per_page=20&page=1`,
      {headers: {Authorization: "<>"}})
			.then(response => 
				//dispatch another to consume data
				dispatch(PexelsCheck(response, query, x)))
			.catch(error => {
				//dispatch yet another to error handle
				console.log(error)
				dispatch(fetchImageGiphy(query, x))
			})
		}
}	

const fetchImageGiphy = (query, x) => {
	return(dispatch) => {
		dispatch({ type: FIND_IMAGE })
		return axios.get(
      `${GiphyAPIEndpoint}/search?api_key=<>=${query}&limit=25&offset=0&rating=G`)
			.then(response =>
				dispatch(GiphyCheck(response, query, x)))
			.catch(error => {
				console.log(error)
				dispatch(fetchImageFailure(error))
			})
		}
}


const PexelsCheck = (response, query, x) => {
	console.log(response.data)
	//console.log(x)
	if(response.data.total_results === 0) {
		return fetchImageGiphy(query, x)
	} else {
		//console.log(x)
		let diff = x - response.data.total_results
		if(diff > 0) {
			x = x - diff - 1
		}
		return fetchImageSuccess(
			response.data.photos[x].src.landscape,
			response.data.photos[x].photographer)					
	}
}

const GiphyCheck = (response, query, x) => {
	console.log(response)
	//console.log(x)
	if(response.data.pagination.total_count === 0) {
		return fetchImageNotFound()
	} else {
		//console.log(x)
		let diff = x - response.data.pagination.total_count
		if(diff >= 0) {
			x = (x - diff) - 1
		}
		//console.log(response.data.data)
		//console.log(response.data.data[x])
		return fetchImageSuccess(
			response.data.data[x].images.original.url,
			response.data.data[x].source)
	}
}



const fetchImageNotFound = () => {
	return { 
		type: GET_IMAGE,
		url: 'https://images.pexels.com/photos/14303/pexels-photo-14303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		author: 'Image Not Found... :\'('
	}
}

const fetchImageSuccess = (url, author) => {
	//console.log(url)
	//console.log(author)
	return {
		type: GET_IMAGE,
		url,
		author
	}
}

const fetchImageFailure = (error) => {
	console.log(error)
	return {
		type: GET_IMAGE, 
		url: 'https://images.pexels.com/photos/277052/pexels-photo-277052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',	
		author: '@#$%, error: ' + error.toString()
	}
}

export default getImage
