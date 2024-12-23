
module.exports = {
  
  webpack: (config, { isServer, dev }) => {
    if (dev && !isServer) {
      
      config.watchOptions = {
        poll: true, 
        aggregateTimeout: 300, 
        ignored: /node_modules/, 
      };
    }
    return config;
  },
};


