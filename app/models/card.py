from .db import db
from sqlalchemy.sql import func
import datetime

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text)
    due_date = db.Column(db.DateTime(), server_default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    list_id = db.Column(db.Integer, db.ForeignKey('lists.id'), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(), onupdate=func.now(), default=func.now())

    users = db.relationship('User', back_populates='cards')
    lists = db.relationship('List', back_populates='cards')
    assignments = db.relationship('Assignment', back_populates='cards', cascade='all, delete')
    comments = db.relationship('Comment', back_populates='cards', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'due_date': self.due_date,
            'user_id': self.user_id,
            'list_id': self.list_id,
            # 'assignments': [user.id for user in self.assignments],
            # 'assignment_list': [user.to_dict() for user in self.assignments],
            'created_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S'),
            'updated_at': self.created_at.strftime('%m/%d/%Y %H:%M:%S')
        }

    def assignment_ids(self):
        return [user.id for user in self.assignments]
