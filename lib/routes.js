var routes = function(server, Lighting) {

  server.route({
    method: 'GET',
    path: '/lighting',
    config: {
      handler: function(req, res) {
        res(Lighting.list())
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/lighting/{location}',
    config: {
      handler: function(req, res) {
        node = Lighting.find(req.params.location)
        res(node)
      }
    }
  })

  server.route({
    method: 'PUT',
    path: '/lighting/{location}',
    config: {
      handler: function(req, res) {
        node = Lighting.find(req.params.location)
        node.update(req.payload)
        res(node)
      }
    }
  })

}

module.exports = routes