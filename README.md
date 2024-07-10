# Strapi React Integration

This repository demonstrates the integration of Strapi, a powerful headless CMS, with a ReactJS frontend. The project showcases how to create, manage, and display a simple page using Strapi as the backend and ReactJS as the frontend.

## Features

- **Content Management**: Use Strapi to create and manage articles effortlessly.
- **React Frontend**: Display articles dynamically on a ReactJS-powered frontend.
- **API Integration**: Seamlessly fetch data from Strapi's API and render it in React components.
- **Nginx Proxy**: Set up Nginx as a reverse proxy for efficient handling of requests.
- **AWS Deployment**: Deploy the application on AWS EC2 and manage subdomains using AWS Route 53.

## Prerequisites

- Node.js
- npm or yarn
- AWS account (for deployment)
- Domain name (for subdomain setup)

## Setup Instructions

### Backend (Strapi)

1. Clone the repository and navigate to the Strapi backend directory:
   ```bash
   git clone https://github.com/ansal-sajan/strapi-reactjs-integration.git
   cd strapi-react-integration/strapi
   ```

2. Install dependencies and start the Strapi server:
   ```bash
   npm install
   npm run develop
   ```

3. Access the Strapi admin panel at `http://localhost:1337/admin`

### Frontend (ReactJS)

1. Navigate to the React frontend directory:
   ```bash
   cd ../reactjs-frontend
   ```

2. Install dependencies and start the React development server:
   ```bash
   npm install
   npm start
   ```

3. Access the React frontend at `http://localhost:3000`

### Nginx Setup

1. Set up Nginx as a reverse proxy to handle requests and serve the frontend and backend efficiently.
2. Follow the configuration instructions provided in the repository's Nginx configuration file (`nginx.conf`).

### Deployment on AWS

1. **Deploy Strapi and ReactJS on AWS EC2 instances:**
   - Launch an EC2 instance for Strapi.
   - Launch another EC2 instance for ReactJS.

2. **Set up Route 53 for subdomain management:**
   - Create a hosted zone for your domain.
   - Add A records for your subdomains pointing to the respective EC2 instances.

### Example Nginx Configuration

Here’s an example Nginx configuration for reverse proxying:

```nginx
server {
    listen 80;

    server_name your-subdomain.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Environment Variables

Create a `.env` file in the root of your backend and frontend directories and add the necessary environment variables:

#### Backend (.env)
```
HOST=0.0.0.0
PORT=1337
DATABASE_NAME=your_database_name
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
```

#### Frontend (.env)
```
REACT_APP_API_URL=http://your-subdomain.your-domain.com:1337
```

## Contributing

Feel free to open issues or submit pull requests if you have any improvements or bug fixes. Contributions are always welcome!
