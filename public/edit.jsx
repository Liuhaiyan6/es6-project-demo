import React from 'react';
import {Link} from 'react-router';

class Bar extends React.Component {
    render() {
        return (
            <header className="header">
                <ul className="list-inline menu">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Share</Link></li>
                    <li><Link to="#">News</Link></li>
                    <li><Link to="#">Recommendation</Link></li>
                </ul>
            </header>
        )
    }
}

class Roll extends React.Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="" alt="First slide"/>
                    </div>
                    <div className="item">
                        <img src="" alt="Second slide"/>
                    </div>
                    <div className="item">
                        <img src="" alt="Third slide"/>
                    </div>
                </div>

                <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
            </div>
        )
    }
}
class Menu extends React.Component {
    render() {
        return (
            <div id="menu">
                <ul className="nav nav-tabs">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            分类<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">服装</a></li>
                            <li><a href="#">潮鞋</a></li>
                            <li><a href="#">手表</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            价格<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">100-200</a></li>
                            <li><a href="#">200-300</a></li>
                            <li><a href="#">300以上</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            性别<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">男性</a></li>
                            <li><a href="#">女性</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            人气<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">价格由高到低</a></li>
                            <li><a href="#">销量由高到底</a></li>
                            <li><a href="#">综合排序</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

class Like extends React.Component {
    render() {
        return (
            <div id="pictures">
                <div className="one">
                    <img className="love" src="./pictures/like/png"/>
                </div>
                <div className="one">
                    <img className="love" src="./pictures/like.png"/>
                </div>
                <div className="one">
                    <img className="love" src="./pictures/like.png"/>
                </div>
                <div className="one">
                    <img className="love" src="./pictures/like.png"/>
                </div>
                <div className="one">
                    <img className="love" src="./pictures/like.png"/>
                </div>
                <div className="one">
                    <img className="love" src="./pictures/like.png"/>
                </div>
            </div>
        )
    }
}

class Mainbody extends React.Component {
    render() {
        return (
            <div>
                <Bar/>
                <Roll/>
                <Menu/>
                <Like/>
            </div>
        )
    }
}
export default Mainbody


