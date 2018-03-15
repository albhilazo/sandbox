.SILENT:
.PHONY: nodejs/* ethereum/*

define dc-run
	docker-compose run --rm
endef


build:
	docker-compose build


nodejs/test:
	$(dc-run) nodejs npm run test

nodejs/test/acceptance/watch:
	$(dc-run) nodejs npm run test:acceptance:watch


scala/test:
	$(dc-run) scala sbt test

scala/test/watch:
	$(dc-run) scala sbt test-watch


ethereum/console:
	$(dc-run) ethereum npm run console

ethereum/migrate:
	$(dc-run) ethereum npm run migrate

ethereum/test:
	$(dc-run) ethereum npm run test

ethereum/test/watch:
	$(dc-run) ethereum npm run test:watch


react/build:
	$(dc-run) react npm run build


react-native/start/watch:
	$(eval host_ip ?= $(shell ifconfig | grep 'inet\s' | grep -Fv '127.0.0.1' | awk 'NR==1{print $$2}'))
	HOST_IP=$(host_ip) $(dc-run) --service-ports react-native
