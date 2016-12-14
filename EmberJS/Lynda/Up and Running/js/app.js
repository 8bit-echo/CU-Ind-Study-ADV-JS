App = Ember.Application.create();

App.Router.map(function() {
     this.route('about');
     this.route('collections');
     this.resource('exhibits');
     this.route('notes');
});

// Collections code starts here

//Collections Router
App.CollectionsRoute = Ember.Route.extend({
    model: function(){
         return [
             {
                 title: "Samoca Photography Collections",
                 copy: "The Photography Gallery exhibits over 2,000 rotating examples from the permanent collection, which spans from the very beginnings of the medium to the present day. Collection highlights include silver  gelatin prints by Ansel Adams, landscapes by John Pfal, and portraits  by Robert Mapplethorpe.",
                 image: "images/collections/collections-photography.jpg"
             },
             {
                 title: "Somoca Painting Collections",
                 copy: "The SAMOCA collection of paintings includes work from 1950 to the present, and is ever expanding. The collection is especially renowned for its emphasis on California art and artists, including Sam Francis, Nathan Oliveira, and Wayne Thiebaud.",
                 image: "images/collections/collections-painting.jpg"
             },
             {
                 title: "Samoca Sculpture Collections",
                 copy:"Comprising American sculpture from the mid-19th through the late 20th centuries, SAMOCA's collection is famed for its almost complete series of Frederic Remington's, as well as the extensive outdoor sculpture gardens containing work from modernist Americans such as Richard Serra and Isamu Noguchi.",
                 image: "images/collections/collections-sculpture.jpg"
             }
         ];
    }
});
