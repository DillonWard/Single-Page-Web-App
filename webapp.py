from flask import Flask, request, render_template
import couchdb


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

couch = couchdb.Server('http://localhost:5984/')
db = couch['game_scores'] 
for id in db:
    user = db.get(id)
    print (user['name'], user['score'])

    
if __name__ == "__main__":
    app.run()
=======
if __name__ == "__main__":
    app.run()
    
