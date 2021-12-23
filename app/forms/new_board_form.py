from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, FileField
from wtforms.validators import DataRequired


class NewBoardForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    image_url = StringField('image_url')
