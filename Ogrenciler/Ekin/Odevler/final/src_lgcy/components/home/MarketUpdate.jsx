"use client";

import CategoryNav from "@/components/CategoryNav";
import Button from "@/components/Button";
import Image from "next/image";

export default function MarketUpdate({ data }) {
  return (
    <>
      <CategoryNav />
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th className="text-secondary">#</th>
            <th className="text-secondary" style={{ width: "20rem" }}>
              Name
            </th>
            <th className="text-secondary">Last Price</th>
            <th className="text-secondary">24h %</th>
            <th className="text-secondary">Market Cap</th>
            <th className="text-secondary">Last 7 Days</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <i
                  className="fa-regular fa-star"
                  onClick={(event) => {
                    event.target.classList.toggle("fa-regular");
                    event.target.classList.toggle("fa-solid");
                  }}
                  aria-hidden={true} //* Required for hydration, it fails when Font Awesome tries to add 'aria-hidden' attribute.
                ></i>
              </td>
              <td>{index}</td>
              <td>
                <div className="d-inline me-2">
                  <Image
                    src="https://raw.githubusercontent.com/reddavis/Crypto-Icons-API/refs/heads/master/public/svg/icon/btc.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </div>
                {item.name} |{" "}
                <span className="text-secondary">{item.code}</span>
              </td>
              <td>${item.last_price.toLocaleString("en-US")}</td>
              <td
                className={`text-${
                  item.percentage >= 0 ? "success" : "danger"
                }`}
              >
                {item.percentage >= 0 ? "+" : "-"}
                {item.percentage}%
              </td>
              <td>${item.market_cap.toLocaleString("en-US")}</td>
              <td>
                <Image
                  src={`/TEST_graph${item.percentage >= 0 ? "" : "2"}.png`}
                  alt="Graph"
                  width={172}
                  height={72}
                />
              </td>
              <td>
                <Button className="bg-white border-secondary-subtle py-1 px-3 border-2">
                  <span className="text-black">Trade</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
