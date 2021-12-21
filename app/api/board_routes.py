from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Board

board_routes = Blueprint('boards', __name__)



@board_routes.route('', )
@board_routes.route('/')
@login_required
def get_boards():
    boards = Board.query.all()
    user_boards = [board for board in boards if current_user.id() in board.member_ids()]

    return {'boards': [board.to_dict() for board in user_boards]}
    # return 'you made it to boards!'
    # return boards.to_dict()
