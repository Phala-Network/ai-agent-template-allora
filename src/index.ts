import { Request, Response, route } from './httpSupport'
import { renderHtml } from './uiSupport'
import { formatEther } from 'viem'

async function GET(req: Request): Promise<Response> {
    const secret = req.queries?.key ?? '';
    const alloraApiKey = req.secret?.alloraApiKey as string;
    const topicBtc10MinPrediction = '3&inference_value_type=uint256&extra_data=BTC';
    const topicBtc24HourPrediction = '4&inference_value_type=uint256&extra_data=BTC';
    const alloraApiUrl = `https://api.upshot.xyz/v2/allora/consumer/arbitrum-42161?allora_topic_id=`;
    let result = ["N/A", "N/A"];
    try {
        const btc10MinPredictionResult = await fetch(`${alloraApiUrl}${topicBtc10MinPrediction}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': `${alloraApiKey}`
            }
        });
        const parseBtc10MinResult = await btc10MinPredictionResult.json();
        console.log(JSON.stringify(parseBtc10MinResult));
        const btc24HourPredictionResult = await fetch(`${alloraApiUrl}${topicBtc24HourPrediction}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': `${alloraApiKey}`
            }
        });
        const parseBtc24HourResult = await btc24HourPredictionResult.json();
        console.log(JSON.stringify(parseBtc24HourResult));
        result[0] = formatEther(parseBtc10MinResult.data.inference_data.network_inference);
        result[1] = formatEther(parseBtc24HourResult.data.inference_data.network_inference);
    } catch (error) {
        console.log(error);
        result[0] = error;
    }

    return new Response(renderHtml(result))
}

async function POST(req: Request): Promise<Response> {
    return new Response('Not Implemented')
}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
