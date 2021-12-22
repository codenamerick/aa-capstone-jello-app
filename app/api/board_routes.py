from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Board

board_routes = Blueprint('boards', __name__)

@board_routes.route('/users/<int:userId>/')
@login_required
def get_boards(userId):
    boards = Board.query.filter(Board.user_id == userId).all()

    return {'boards': [board.to_dict() for board in boards]}


@board_routes.route('/<int:boardId>/')
@login_required
def get_one_board(boardId):
    board = Board.query.get(boardId)

    return board.to_dict()
