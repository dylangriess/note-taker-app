const clog = (req, res, next) => {
  const fgYellow = "\u001b[33m";
  switch (req.method) {
    case "GET": {
      console.info(`${fgYellow}${req.method} request to ${req.path}`);
      break;
    }
    case "POST": {
      console.info(`${fgYellow}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`${fgYellow}${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
