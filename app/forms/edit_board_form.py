from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, FileField
from wtforms.validators import DataRequired


class EditBoardForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
