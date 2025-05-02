from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('storytellingweb.html')

@app.route('/worksheet')
def worksheet():
    return render_template('finalworksheet.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=5003) 