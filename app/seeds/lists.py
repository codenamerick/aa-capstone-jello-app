from app.models import db, List


def seed_lists():
    list_one = List(
        name='List 1', board_id=1, user_id=1
    )
    list_two = List(
        name='List 2', board_id=1, user_id=1
    )
    list_three = List(
        name='List 3', board_id=1, user_id=1
    )
    list_four = List(
        name='List 4', board_id=2, user_id=2
    )
    list_five = List(
        name='List 5', board_id=2, user_id=2
    )
    list_six = List(
        name='List 6', board_id=2, user_id=2
    )

    db.session.add(list_one)
    db.session.add(list_two)
    db.session.add(list_three)
    db.session.add(list_four)
    db.session.add(list_five)
    db.session.add(list_six)

    db.session.commit()


def undo_lists():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
