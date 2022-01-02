from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, ValidationError


def valid_name(form, field):
    # Checking if name len is less than 50 char.
    name = field.data

    if len(name) > 50:
        raise ValidationError('Card name should be less than 50 characters.')

class EditCardForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), valid_name])
    description = TextAreaField('description')
