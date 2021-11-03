import { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler =  async(event)  => {
    console.info('headers', event.headers)
    const ip = event.headers['X-Forwarded-For']
    return {
        statusCode: 200,
        body: `IP is ${ip}, and handler is success`,
      }
}
