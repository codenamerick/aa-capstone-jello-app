from .db import db
from sqlalchemy.sql import func
import datetime

class Board(db.Model):
    __tablename__ = 'boards'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    image_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(), onupdate=func.now(), default=func.now())

    users = db.relationship('User', back_populates='boards')
    members = db.relationship('User', secondary='members', back_populates='boards')
    lists = db.relationship('List', back_populates='boards', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'image_url': self.image_url,
            'user_id': self.user_id,
            'members': [user.id for user in self.members],
            'lists': [list.to_dict() for list in self.lists],
            'created_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S'),
            'updated_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S')
        }

    def member_ids(self):
        return [user.id for user in self.members]
