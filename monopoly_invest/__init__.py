from __future__ import annotations
from flask import Flask

from monopoly_invest.api import API
from monopoly_invest.web import web_frontend


app = Flask(__name__)
app.register_blueprint(API, url_prefix='/api')
app.register_blueprint(web_frontend, url_prefix='/')

# TODO: why not available at /static/index.css
print(web_frontend.static_url_path, web_frontend.static_folder)

app.run(debug=True)
