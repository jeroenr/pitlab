/**
 * routes/index.js
 * Index of route handlers for PitLab
 *
 * (C) Ensequence 2013
 * customized by Jeroen Rosenberg
 */

// ### Dependencies
var log = require('book');

// ### Exports
module.exports = function (app, models) {

    // ### POST /storyupdate/:repoPath
    // Updates gitlab repo identified by `repoPath` according the event from pivotal 
    app.post(/^\/storyupdate(?:(?:\/(.*))?\/?)?/, function storyupdate (req, res) {

        // Check for update data
        if (!req.body) {
            return res.send(400, new models.PitlabError('Empty body'));
        }

        // Pull out repo path & activity
        var repoPath = req.params[0],
            activity = req.body.activity;

        // Handle event
        models.pivotal.handle(req.body, function (err, result) {
            if (err) res.send(400, err);
            else res.send(200);            
        });

    });
};