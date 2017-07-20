'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Public route
app.get('/api/deals/public', function (req, res){
  
  let deals = [
  {
    id: 12231,
    name: 'Redmi 4A (Gold, 16GB)',
    image: 'images/1.jpg',
    description: 'The Playstation 4 is the next gen console to own. With the best games and online experience.',
    originalPrice: 399.99,
    salePrice: 299.99
  },
  {
    id: 12234,
    name: 'Micromax Canvas Fire 5 Q386 (Champagne)',
    image: 'images/2.jpg',
    description: 'The Note 7 has been fixed and will no longer explode. Get it an amazing price!',
    originalPrice: 899.99,
    salePrice: 499.99
  },
  {
    id: 12245,
    name: 'OnePlus 5 (Slate Gray 6GB RAM + 64GB memory)',
    image: 'images/3.jpg',
    description: 'The Macbook Pro is the de-facto standard for best in breed mobile computing.',
    originalPrice: 2199.99,
    salePrice: 1999.99
  },
  {
    id: 12267,
    name: 'Samsung Galaxy On8 (Gold)',
    image: 'images/4.jpg',
    description: 'Turn your home into a smart home with Amazon Echo. Just say the word and Echo will do it.',
    originalPrice: 179.99,
    salePrice: 129.99
  },
  {
    id: 12288,
    name: 'Intex Elyt E7 (32 GB, Champagne)',
    image: 'images/5.jpg',
    description: 'The Nest Outdoor camera records and keeps track of events outside your home 24/7.',
    originalPrice: 199.99,
    salePrice: 149.99
  },
  {
    id: 12290,
    name: 'InFocus Bingo 10 M415 (White, 8GB)',
    image: 'images/6.jpg',
    description: 'Record yourself in first person 24/7 with the GoPro 4. Show everyone how exciting your life is.',
    originalPrice: 299.99,
    salePrice: 199.99
  }
  ];
  res.json(deals);
})



app.listen(3001,function(){
    console.log('Serving deals on localhost:3001');
});
