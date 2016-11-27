from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html", name = index)


@app.route('/scores')
@app.route('/scores/<user>')
def scores():
    return render_template("scores.html", name = scores)

@app.route('/GitHub')
def github():
    return render_template("github.html", name = github)

if __name__ == "__main__":
    app.run()
    