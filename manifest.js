module.exports = {
    version: "0.0.1",
    init: function(pluginContext) {
        let policy = require('./jwt/index')
		pluginContext.registerPolicy(policy)
    }
}