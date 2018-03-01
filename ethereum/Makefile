geth_image := ethereum/client-go:v1.8.1
geth_alltools_image := ethereum/client-go:alltools-v1.8.1

run-puppeth:
	docker run -ti --rm -w /code -v $(shell pwd)/private:/code $(geth_alltools_image) \
		puppeth

init-node:
	docker run -ti --rm -w /code -v $(shell pwd)/private:/code $(geth_image) \
		--datadir . init genesis-block.json
