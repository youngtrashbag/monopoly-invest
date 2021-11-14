from __future__ import annotations
from flask_marshmallow import Schema
from flask_marshmallow.fields import fields


# TODO: Maybe persist, and not only instantiate on runtime
currency_list = {}


class Currency:
    def __init__(self, name: str, value: int):
        self.name = name
        self.base_value = value
        # list of values from base_value to latest value
        self.values = []

    def get_current_value(self):
        return self.values[-1]


class CurrencySchema(Schema):
    name = fields.Str(required=True)
    base_value = fields.Integer(required=True)
    values = fields.List(fields.Float(), required=False)
