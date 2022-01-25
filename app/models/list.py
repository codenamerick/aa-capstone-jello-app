from .db import db
from sqlalchemy.sql import func
import datetime


class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    board_id = db.Column(db.Integer, db.ForeignKey('boards.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(), onupdate=func.now(), default=func.now())
    list_order = db.Column(db.Text, nullable=False)

    boards = db.relationship('Board', back_populates='lists')
    cards = db.relationship('Card', back_populates='lists', cascade='all, delete')
    users = db.relationship('User', back_populates='lists')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'cards': [card.to_dict() for card in self.cards],
            'board_id': self.board_id,
            'user_id': self.user_id,
            'created_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S'),
            'updated_at': self.updated_at.strftime('%m/%d/%Y %H:%M:%S'),
            'list_order': self.list_order
        }
