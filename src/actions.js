function searchTermChanged(searchTerm) {
  return {
    type: 'SEARCH_INPUT_CHANGED',
    payload: { searchTerm },
  };
}

function markCaught(name) {
  return {
    type: 'MARK_CAUGHT',
    payload: { name },
  };
}

export default {
  searchTermChanged,
  markCaught,
};
