import { mergedCryptos } from '@/services/MergeCryptoService';

export async function GET() {
  try {
    const data = await mergedCryptos();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
