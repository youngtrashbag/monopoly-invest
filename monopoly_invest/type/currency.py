from marshmallow import Schema, fields


class Currency:
    def __init__(self, name: str, value: int):
        self.name = name
        self.base_value = value
        # list of values from base_value to latest value
        self.values = []

    def get_current_value(self):
        return self.values[-1]


class CurrencySchema(Schema):
    name = fields.String(required=True)
    base_value = fields.Integer(required=True)
    values = fields.List(fields.Float())
