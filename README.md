# Health Check Microservice

A simple microservice to provide health status for other services.

## Features

*   `/health` endpoint: Returns the status of the service.

## Getting Started

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the service: `npm start`

## API

### `/health`

*   **Method:** GET
*   **Response:**

    
    {
      "status": "UP"
    }
    