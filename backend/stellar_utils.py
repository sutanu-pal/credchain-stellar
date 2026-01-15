from stellar_sdk import Server, Keypair, TransactionBuilder, Asset
from stellar_sdk.network import Network
import os

# Stellar testnet
HORIZON_URL = "https://horizon-testnet.stellar.org"
server = Server(horizon_url=HORIZON_URL)

# Issuer secret from .env
ISSUER_SECRET = os.getenv("STELLAR_ISSUER_SECRET")
issuer_keypair = Keypair.from_secret(ISSUER_SECRET)


def issue_credential_asset(recipient_wallet: str, asset_code: str, memo: str):
    """
    Issue a Stellar asset as a credential and send 1 unit
    """

    asset = Asset(asset_code, issuer_keypair.public_key)

    issuer_account = server.load_account(issuer_keypair.public_key)

    tx = (
        TransactionBuilder(
            source_account=issuer_account,
            network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
            base_fee=100,
        )
        .add_text_memo(memo[:28])  # memo limit
        .append_payment_op(
            destination=recipient_wallet,
            asset=asset,
            amount="1",
        )
        .build()
    )

    tx.sign(issuer_keypair)
    response = server.submit_transaction(tx)

    return response["hash"]


def verify_wallet(wallet_address: str):
    """
    Fetch all non-XLM assets held by a wallet
    """

    account = server.accounts().account_id(wallet_address).call()

    credentials = []

    for balance in account["balances"]:
        if balance["asset_type"] == "native":
            continue

        credentials.append({
            "title": balance["asset_code"],
            "issuer": balance["asset_issuer"],
            "issueDate": "On-chain",
            "proofUrl": "Stored in memo / IPFS",
            "verified": True
        })

    return credentials
