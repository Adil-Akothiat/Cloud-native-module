const errorHandler = (fn) => {
  return (req, res) => {
    try {
      fn();
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
};

module.exports = { errorHandler };