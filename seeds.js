var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name:"hot cold", 
    image:"https://s-media-cache-ak0.pinimg.com/236x/f4/6f/fc/f46ffc01b5481db317566e56913b7d6e.jpg", 
    description:"two hand, one hot, one cold"},
    {name:"hot cold", 
    image:"https://s-media-cache-ak0.pinimg.com/236x/f4/6f/fc/f46ffc01b5481db317566e56913b7d6e.jpg", 
    description:"two hand, one hot, one cold"},
    {name:"hot cold", 
    image:"https://s-media-cache-ak0.pinimg.com/236x/f4/6f/fc/f46ffc01b5481db317566e56913b7d6e.jpg", 
    description:"two hand, one hot, one cold"}
    ];
function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds");
                    data.forEach(function(seed){
                        Campground.create(seed, function(err, campground){
                        if(err){
                            console.log(err);
                        } else {
                            console.log("added a campground");
                            //create a comment
                            Comment.create({text: "this place is great, but i wish there was internet", 
                                            author:"homer"}, function(err, comment){
                                                if(err){
                                                    console.log(err)
                                                } else {
                                                    campground.comments.push(comment);
                                                    campground.save();
                                                    console.log("created new comment");
                                                }
                                            });
                        }
                     });
                });
            }
        });
    }

module.exports = seedDB;