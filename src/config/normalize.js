const normalizeQuery = (str) => {
  return str.replaceAll(' ', '-').toLowerCase();
}

export { normalizeQuery };