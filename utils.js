module.exports.runUtils = function(event, context, callback, config) {
    console.log("UTILS CONFIG", config);
    if (config.UTILS.dirIndexFilename) {
      const request = event.Records[0].cf.request;
      request.uri = request.uri.replace(/\/$/, '/'+config.UTILS.dirIndexFilename);
      console.log("URL rewritten to", request.uri);
    }
}
