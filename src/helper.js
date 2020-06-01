const transformId = (id) => {
  if (id.toString().length === 2) {
    return `0${id.toString()}`;
  }
  if (id.toString().length === 1) {
    return `00${id.toString()}`;
  }
  return id;
};

export default transformId;
