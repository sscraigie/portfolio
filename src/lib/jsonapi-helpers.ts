/**
 * JSON:API helper functions
 * Following the JSON:API specification (https://jsonapi.org/)
 */

interface JsonApiResource {
  type: string;
  id: string;
  attributes: Record<string, any>;
  links?: {
    self?: string;
  };
}

interface JsonApiResponse {
  jsonapi: {
    version: string;
  };
  data: JsonApiResource | JsonApiResource[];
  links?: {
    self?: string;
  };
}

interface JsonApiError {
  jsonapi: {
    version: string;
  };
  errors: Array<{
    status: string;
    title: string;
    detail?: string;
  }>;
}

/**
 * Create a JSON:API compliant response
 */
export function createJsonApiResponse(
  type: string,
  data: any | any[],
  baseUrl?: string,
): JsonApiResponse {
  const formatResource = (item: any, resourceType: string): JsonApiResource => {
    const { id, ...attributes } = item;
    const resource: JsonApiResource = {
      type: resourceType,
      id: id.toString(),
      attributes,
    };

    if (baseUrl) {
      resource.links = {
        self: `${baseUrl}/${resourceType}/${id}`,
      };
    }

    return resource;
  };

  const response: JsonApiResponse = {
    jsonapi: {
      version: "1.0",
    },
    data: Array.isArray(data)
      ? data.map((item) => formatResource(item, type))
      : formatResource(data, type),
  };

  if (baseUrl) {
    response.links = {
      self: baseUrl,
    };
  }

  return response;
}

/**
 * Create a JSON:API compliant error response
 */
export function createJsonApiError(
  status: number,
  title: string,
  detail?: string,
): JsonApiError {
  return {
    jsonapi: {
      version: "1.0",
    },
    errors: [
      {
        status: status.toString(),
        title,
        detail,
      },
    ],
  };
}

/**
 * Create a compound JSON:API document with multiple resource types
 */
export function createCompoundJsonApiResponse(
  resources: Record<string, any[]>,
  baseUrl?: string,
): JsonApiResponse {
  const allResources: JsonApiResource[] = [];

  Object.entries(resources).forEach(([type, items]) => {
    items.forEach((item) => {
      const { id, ...attributes } = item;
      const resource: JsonApiResource = {
        type,
        id: id.toString(),
        attributes,
      };

      if (baseUrl) {
        resource.links = {
          self: `${baseUrl}/${type}/${id}`,
        };
      }

      allResources.push(resource);
    });
  });

  const response: JsonApiResponse = {
    jsonapi: {
      version: "1.0",
    },
    data: allResources,
  };

  if (baseUrl) {
    response.links = {
      self: baseUrl,
    };
  }

  return response;
}
