import { ApiGatewayContract } from '@swarmion/serverless-contracts';

import { airportsListSchema } from 'entities/airportsList';

const outputSchema = {
  type: 'array',
  items: airportsListSchema,
} as const;

export const getAirportsListContract = new ApiGatewayContract({
  id: 'get-airports-list',
  path: 'airports',
  method: 'GET',
  integrationType: 'restApi',
  outputSchema,
});
