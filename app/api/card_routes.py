from sqlalchemy.sql.functions import user
from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Board, Member, User, List, Card, db
from app.forms.new_card_form import NewCardForm
from app.forms.edit_card_form import EditCardForm

card_routes = Blueprint('cards', __name__)


@card_routes.route('/<int:boardId>/lists/<int:listId>/cards', methods=['POST'])
@login_required
def new_card(boardId, listId):
    board = Board.query.get(int(boardId))
    list = List.query.get(int(listId))
    form = NewCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit() and current_user in board.members:
        card = Card(
            name=form.data['name'],
            user_id=current_user.id,
            list_id=listId
        )

        db.session.add(card)
        db.session.commit()

        return list.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@card_routes.route('/<int:boardId>/lists/<int:listId>/cards/<int:cardId>', methods=['PUT'])
# @login_required
def edit_card(boardId, listId, cardId):
    board = Board.query.get(int(boardId))
    list = List.query.get(int(listId))
    card = Card.query.get(int(cardId))
    form = EditCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit() and current_user in board.members:
        card.name=form.data['name']
        card.description=form.data['description']
        db.session.commit()

        return card.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@card_routes.route('/<int:boardId>/lists/<int:listId>/cards/<int:cardId>', methods=['DELETE'])
@login_required
def delete_board(boardId, listId, cardId):
    board=Board.query.get(int(boardId))
    list = List.query.get(int(listId))
    card = Card.query.get(int(cardId))

    if current_user in board.members:
        db.session.delete(card)
        db.session.commit()

        return list.to_dict()
