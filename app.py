from flask import Flask, render_template, request, flash, redirect, url_for
import os

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Change this to a random secret key

@app.route('/')
def index():
    return render_template('storytellingweb.html')

@app.route('/worksheet')
def worksheet():
    return render_template('finalworksheet.html')

@app.route('/contact', methods=['POST'])
def contact():
    # Get form data
    name = request.form.get('name')
    email = request.form.get('email')
    project_type = request.form.get('project_type')
    message = request.form.get('message')
    
    # Here you would typically save to database or send email
    # For now, we'll just flash a success message
    flash('Thank you for your message! We will get back to you within 24-48 hours.', 'success')
    
    # In a real application, you might want to:
    # 1. Validate the form data
    # 2. Save to database
    # 3. Send email notification
    # 4. Log the submission
    
    return redirect(url_for('index') + '#footer')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    # Get port from environment variable or use 5003 for local development
    port = int(os.environ.get('PORT', 5003))
    
    # For local development, use 127.0.0.1
    # For production (Render), use 0.0.0.0
    host = '0.0.0.0' if os.environ.get('RENDER') else '127.0.0.1'
    
    app.run(
        host=host,
        port=port,
        debug=True
    )