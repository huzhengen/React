import React, { Component } from 'react';
// import '../../App/App.css';
import server from '../../js/server.js';
import MovieList from '../../subcomponents/MovieList/MovieList.js';
// import Search from '../../subcomponents/Search/Search.js';
import { Spin, Icon } from 'antd';
import 'antd/dist/antd.css';

const antIcon = <Icon type="loading" style={{fontSize:24}} spin />;

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            playingTitle: '1',
            playingMovieList: [{
                images: {
                    small: ''
                }
            }],
            willplayTitle: '1',
            willplayMovieList: [{
                images: {
                    small: ''
                }
            }],
            isLoading: true
        };
        this.get = this.get.bind(this);
        console.log(server);
    }

    get(){
        server.fetchPlayingMovieList('get', {
            start: 0,
            count: 9
        }).then((result)=>{
            console.log(result);
            this.setState({
                playingMovieList: result.data.subjects,
                playingTitle: result.data.title
            });
        })

        server.fetchWillMovieList('get', {
            start: 0,
            count: 9
        }).then((result)=>{
            console.log(result);
            this.setState({
                willplayMovieList: result.data.subjects,
                willplayTitle: result.data.title,
            })

            setTimeout(function(){
                this.setState({
                    isLoading: false
                })
            }.bind(this), 1000);
        })
    }
    
    componentWillMount(){
        this.get();
    }

    render(){
        if(this.state.isLoading){
            return (
                <div><Spin indicator={antIcon} /></div>
            );
        }else{
            return (
                <div>
                    <MovieList movieList={this.state.playingMovieList} title={this.state.playingTitle} url={'fetchPlayingMovieList'} />
                    <MovieList movieList={this.state.willplayMovieList} title={this.state.willplayTitle} url={'fetchWillMovieList'} />
                </div>
            );
        }
    }
}

export default App;