var User = require('../../entitites/user.model')

var UserRepository = {
  FindAll: () => User.find(),

  FindOne: param => User.findOne(param),

  Create: params => {
    let user = new User(params)

    user.save(err => {
      if (err) return console.log(err)
    })
    return user
  },

  Update: (id, params) => {
    let user = User.updateOne(
      { _id: id },
      params,
      { runValidators: true },
      err => {
        if (err) return console.log(err)
      }
    )
    return user
  },

  Delete: id => {
    User.findOneAndDelete({ _id: id }, err => {
      if (err) return console.log(err)
    })
  },
}

module.exports = UserRepository
