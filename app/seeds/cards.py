from app.models import db, Card


def seed_cards():
    card_one = Card(
        name='Take a look at the next project Card 1', description='This is a card description.', user_id=1, list_id=1
    )
    card_two = Card(
        name='Take a look at the next project Card 2', description='This is a card description.', user_id=1, list_id=1
    )
    card_three = Card(
        name='Take a look at the next project Card 3', description='This is a card description.', user_id=1, list_id=1
    )
    card_four = Card(
        name='Take a look at the next project Card 4', description='This is a card description.', user_id=2, list_id=2
    )
    card_five = Card(
        name='Take a look at the next project Card 5', description='This is a card description.', user_id=2, list_id=3
    )
    card_six = Card(
        name='Take a look at the next project Card 6', description='This is a card description.', user_id=2, list_id=4
    )
    card_seven = Card(
        name='Take a look at the next project Card 7', description='This is a card description.', user_id=1, list_id=1
    )
    card_eight = Card(
        name='Take a look at the next project Card 8', description='This is a card description.', user_id=1, list_id=1
    )
    card_nine = Card(
        name='Take a look at the next project Card 9', description='This is a card description.', user_id=1, list_id=1
    )
    card_ten = Card(
        name='Take a look at the next project Card 10', description='This is a card description.', user_id=2, list_id=2
    )
    card_elleven = Card(
        name='Take a look at the next project Card 11', description='This is a card description.', user_id=2, list_id=3
    )
    card_twelve = Card(
        name='Take a look at the next project Card 12', description='This is a card description.', user_id=2, list_id=4
    )
    card_thirteen = Card(
        name='Take a look at the next project Card 13', description='This is a card description.', user_id=1, list_id=3
    )

    db.session.add(card_one)
    db.session.add(card_two)
    db.session.add(card_three)
    db.session.add(card_four)
    db.session.add(card_five)
    db.session.add(card_six)
    db.session.add(card_seven)
    db.session.add(card_eight)
    db.session.add(card_nine)
    db.session.add(card_ten)
    db.session.add(card_elleven)
    db.session.add(card_twelve)
    db.session.add(card_thirteen)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
