from flask import Flask

from monopoly_invest.api import API
from monopoly_invest.web import web_frontend

app = Flask(__name__)
app.register_blueprint(API, url_prefix='/api')
app.register_blueprint(web_frontend, url_prefix='/')

app.run(debug=True)
