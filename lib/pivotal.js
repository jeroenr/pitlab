/**
 * lib/pivotal.js
 * Handler for pivotal updates.
 *
 * (C) Ensequence 2013
 * customized by Jeroen Rosenberg
 */

// ### Dependencies
var log = require('book')
  , _ = require('underscore')
  , util = require('util')
  , needle = require('needle');
// ### Exports
module.exports = function (config) {

    // Create gitlab instance
    var gitlab = require('./gitlab')(config);

    function handle(updateBody, fn) {
        var options = {
                headers: {
                        'Content-Type': 'application/xml',
                        'X-TrackerToken': config.pivotal_token
                }
        }
        _.each(updateBody.commits, function(commit){
                log.info("commit " + util.inspect(commit));
                needle.post(config.pivotal_url, "<source_commit><message>" + commit.message + "</message><author>" + commit.author.name +"</author><commit_id>" + commit.id + "</commit_id><url>" + commit.url + "</url></source_commit>", options, function(err, response, body){
                        fn(err, body);
                });
        });
    }

    // Expose methods
    return {
        handle: handle
    };
};