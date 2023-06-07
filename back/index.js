const express = require('express');
const cors = require('cors');
const request = require('request');
const cheerio = require('cheerio');
const nodemon = require('nodemon');
const PORT = 5000;

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  const url = 'https://devfolio.co/hackathons';
  
  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      const hackathonDetails = [];
      const hackathonDetails2 = [];
      
      const devfolioHackathons = $('.Link__LinkBase-sc-af40de1d-0.lkflLS');
  

      devfolioHackathons.each((index, element) => {
        const hackathonName = $(element).find('.sc-tQuYZ.kHbpBI').text();
        const hackathonLink = $(element).attr('href');
        hackathonDetails.push({ hackathonName, hackathonLink });
      });

      const date = $(".sc-iWajrY.sc-jKDlA-D.fIIKMx");
      date.each((index, element) => {
        const hackathonDate = $(element).find('.sc-tQuYZ.EdbiX').text();
        const [status, startDate] = hackathonDate.split("Starts");
        hackathonDetails2.push({ status, startDate });
      });

      const AllDetails = hackathonDetails.map((element, index) => {
        return { ...element, ...hackathonDetails2[index] };
      });
      
      res.send(AllDetails);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
