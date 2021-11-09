from flask import Flask

from api import API

app = Flask(__name__)
app.register_blueprint(API, url_prefix='/api')

app.run(debug=True)
