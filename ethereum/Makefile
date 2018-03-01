.SILENT:

define geth_image
	ethereum/client-go:v1.8.1
endef
define geth_alltools_image
	ethereum/client-go:alltools-v1.8.1
endef

define docker-run
	docker run -ti --rm -w /code -v $(shell pwd)/private:/code
endef


run-puppeth:
	$(docker-run) $(geth_alltools_image) puppeth

init-node:
	$(docker-run) $(geth_image) --datadir . init genesis-block.json


account/create:
	$(docker-run) $(geth_image) --datadir . account new

account/list:
	$(docker-run) $(geth_image) --datadir . account list
