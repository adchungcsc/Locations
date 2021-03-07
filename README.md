# Locations
Submission for hackathon: "Who wants to be a Hackionaire".
Simple app to allow users to create, read, update, & delete interesting locations (Location Name, Latituide + Longitude, & Description). Developed to practice with backend development, database management, docker, & kubernetes.

# Backend
REST API was bootstrapped using the OpenAPI Generator with a custom OpenAPI3 (formerly called swagger) file to generate Go Gorilla Mux boilerplate API code. After the endpoints were implemented, the code was built using the builder pattern and containerized. Next, I deployed the code to a local kubernetes cluster running on my laptop.

# Database
Original database was a local cockroachDB cluster, but this app can use any postgres compatible database (Cockroach, Yugabyte, PostgreSQL, etc). You can get a free 5Gb managed cockroachDB cluster or run your own database locally

# Frontend
Plain HTML/CSS/JS frontend
