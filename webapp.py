import flask as myflask
from flask import Flask, request, render_template, url_for, json
import couchdb

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("Index.html")

@app.route('/postScores', methods = ['PUT'])
def postScores():
    score = myflask.request.get_json()
    db.save(score)
    
    return json.dumps(score)

@app.route('/scores', methods = ['GET'])
@app.route('/scores/<user>')
def scores():
    for id in db:
        user = db.get(id)
        print (user['name'], user['score'])
    
    return render_template("scores.html", name = scores)

@app.route('/GitHub')
def github():
    return render_template("github.html", name = github)

couch = couchdb.Server('http://localhost:5984/')
db = couch['game_scores'] 
    
if __name__ == "__main__":
    app.run()
    
