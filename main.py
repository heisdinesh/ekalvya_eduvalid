from bs4 import BeautifulSoup
import requests
from flask import Flask, jsonify
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi
from flask import request, render_template



app = Flask(__name__)
CORS(app)

@app.route('/')
def get_hackathons():
    html_text = requests.get("https://devfolio.co/hackathons").text
    soup = BeautifulSoup(html_text, 'lxml')
    devfolio_hackathons = soup.find_all('a', class_='Link__LinkBase-sc-af40de1d-0 lkflLS')
    hackathon_details = {}
    print(devfolio_hackathons)
    # for hackathon in devfolio_hackathons:
    #     hackathon_name = hackathon.find('h3', class_='sc-tQuYZ kHbpBI').text
    #     hackathon_link = hackathon['href']
    #     hackathon_details[hackathon_name] = hackathon_link
    # return (devfolio_hackathons)

if __name__ == '__main__':
    app.run()
