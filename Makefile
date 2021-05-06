dev-server:
	mkdir -p ./docker-data
	docker-compose up -d shop-postgres
	yarn dev