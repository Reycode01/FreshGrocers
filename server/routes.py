from app import app, db
from flask import request, jsonify
from models import Product, User, Cart

@app.route('/products', methods=['GET', 'POST'])
def manage_products():
    if request.method == 'POST':
        data = request.json
        new_product = Product(
            name=data['name'],
            price=data['price'],
            description=data['description'],
            image_url=data['image_url']
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify({'message': 'Product added successfully'}), 201
    else:
        products = Product.query.all()
        return jsonify([product.to_dict() for product in products])

@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get(id)
    if product:
        db.session.delete(product)
        db.session.commit()
        return jsonify({'message': 'Product deleted successfully'}), 200
    else:
        return jsonify({'message': 'Product not found'}), 404

# Additional routes for users, cart, and payments can be added similarly
