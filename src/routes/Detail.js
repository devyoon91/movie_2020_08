import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() { 
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/movie_2020_08/");
        }
    }
    render() {
        const { location } = this.props; 
        if(location.state) {
            return (
                <div className="detail__container">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                    <div>
                        <h3>{location.state.title}</h3>
                        <h5>{location.state.year}</h5> 
                        <ul>
                            {location.state.genres && location.state.genres.map((genre,index) => ( 
                                <li key={index} className="genres__genre">{genre}</li>
                            ))}
                        </ul>
                        <p>{location.state.summary.slice(0, 140)}...</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;