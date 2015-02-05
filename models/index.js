var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Place, Hotel, ThingToDo, Restaurant;
var Schema = mongoose.Schema;

function comList(stringArr){
  return data.join(', ');
}

var placeSchema = new Schema({
  address: String,
  city: String,
  state:   String,
  phone:   String,
  location: { type: [Number],  //[<longitude>, <latitude>]
              index: '2d' 
            }
});

var hotelSchema = new Schema({
  name: String,
  place: String,
  num_stars: {type: Number,
              min: 1,
              max: 5},
  amenities: {type: [String], get: comList}
})


var thingtodoSchema = new Schema({
  name: String,
  place: String,
  age_range: String
})

var restaurantSchema = new Schema({
  name: String,
  place: String,
  cuisine: {type: [String], get: comList},
  price: {type: Number,
          min: 1,
          max: 5}
})

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingToDo = mongoose.model('ThingToDo', thingtodoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = {"Place": Place, 
                  "Hotel": Hotel,
                  "ThingToDo": ThingToDo,
                  "Restaurant": Restaurant};
