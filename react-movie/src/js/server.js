import axios from 'axios';

const url = {
    fetchWillMovieList: '/movie/coming_soon',
    fetchPlayingMovieList: '/movie/in_theaters',
    fetchMovieDetail: '/movie/subject',
    fetchMovieSearch: '/movie/search'
}

var server = {};

Object.keys(url).forEach((methodName)=>{
    server[methodName] = (type, params, id)=>{
        if(type === 'post'){
            return axios({
                method: type,
                data: params,
                url: url[methodName]
            })
        }else if(type === 'get'){
            if(methodName === 'fetchMovieDetail'){
                var urlWithId = url[methodName] + `/${id}`;
                return axios({
                    method: type,
                    data: params,
                    url: urlWithId
                })
            }else{
                return axios(url[methodName], {
                    params: params
                })
            }
        }
    }
})

export default server;