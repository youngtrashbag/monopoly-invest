from flask import Blueprint, request, jsonify
from marshmallow import Schema, fields, ValidationError


currency = Blueprint('Currency', __name__)

# TODO: Maybe persist, and not only instantiate on runtime
currency_list = {}


class Currency:
    def __init__(self, name: str, value: int):
        self.name = name
        self.base_value = value
        # list of percentual changes
        self.changes = []


class CurrencySchema(Schema):
    name = fields.String(required=True)
    value = fields.Integer(required=True)
    changes = fields.List(fields.Float())


@currency.route('/new', methods=['POST'])
def new_currency():
    response_data = request.json
    schema = CurrencySchema()

    try:
        result = schema.load(response_data)
        new_c = Currency(result.name, result.value)
        currency_list[new_c.name] = new_c

        return jsonify(new_c), 201
    except ValidationError as e:
        return jsonify(e), 400


@currency.route('/<name>', methods=['GET'])
def get_currency(name):
    if c := currency_list.get(name):
        return jsonify(c), 200
    else:
        return 404


@currency.route('/<name>/value', methods=['GET'])
def get_value(name):
    if c := currency_list.get(name):
        value = c.value
        for change in c.changes:
            value *= change / 100

        return jsonify({value: value}), 200
    else:
        return 404
