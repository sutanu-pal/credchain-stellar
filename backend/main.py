from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
load_dotenv()  # MUST be first

from fastapi import FastAPI
from pydantic import BaseModel
import re

from stellar_utils import issue_credential_asset, verify_wallet
from ipfs_utils import upload_metadata

# --------------------------------------------------
# FastAPI App
# --------------------------------------------------
app = FastAPI(title="CredChain – Stellar Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# Request Model
# --------------------------------------------------
class CredentialRequest(BaseModel):
    recipient_name: str
    recipient_wallet: str
    credential_title: str
    description: str
    proof_url: str

# --------------------------------------------------
# Issue Credential
# --------------------------------------------------
@app.post("/issue-credential")
def issue_credential(data: CredentialRequest):
    metadata = {
        "recipient": data.recipient_name,
        "credential": data.credential_title,
        "description": data.description,
        "proof": data.proof_url
    }

    # IPFS (mocked or real)
    ipfs_hash = upload_metadata(metadata)

    # ✅ SAFE Stellar asset code
    safe_asset_code = re.sub(
        r'[^A-Z0-9]',
        '',
        data.credential_title.upper()
    )[:12]

    tx_hash = issue_credential_asset(
        recipient_wallet=data.recipient_wallet,
        asset_code=safe_asset_code,
        memo=ipfs_hash
    )

    return {
        "status": "issued",
        "transaction_hash": tx_hash,
        "asset_code": safe_asset_code,
        "ipfs_hash": ipfs_hash
    }

# --------------------------------------------------
# Verify Wallet
# --------------------------------------------------
@app.get("/verify/{wallet_address}")
def verify_credentials(wallet_address: str):
    return {
        "wallet": wallet_address,
        "credentials": verify_wallet(wallet_address)
    }
