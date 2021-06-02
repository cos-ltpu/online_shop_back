dev-server:
	mkdir -p ./docker-data
	docker-compose up -d shop-postgres
	docker-compose up -d shop-minio
	yarn dev