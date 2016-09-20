define({ "api": [
  {
    "type": "get",
    "url": "/triplegs/getTriplegsOfTrip&:trip_id",
    "title": "Gets the triplegs of a given trip",
    "name": "GetTriplegsOfTrip",
    "group": "Triplegs",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "404",
            "description": "<p>TripIdInvalid The <code>trip_id</code> is undefined or null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "406",
            "description": "<p>TripIdNotFound The <code>trip_id</code> does not exist.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Id of the trip for which the triplegs will be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tripleg[]",
            "optional": false,
            "field": "Triplegs",
            "description": "<p>An array of json objects that represent the triplegs</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/triplegs.js",
    "groupTitle": "Triplegs"
  },
  {
    "type": "get",
    "url": "/trips/getLastTripOfUser&:user_id",
    "title": "Gets the earliest unannotated trip of the user",
    "name": "GetLastTripOfUser",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "404",
            "description": "<p>UserIdInvalid The <code>user_id</code> is undefined or null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "406",
            "description": "<p>UserCannotAnnotate The user with <code>user_id</code> does not have anny ttrips to annotate.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user that requests the earliest unannotated trip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trip",
            "optional": false,
            "field": "Trip",
            "description": "<p>The json representation of a trip without its triplegs</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  },
  {
    "type": "get",
    "url": "/trips/getTripsForBadge&:user_id",
    "title": "Gets the number of trips that the user has to process",
    "name": "GetTripsForBadge",
    "group": "Trips",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "404",
            "description": "<p>UserIdInvalid The <code>user_id</code> is undefined or null.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user that requests the number of available unannotated trips.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_get_badge_trips_info",
            "description": "<p>Number of unannotated trips available to the user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apiv2/trips.js",
    "groupTitle": "Trips"
  }
] });
