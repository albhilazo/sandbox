FROM ethereum/client-go:v1.8.1

ARG genesis_file=genesis-block.json
ARG password_file=account-password.txt

WORKDIR /code
COPY . /code/

RUN geth --datadir . init ${genesis_file}

RUN geth --datadir . account new --password ${password_file} \
 && geth --datadir . account new --password ${password_file} \
 && geth --datadir . account new --password ${password_file}

RUN geth makedag 0 ~/.ethash \
 && geth makedag 30000 ~/.ethash

ENTRYPOINT []
CMD geth \
    --datadir . \
    --mine --minerthreads 2 \
    --unlock 0 --password account-password.txt \
    --networkid 4224 \
    --nodiscover --port 30303 --nat "any" \
    --rpc --rpcport 8545 --rpccorsdomain "*" \
    --rpcapi eth,web,personal,net \
    --ipcpath ~/.ethereum/geth.ipc
