export default function MarketTableWatch({ watchlist, toggleWatch, symbol }) {
  return (
    <i
      className={`fa-star fa-${
        watchlist.includes(symbol) ? "solid" : "regular"
      }`}
      onClick={() => {
        toggleWatch(symbol);
      }}
      aria-hidden={true} //* Required for hydration, it fails when Font Awesome tries to add 'aria-hidden' attribute.
    ></i>
  );
}
