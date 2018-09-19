if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://pete:Pacifier60@ds163402.mlab.com:63402/vidpoint-prod'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidpoint-dev' };
}
