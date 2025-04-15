import { NextResponse } from "next/server";

export async function GET() {
	const ids = "1,1027,825,1839,5426,2010";

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v2/cryptocurrency/info?id=${ids}`,
		{
			headers: {
				"X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY!,
			},
			next: { revalidate: 60 },
		}
	);

	const data = await res.json();

	return NextResponse.json(data);
}
