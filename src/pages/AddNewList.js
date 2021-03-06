import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./AddNewList.css";

import StarRatings from "react-star-ratings";



class AddNewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      images:
        "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg",
      filter: "4",
      rating: 1,
      status: "Planning",
      started_date: "",
      ended_date: "",
    };
    this.handleRatingChange = this.handleRatingChange.bind(this);


  }
  
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleImageChange = (event) => {
    this.setState({
      images: event.target.value,
    });
  };

  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleRatingChange(newRating) {
    console.log(newRating);
    this.setState({
      rating: newRating,
    });
  }

  handleStatusChange = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  handleStartedDateChange = (event) => {
    this.setState({
      started_date: event.target.value,
    });
  };

  handleEndedDateChange = (event) => {
    this.setState({
      ended_date: event.target.value,
    });
  };

  addList() {
    axios
      .post("https://capstone-ttp1.herokuapp.com/listings", {
        Title: this.state.title,
        Notes: this.state.description,
        Images: this.state.images,
        filter: {
          id: this.state.filter,
        },
        Rating: this.state.rating,
        Status: this.state.status,
        Started_At: this.state.started_date,
        Finished_At: this.state.ended_date,
      })
      .then(function (response) {
        console.log(response + "posting response");
      });
  }
  handleSubmit = (event) => {
    // testing only
    // alert(
    //    `${this.state.title} ${this.state.description} ${this.state.images}  ${this.state.filter}   ${this.state.rating}  ${this.state.status} ${this.state.started_date} ${this.state.ended_date}  `
    //);
    event.preventDefault();
    this.addList();
    alert("Listing added!")

  };

  render() {
    const {
      title,
      description,
      images,
      filter,
      rating,
      status,
      started_date,
      ended_date,
    } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="form-container">
            <h1 className="form-header">Add New Favorite Anime , Book , Game or Movie To Your List!</h1>
            <form className="addlist-form" onSubmit={this.handleSubmit}>
              <div className="title">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="input-style"
                  value={title}
                  placeholder="Enter title.."
                  onChange={this.handleTitleChange}
                />
              </div>
              <div>
                <label className="form-label">Description </label>
                <input
                  type="text"
                  className="input-style"
                  value={description}
                  placeholder="Enter description.."
                  onChange={this.handleDescriptionChange}
                />
              </div>
              <div>
                <label className="form-label">Image </label>
                <input
                  type="text"
                  className="input-style"
                  value={images}
                  placeholder="Enter image url.."
                  onChange={this.handleImageChange}
                />
              </div>
              <div>
                <label className="form-label">Filter</label>
                <select className="input-style" value={filter} onChange={this.handleFilterChange}>
                  <option value="4">Anime</option>
                  <option value="2">Books</option>
                  <option value="1">Games</option>
                  <option value="3">Movies</option>
                </select>
              </div>
              <div>
                <label className="form-label">Rating</label>
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="yellow"
                  changeRating={this.handleRatingChange}
                  numberOfStars={10}
                  name="rating"
                />
              </div>
              <div>
                <label className="form-label">Status</label>
                <select className="input-style" value={status} onChange={this.handleStatusChange}>
                  <option value="Planning">Planning</option>
                  <option value="Current">Currently</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div>
                <label className="form-label">Started Date </label>
                <input
                  type="date"
                  className="input-style"
                  value={started_date}
                  onChange={this.handleStartedDateChange}
                />
              </div>
              <div>
                <label className="form-label">Ended Date </label>
                <input
                  type="date"
                  className="input-style"
                  value={ended_date}
                  onChange={this.handleEndedDateChange}
                />
              </div>
              <input type="submit" className="input-style" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}







export default AddNewList;
