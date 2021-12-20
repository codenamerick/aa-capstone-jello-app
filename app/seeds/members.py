from app.models import db, Member


def seed_members():
    member_one = Member(
        user_id=1, board_id=1
    )
    member_two = Member(
        user_id=1, board_id=2
    )
    member_three = Member(
        user_id=1, board_id=3
    )
    member_four = Member(
        user_id=2, board_id=1
    )
    member_five = Member(
        user_id=2, board_id=2
    )
    member_six = Member(
        user_id=3, board_id=1
    )

    db.session.add(member_one)
    db.session.add(member_two)
    db.session.add(member_three)
    db.session.add(member_four)
    db.session.add(member_five)
    db.session.add(member_six)

    db.session.commit()


def undo_members():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
