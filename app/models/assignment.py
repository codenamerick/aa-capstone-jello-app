from .db import db
from .card import Card
from .user import User


class Assignment(db.Model):
    __tablename__ = 'assignments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey(
        'cards.id'), nullable=False)

    users = db.relationship('User', back_populates='assignments')
    cards = db.relationship('Card', back_populates='assignments')
