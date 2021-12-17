from .db import db
from sqlalchemy.sql import func
import datetime


class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    board_id = db.Column(db.Integer, db.ForeignKey('boards.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(), server_default=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S'),
            'updated_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S')
        }
