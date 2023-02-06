import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import LambdaError from './LambdaError';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    if (!event.body) {
        return new LambdaError(400, 'Bad request -- no body');
    }
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }),
    };
};
