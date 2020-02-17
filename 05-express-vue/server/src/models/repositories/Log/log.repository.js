var Log = require('../../entitites/logs.model')

var LogRepository = {
  FindAll: () => Log.find(),

  FindOne: id => Log.findById(id),

  Create: params => {
    let log = new Log(params)

    log.save(err => {
      if (err) return console.log(err)
    })
    return log
  },

  Update: (id, params) => {
    Log.updateOne({ _id: id }, params, { runValidators: true }, err => {
      if (err) return console.log(err)
    })
  },

  Delete: id => {
    Log.findOneAndDelete({ _id: id }, err => {
      if (err) return console.log(err)
    })
  },
}

module.exports = LogRepository
