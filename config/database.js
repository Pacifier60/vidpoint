if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://ocalhost/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}