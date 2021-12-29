from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1636980908/jessica-felicio-QS9ZX5UnS14-unsplash_bkkqar.jpg', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1636973709/amir-seilsepour-5vg_SarQimA-unsplash_q2wbgx.jpg', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1636980906/ayo-ogunseinde-sibVwORYqs0-unsplash_iwco5f.jpg', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
