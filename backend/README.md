# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: `POST`

### Description:
This endpoint is used to register a new user in the system. It validates the input data, hashes the user's password, and stores the user information in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

---

## Request Body:
The request body should be sent in JSON format with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min: 3 characters, required)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)"
}
```

### Example Request Body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

---

## Response:

### Success Response:
- **Status Code:** `201 Created`
- **Description:** Returns a JWT token and the created user details.

```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

### Error Responses:

#### Validation Errors:
- **Status Code:** `400 Bad Request`
- **Description:** Returns an array of validation errors if the input data does not meet the required criteria.

```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (field name)",
      "location": "string (location of the field, e.g., 'body')"
    }
  ]
}
```

#### Missing Fields:
- **Status Code:** `400 Bad Request`
- **Description:** Returns an error if required fields are missing.

```json
{
  "error": "All Fields Are Required"
}
```

---

## Validation Rules:
- `fullname.firstname`: Must be at least 3 characters long.
- `email`: Must be a valid email format.
- `password`: Must be at least 6 characters long.

---

## Notes:
- The `password` field is hashed before being stored in the database.
- The `lastname` field is optional.
- The `email` field must be unique.

---

## Example cURL Request:
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}'
```