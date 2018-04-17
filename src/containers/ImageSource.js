import axios from 'axios'


const ImageSourcing = {

	findCreativeImg(query) {
		const APIEndpoint = 'https://api.pexels.com/v1';

		var axiosPromise = axios({
			type: 'GET'
			url: APIEndpoint + '/search', 
			params: {
				query: query, 
				per_page: 25, 
				page: 1
			}, 
			headers: {
				Authorization: process.env.API_KEY;
			},
			responseType: 'json'
		})
		.then(function(response) {
			return response.data;
		}).
		catch(function(err) {
			console.log(err);
		});
		return axiosPromise;
	}
};

export default ImageSourcing	
