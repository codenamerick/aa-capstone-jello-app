from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, FileField
from wtforms.validators import DataRequired, ValidationError


def valid_name(form, field):
    # Checking if name len is less than 50 char.
    name = field.data

    if len(name) > 50:
        raise ValidationError('Board name should be less than 50 characters.')

class EditBoardForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), valid_name])
