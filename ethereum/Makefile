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


node/init:
	$(docker-run) $(geth_image) --datadir . init genesis-block.json

node/run:
	$(docker-run) $(geth_image) \
		--datadir "." \
		--mine --minerthreads 2 \
		--unlock 0 --password account-password.txt \
		--networkid 4224 \
		--nodiscover --port "30303" --nat "any" \
		--rpc --rpcport "8545" --rpccorsdomain "*" \
		--rpcapi eth,web,personal,net \
		--ipcpath "~/.ethereum/geth.ipc"


account/create:
	$(docker-run) $(geth_image) --datadir . account new --password account-password.txt

account/list:
	$(docker-run) $(geth_image) --datadir . account list
