from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    chistes = [
        "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
        "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
        "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!"
    ]
    
    chiste_index = random.randint(0, len(chistes))
    return render_template('index.html', chiste=chistes[chiste_index])

if __name__ == '__main__':
    app.run(debug=True)