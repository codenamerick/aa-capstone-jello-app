from app.models import db, Comment


def seed_comments():
    comment_one = Comment(
        content='This is a card comment.', card_id=1, user_id=1
    )
    comment_two = Comment(
        content='This is a card comment.', card_id=1, user_id=2
    )
    comment_three = Comment(
        content='This is a card comment.', card_id=1, user_id=3
    )
    comment_four = Comment(
        content='This is a card comment.', card_id=2, user_id=1
    )
    comment_five = Comment(
        content='This is a card comment.', card_id=2, user_id=2
    )
    comment_six = Comment(
        content='This is a card comment.', card_id=2, user_id=3
    )

    db.session.add(comment_one)
    db.session.add(comment_two)
    db.session.add(comment_three)
    db.session.add(comment_four)
    db.session.add(comment_five)
    db.session.add(comment_six)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
