from app.models import db, Card


def seed_cards():
    card_one = Card(
        name='Card 1', description='This is a card description.', user_id=1, list_id=1
    )
    card_two = Card(
        name='Card 2', description='This is a card description.', user_id=1, list_id=1
    )
    card_three = Card(
        name='Card 3', description='This is a card description.', user_id=1, list_id=1
    )
    card_four = Card(
        name='Card 4', description='This is a card description.', user_id=2, list_id=2
    )
    card_five = Card(
        name='Card 5', description='This is a card description.', user_id=2, list_id=3
    )
    card_six = Card(
        name='Card 6', description='This is a card description.', user_id=2, list_id=4
    )

    db.session.add(card_one)
    db.session.add(card_two)
    db.session.add(card_three)
    db.session.add(card_four)
    db.session.add(card_five)
    db.session.add(card_six)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
