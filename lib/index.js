/**
 * lib/index.js
 * Batch requires all models
 *
 * (C) Ensequence 2013
 * customized by Jeroen Rosenberg
 */

// ### Exports
module.exports = function (config) {
    return {
        pivotal: require('./pivotal')(config),
        PitlabError: require('./pitlab-error')
    };
};