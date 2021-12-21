from .db import db
from sqlalchemy.sql import func
import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    content = db.Column(db.Text, nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey('cards.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(), onupdate=func.now(), default=func.now())

    users = db.relationship('User', back_populates='comments')
    cards = db.relationship('Card', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'card_id': self.card_id,
            'user_id': self.user_id,
            'created_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S'),
            'updated_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S')
        }
