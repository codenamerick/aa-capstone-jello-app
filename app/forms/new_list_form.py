from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, IntegerField, BooleanField, FileField
from wtforms.validators import DataRequired, ValidationError

def valid_name(form, field):
    # Checking if name len is less than 50 char.
    name = field.data

    if len(name) > 50:
        raise ValidationError('List name should be less than 50 characters.')

class NewListForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), valid_name])
    list_order=StringField('list_order', validators=[DataRequired()])
