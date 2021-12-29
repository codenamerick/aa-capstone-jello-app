from sqlalchemy.sql.functions import user
from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Board, Member, User, List, db
from app.forms.new_board_form import NewBoardForm

list_routes = Blueprint('lists', __name__)


@list_routes.route('/<int:boardId>')
@login_required
def get_lists(boardId):
    lists = List.query.filter(List.board_id == boardId).all()
    # user_boards = [board for board in boards if current_user.id in board.member_ids()]

    return {'lists': [list.to_dict() for list in lists]}


# @board_routes.route('/', methods=['POST'])
# @login_required
# def new_board():
#     form = NewBoardForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         board = Board(
#             name=form.data['name'],
#             image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782657/board-bg-1_qkviry.png',
#             user_id=current_user.id
#         )

#         db.session.add(board)
#         db.session.commit()
#         member = Member(
#             user_id=current_user.id,
#             board_id=board.to_dict()['id']
#         )

#         db.session.add(member)
#         db.session.commit()

#         return board.to_dict()

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @board_routes.route('/<int:boardId>', methods=['PUT'])
# @login_required
# def edit_board(boardId):
#     form = EditBoardForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     board = Board.query.get(int(boardId))

#     if form.validate_on_submit() and board.user_id == current_user.id:
#         board.name=form.data['name']

#         db.session.commit()

#         return board.to_dict()

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @board_routes.route('/<int:boardId>', methods=['DELETE'])
# @login_required
# def delete_board(boardId):
#     board=Board.query.get(int(boardId))

#     # db.session.delete(board)
#     # db.session.commit()

#     # return board.to_dict()

#     if board.user_id == current_user.id:
#         db.session.delete(board)
#         db.session.commit()

#         return board.to_dict()
