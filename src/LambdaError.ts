import { APIGatewayProxyResult } from 'aws-lambda';

interface Header {
    [header: string]: boolean | number | string;
}

export default class LambdaError extends Error implements APIGatewayProxyResult {
    statusCode: number;
    headers: Header;
    body: string;

    constructor(statusCode: number, error: Error | string, headers: Header = { 'Content-Type': 'application/json' }) {
        if (error instanceof Error) {
            super(JSON.stringify(error.message));
        } else {
            super(error);
        }
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = JSON.stringify(super.message);
    }
}

export const returnError = (e: unknown): APIGatewayProxyResult => {
    if (e instanceof LambdaError) {
        return {
            statusCode: e.statusCode,
            headers: e.headers,
            body: e.message
        };
    } else if (e instanceof Error) {
        return {
            statusCode: 500,
            body: e.message
        };
    } else if (typeof e === 'string') {
        return {
            statusCode: 500,
            body: e
        };
    } else {
        console.log(e);
        return {
            statusCode: 500,
            body: 'Unknown error.'
        };
    }
};
