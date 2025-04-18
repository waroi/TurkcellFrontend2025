import Button from "@/components/Button";

export default function CategoryNav() {
  return (
    <div className="center justify-content-start text-secondary fw-semibold mb-3 category-nav">
      <Button className="px-3">View All</Button>
      <span>Metaverse</span>
      <span>Entertainment</span>
      <span>Energy</span>
      <span>NFT</span>
      <span>Gaming</span>
      <span>Music</span>
      <input
        type="text"
        className="ms-auto form-control rounded-pill"
        placeholder="🔍 Search Coin"
        aria-label="Search Coin"
      ></input>
    </div>
  );
}
