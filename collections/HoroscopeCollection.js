// Horoscope Collection 企业人员
// =========================

// Includes file dependencies
define(["jquery", "backbone", "models/HoroscopeModel"], function($, Backbone, HoroscopeModel) {

    // Extends Backbone.Router
    var Collection = Backbone.Collection.extend({

        // The Collection constructor
        initialize: function(models, options) {
            
        },
        url: '/user/report/horoscope4m',
        // Sets the Collection model property to be a Horoscope Model
        model: HoroscopeModel,
    });

    // Returns the Model class
    return Collection;

});