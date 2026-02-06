# Resume API Documentation

This API provides access to Spencer Craigie's professional resume data following the [JSON:API](https://jsonapi.org/) specification.

## Base URL

- Production: `https://www.spencercraigie.com/api`
- Development: `http://localhost:3000/api`

## OpenAPI Specification

The complete OpenAPI specification is available in the [`openapi.yaml`](./openapi.yaml) file at the root of this repository.

## Endpoints

### Get Complete Resume

Returns all resume data including profile, experiences, education, skills, projects, and certifications in a single compound JSON:API document.

```
GET /resume
```

**Response:** Returns a JSON:API compound document with all resume resources.

### Get Profile

Returns profile information including name, title, contact details, and social links.

```
GET /resume/profile
```

**Response:** Returns a single JSON:API resource document with profile data.

### Get Work Experiences

Returns all work experience entries.

```
GET /resume/experiences
```

**Response:** Returns a JSON:API collection of experience resources.

### Get Education

Returns all education entries.

```
GET /resume/education
```

**Response:** Returns a JSON:API collection of education resources.

### Get Skills

Returns all skills entries.

```
GET /resume/skills
```

**Response:** Returns a JSON:API collection of skill resources.

### Get Projects

Returns all project entries.

```
GET /resume/projects
```

**Response:** Returns a JSON:API collection of project resources.

## Response Format

All responses follow the [JSON:API v1.0 specification](https://jsonapi.org/format/1.0/).

### Content Type

All responses use the content type: `application/vnd.api+json`

### Structure

Every response includes:

- `jsonapi`: Object with version information
- `data`: The primary data (single resource or collection)
- `links`: Links related to the resource(s)

### Example Response

```json
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": {
    "type": "profile",
    "id": "profile-1",
    "attributes": {
      "name": "Spencer Craigie",
      "title": "Full Stack Software Engineer",
      "email": "contact@spencercraigie.com",
      "location": "Moscow, Idaho",
      "summary": "Full Stack Software Engineer with expertise in API development...",
      "website": "https://www.spencercraigie.com",
      "github": "https://github.com/sscraigie",
      "linkedin": "https://www.linkedin.com/in/spencercraigie/"
    },
    "links": {
      "self": "https://www.spencercraigie.com/api/resume/profile/profile-1"
    }
  },
  "links": {
    "self": "https://www.spencercraigie.com/api/resume/profile"
  }
}
```

## Resource Types

The API provides the following resource types:

### Profile

Personal and contact information.

**Attributes:**
- `name` (string): Full name
- `title` (string): Professional title
- `email` (string): Email address
- `location` (string): Current location
- `summary` (string): Professional summary
- `website` (string): Personal website URL
- `github` (string): GitHub profile URL
- `linkedin` (string): LinkedIn profile URL

### Experience

Work experience entries.

**Attributes:**
- `title` (string): Job title
- `company` (string): Company name
- `location` (string): Job location
- `startDate` (string): Start date (YYYY-MM format)
- `endDate` (string|null): End date or null if current
- `description` (string): Job description
- `highlights` (array): Notable achievements

### Education

Educational background.

**Attributes:**
- `degree` (string): Degree earned
- `field` (string): Field of study
- `institution` (string): Educational institution
- `location` (string): Institution location
- `startDate` (string): Start date (YYYY-MM format)
- `endDate` (string): End date (YYYY-MM format)
- `gpa` (string, optional): GPA if applicable

### Skill

Technical and professional skills.

**Attributes:**
- `name` (string): Skill name
- `category` (string): Skill category
- `proficiency` (string): Proficiency level (Beginner, Intermediate, Advanced, Expert)

### Project

Personal and professional projects.

**Attributes:**
- `name` (string): Project name
- `description` (string): Project description
- `url` (string, optional): Project URL
- `technologies` (array): Technologies used
- `highlights` (array): Notable achievements

## Example Usage

### JavaScript/TypeScript

```typescript
async function getResume() {
  const response = await fetch('https://www.spencercraigie.com/api/resume', {
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  });
  
  const data = await response.json();
  return data;
}
```

### cURL

```bash
# Get complete resume
curl -H "Accept: application/vnd.api+json" \
  https://www.spencercraigie.com/api/resume

# Get only work experiences
curl -H "Accept: application/vnd.api+json" \
  https://www.spencercraigie.com/api/resume/experiences
```

### Python

```python
import requests

response = requests.get(
    'https://www.spencercraigie.com/api/resume',
    headers={'Accept': 'application/vnd.api+json'}
)

data = response.json()
print(data)
```

## Standards Compliance

This API follows:

1. **JSON:API v1.0 Specification**: All responses conform to the JSON:API standard for consistent data structures
2. **OpenAPI 3.0**: The API is fully documented using OpenAPI 3.0 specification
3. **RESTful Principles**: Uses standard HTTP methods and proper status codes
4. **Semantic Versioning**: API version is included in all responses

## Error Handling

Errors follow the JSON:API error object specification:

```json
{
  "jsonapi": {
    "version": "1.0"
  },
  "errors": [
    {
      "status": "500",
      "title": "Internal Server Error",
      "detail": "An unexpected error occurred"
    }
  ]
}
```

## CORS

The API supports Cross-Origin Resource Sharing (CORS) for client-side applications.

## Rate Limiting

Currently, there are no rate limits on this API. However, please be respectful with your usage.

## License

This API and its documentation are available under the MIT License.
