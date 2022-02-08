from sqlalchemy import Integer
from sqlalchemy.sql.functions import user
from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Board, Member, List, User, db
from app.forms.new_board_form import NewBoardForm
from app.forms.edit_board_form import EditBoardForm

board_routes = Blueprint('boards', __name__)

@board_routes.route('', )
@board_routes.route('/')
@login_required
def get_boards():
    boards = Board.query.all()
    user_boards = [board for board in boards if current_user.id in board.member_ids()]

    return {'boards': [board.to_dict() for board in user_boards]}


@board_routes.route('/', methods=['POST'])
@login_required
def new_board():
    form = NewBoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        board = Board(
            name=form.data['name'],
            image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782657/board-bg-1_qkviry.png',
            user_id=current_user.id
        )

        db.session.add(board)
        db.session.commit()
        member = Member(
            user_id=current_user.id,
            board_id=board.to_dict()['id']
        )

        db.session.add(member)
        db.session.commit()

        return board.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @board_routes.route('/<int:boardId>/dragList', methods=['PUT'])
# @login_required
# def drag_board_list(boardId):
#     board = Board.query.get(int(boardId))
#     my_lists = board.lists

#     print('--------------------------')
#     print('REQ------', request.get_json())
#     print('--------------------------')
#     req = request.get_json()

#     # find list being moved
#     dragging_list_id = int(req['draggableId'].split('-')[1])
#     dragged_list = List.query.get(dragging_list_id)

#     # list destination
#     list_destination = int(req['droppableIndexEnd'])

#     print('HHHHHHHHHHHH--------HHHHHH_________-----', dragged_list.list_order)

#     dragged_list.list_order = list_destination

#     # print('NEW ORDER-----', dragged_list.list_order)

#     for list in my_lists:
#         print('ALL MY LISTS------', list.list_order)
#         if list.list_order == list_destination and list.id != dragging_list_id:
#             print('-------------DECREASE--------------', list.name)
#             list.list_order -= 1
#         elif list.list_order < list_destination and list.id != dragging_list_id:
#             print('-------------LESS THAN--------------', list.name)
#             list.list_order -= 1
#         elif list_destination < list.list_order and list.id != dragging_list_id:
#             print('-------------MORE THAN--------------', list.name)
#             # list.list_order += 1

#         db.session.commit()

#     # drag list itself
#     if req['dragType'] == 'list':
#         column = board.lists[req['droppableIndexStart']]
#         print('--------------------------')
#         print('WE DRAGGING LISTS NOW!!!', req['droppableIndexStart'], list, ':::', my_lists)
#         print('--------------------------')
#         # my_lists.pop(req['droppableIndexStart'])
#         print('--------------------------')
#         print('WE DRAGGING LISTS NOW!!!', req['droppableIndexStart'], list, ':::', my_lists)
#         print('--------------------------')
#         # my_lists.insert(req['droppableIndexEnd'], column)
#         print('--------------------------')
#         print('WE DRAGGING LISTS NOW!!!', req['droppableIndexEnd'], list, ':::', my_lists)
#         print('--------------------------')

#         return board.to_dict()

#     else:
#         print('--------------------------')
#         print('TRY AGAIN!!!')
#         print('--------------------------')

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@board_routes.route('/<int:boardId>', methods=['PUT'])
@login_required
def edit_board(boardId):
    form = EditBoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    board = Board.query.get(int(boardId))

    if form.validate_on_submit() and board.user_id == current_user.id:
        board.name=form.data['name']

        db.session.commit()

        return board.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400



@board_routes.route('/<int:boardId>', methods=['DELETE'])
@login_required
def delete_board(boardId):
    board=Board.query.get(int(boardId))

    # db.session.delete(board)
    # db.session.commit()

    # return board.to_dict()

    if board.user_id == current_user.id:
        db.session.delete(board)
        db.session.commit()

        return board.to_dict()



@board_routes.route('/<int:boardId>/members', methods=['POST'])
@login_required
def edit_members(boardId):
    userId = current_user.id
    user = User.query.get(int(userId))
    board = Board.query.get(int(boardId))
    if user and user not in board.members:
        member = Member(
            user_id=userId,
            board_id=boardId
        )
        db.session.add(member)
        db.session.commit()
        return board.to_dict()

    return {'errors': "bad user data"}
