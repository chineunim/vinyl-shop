function SaleModel(id, artist, album, cover, amount) {
  return {
    id,
    artist,
		album,
		cover,
    amount: amount || 0,
  };
}

export default SaleModel;