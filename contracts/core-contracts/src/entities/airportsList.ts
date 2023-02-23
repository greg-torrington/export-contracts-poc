import { FromSchema } from 'json-schema-to-ts';

const connectionSchema = {
  type: 'object',
  properties: {
    iata: { type: 'number' },
  },
  required: ['iata'],
  additionalProperties: false,
} as const;

const airportSchema = {
  type: 'object',
  properties: {
    iata: { type: 'string' },
    countryName: { type: 'string' },
    connections: {
      type: 'array',
      items: connectionSchema,
    },
    shortName: { type: 'string' },
  },
  required: ['connections', 'countryName', 'iata', 'shortName'],
  additionalProperties: false,
} as const;

export const airportsListSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'array',
      items: airportSchema,
    },
  },
  required: ['data'],
  additionalProperties: false,
} as const;

export type AirportsList = FromSchema<typeof airportsListSchema>;
