from app.models import assignment, db, Assignment


def seed_assignments():
    assignment_one = Assignment(
        user_id=1, card_id=1
    )
    assignment_two = Assignment(
        user_id=2, card_id=1
    )
    assignment_three = Assignment(
        user_id=3, card_id=1
    )
    assignment_four = Assignment(
        user_id=1, card_id=2
    )
    assignment_five = Assignment(
        user_id=2, card_id=2
    )
    assignment_six = Assignment(
        user_id=3, card_id=3
    )

    db.session.add(assignment_one)
    db.session.add(assignment_two)
    db.session.add(assignment_three)
    db.session.add(assignment_four)
    db.session.add(assignment_five)
    db.session.add(assignment_six)

    db.session.commit()


def undo_assignments():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
