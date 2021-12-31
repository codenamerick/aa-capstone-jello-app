from sqlalchemy.sql.functions import user
from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Board, Member, User, List, Card, db
from app.forms.new_list_form import NewListForm

card_routes = Blueprint('cards', __name__)


# @list_routes.route('/<int:boardId>/lists', methods=['POST'])
# @login_required
# def new_list(boardId):
#     board = Board.query.get(int(boardId))
#     form = NewListForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit() and current_user in board.members:
#         list = List(
#             name=form.data['name'],
#             user_id=current_user.id,
#             board_id=boardId
#         )

#         db.session.add(list)
#         db.session.commit()

#         return board.to_dict()

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @list_routes.route('/<int:boardId>/lists/<int:listId>', methods=['PUT'])
# @login_required
# def edit_list(boardId, listId):
#     form = EditListForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     list = List.query.get(int(listId))
#     board = Board.query.get(int(boardId))

#     if form.validate_on_submit() and current_user in board.members:
#         list.name=form.data['name']
#         db.session.commit()

#         return list.to_dict()

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @list_routes.route('/<int:boardId>/lists/<int:listId>', methods=['DELETE'])
# @login_required
# def delete_board(boardId, listId):
#     board=Board.query.get(int(boardId))
#     list = List.query.get(int(listId))

#     if current_user in board.members:
#         db.session.delete(list)
#         db.session.commit()

#         return list.to_dict()
