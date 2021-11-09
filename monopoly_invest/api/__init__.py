from flask import Blueprint

from .currency import currency


API = Blueprint('API', __name__)
API.register_blueprint(currency, url_prefix='/currency')

