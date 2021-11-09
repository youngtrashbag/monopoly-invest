from flask import Blueprint, request, jsonify
from marshmallow import Schema, fields, ValidationError


currency = Blueprint('Currency', __name__)


class Currency:
    def __init__(self, name: str, value: int):
        self.name = name
        self.value = value
        self.changes = []


class CurrencySchema(Schema):
    name = fields.String(required=True)
    value = fields.Integer(required=True)
    changes = fields.List()


@currency.route('/new', methods=['POST'])
def new_currency():
    response_data = request.json
    schema = CurrencySchema()

    try:
        result = schema.load(response_data)
        new_c = Currency(result.name, result.value)
        # TODO: save currency
    except ValidationError as e:
        return jsonify(e), 400

    return f'{request.method} - {request.json}'
