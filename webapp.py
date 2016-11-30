import flask as myflask
from flask import Flask, request, render_template, url_for, json
import couchdb

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("Index.html")


@app.route('/scores')
def scores():
    for id in db:
        user = db.get(id)
        print (user['name'], user['score'])
    rows = db.view('_all_docs', include_docs = True)
    docs = [row.doc for row in rows]
    test = json.dumps(docs)
    posts = json.loads(test)
    posts.reverse()
    return render_template("scores.html", posts = posts)

@app.route('/saveScore', methods=['POST'])
def saveScore():
    saveDoc = myflask.request.get_json();
    db.save(saveDoc)
    
    return "Saved" 

@app.route('/feedback', methods = ['GET','POST'])
def feedback():
    if request.method == 'POST':
        saveDoc = myflask.request.get_json();
        fb.save(saveDoc)
        return render_template("feedback.html", posts = posts)
    
    else:
        rows = fb.view('_all_docs', include_docs = True)
        docs = [row.doc for row in rows]
        test = json.dumps(docs)
        posts = json.loads(test)
        posts.reverse()
        return render_template("feedback.html", posts = posts)
'''
@app.route('/saveFeedback', methods = ['GET','POST'])
def feedback():
    
    
    rows = fb.view('_all_docs', include_docs = True)
    docs = [row.doc for row in rows]
    test = json.dumps(docs)
    posts = json.loads(test)
    posts.reverse()
    return posts
    '''

@app.route('/GitHub')
def github():
    return render_template("github.html")

couch = couchdb.Server('http://localhost:5984/')
db = couch['game_scores'] 
fb = couch['feedback']
    
if __name__ == "__main__":
    app.run()
    
