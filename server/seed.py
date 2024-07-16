from app import db
from models import Product

db.create_all()

# Add initial products
product1 = Product(name='Apple', price=0.5, description='Fresh Apple', image_url='http://example.com/apple.jpg')
product2 = Product(name='Banana', price=0.3, description='Fresh Banana', image_url='http://example.com/banana.jpg')

db.session.add(product1)
db.session.add(product2)
db.session.commit()
