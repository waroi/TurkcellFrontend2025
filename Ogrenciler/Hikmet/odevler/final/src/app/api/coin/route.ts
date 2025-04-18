import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get("id");

	const defaultIds = "1,1027,52,1839,5426,2010";

	const idsToUse = id || defaultIds;

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v2/cryptocurrency/info?id=${idsToUse}`,
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
