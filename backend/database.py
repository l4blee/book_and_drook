import bson
from dataclasses import dataclass

from pymongo import MongoClient
import bcrypt


@dataclass
class UserModel:
    """
    Represents a user document in Mongo Database
    """
    login: str

    hashed_password: bson.Binary
    salt: bson.Binary

    @classmethod
    def from_record(cls, record: dict):
        return cls(
            login=record.get('login'),
            hashed_password=record.get('hashed_password').encode('utf-8'),
            salt=record.get('salt').encode('utf-8'),
        )
    
    def to_dict(self) -> dict:
        return {
            'login': self.login,
            'hashed_password': self.hashed_password.decode('utf-8'),
            'salt': self.salt.decode('utf-8')
        }

    def validate(self, password: bytes) -> bool:
        return bcrypt.hashpw(password, self.salt) == self.hashed_password


class MongoDB:
    def __init__(self, connection_url) -> None:
        self.client = MongoClient(connection_url)

        self.users = self.client.platform.users  # Users regisrty
