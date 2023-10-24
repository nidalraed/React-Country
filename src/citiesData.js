const cities = [
    { name: 'Amman', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Temples_Ancient_and_More_Ancient.jpg/300px-Temples_Ancient_and_More_Ancient.jpg' },
    { name: 'Zarqa', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/%D9%85%D9%8A%D8%AF%D8%A7%D9%86_%D8%A7%D9%84%D8%AC%D9%8A%D8%B4_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_3.jpg/420px-%D9%85%D9%8A%D8%AF%D8%A7%D9%86_%D8%A7%D9%84%D8%AC%D9%8A%D8%B4_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_3.jpg' },
    { name: 'Irbid', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/ar/thumb/4/4a/Irbid_Collage.jpg/1024px-Irbid_Collage.jpg' },
    { name: 'Alsat', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/AS-SALT_2.png/420px-AS-SALT_2.png' },
    { name: 'Aqaba', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/AQABA_2.png/420px-AQABA_2.png' },
    { name: 'ar-Ramtha', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Reservoir_%28Jordan_University_of_Science_and_Technology%29.jpg/330px-Reservoir_%28Jordan_University_of_Science_and_Technology%29.jpg' },
    { name: 'Jerash', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Jerash_01.jpg/420px-Jerash_01.jpg' },
    { name: 'al-Mafraq', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mafraq_Tank_Circle.jpg/420px-Mafraq_Tank_Circle.jpg' },
    { name: 'al-Karak', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/14_Al-Karak_2.JPG/420px-14_Al-Karak_2.JPG' },
    { name: 'Madaba', country: 'Jordan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/MADABA_2.png/420px-MADABA_2.png' },
  
    { name: 'Aleppo	', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mosques_and_minarets_of_Aleppo%2C_Syria.jpg/330px-Mosques_and_minarets_of_Aleppo%2C_Syria.jpg' },
    { name: 'Damascus', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Umayyad_Square%2C_Damascus.jpg/388px-Umayyad_Square%2C_Damascus.jpg' },
    { name: 'Daraa', country: 'Syria', image: 'https://www.alquds.co.uk/wp-content/uploads/2020/05/%D8%B3%D9%88%D8%B1%D9%8A%D8%A7-%D9%85%D9%84%D8%A7%D9%85%D8%AD-%D9%85%D8%B9%D8%B1%D9%83%D8%A9-%D9%81%D9%8A-%D8%AF%D8%B1%D8%B9%D8%A7-%D9%88%D8%B3%D8%B7-%D8%AA%D8%B9%D8%B2%D9%8A%D8%B2%D8%A7%D8%AA-%D8%BA%D9%8A%D8%B1-%D9%85%D8%B3%D8%A8%D9%88%D9%82%D8%A9-730x438.jpg' },
    { name: 'Latakia', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Latakia_Collage.jpg/375px-Latakia_Collage.jpg' },
    { name: 'Homs', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Homs_Collage.jpg' },
    { name: 'As-Suwayda', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/As-Suwayda_The_Agora_of_Dionysias.jpg/375px-As-Suwayda_The_Agora_of_Dionysias.jpg' },
    { name: 'Idlib', country: 'Syria', image: 'https://aramme.com/thumb/w920/uploads/images/2022/12/HIGE1.jpeg' },
    { name: 'Tartus', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Hamrat.jpg/375px-Hamrat.jpg' },
    { name: 'Al-Hasakah', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Hasakah%2Carmen.church.jpg' },
    { name: 'Deir ez-Zo', country: 'Syria', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Deir_ez-Zor_collection.jpg/450px-Deir_ez-Zor_collection.jpg' },



        { name: 'Jerusalem', country: 'Palestine', image: 'https://i0.wp.com/www.touristjordan.com/wp-content/uploads/2017/10/Dome-of-the-Rock-Tourist-Israel.jpg?fit=1024%2C577&ssl=1' },
        { name: 'Hebron', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Tombs_of_the_Patriarchs.jpg/420px-Tombs_of_the_Patriarchs.jpg' },
        { name: 'Ramallah', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/PS-Ramallah_view.JPG/420px-PS-Ramallah_view.JPG' },
        { name: 'Bethlehem', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bethlehem_collage.jpg/409px-Bethlehem_collage.jpg' },
        { name: 'Nablus', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D8%B5%D9%88%D8%B1%D8%A9_%D9%84%D9%85%D8%AF%D9%86%D9%8A%D8%A9_%D9%86%D8%A7%D8%A8%D9%84%D8%B3.jpg/270px-%D8%B5%D9%88%D8%B1%D8%A9_%D9%84%D9%85%D8%AF%D9%86%D9%8A%D8%A9_%D9%86%D8%A7%D8%A8%D9%84%D8%B3.jpg' },
        { name: 'Jenin', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jenin-new.jpg/420px-Jenin-new.jpg' },
        { name: 'Tulkarm', country: 'Palestine', image: 'https://lh5.googleusercontent.com/p/AF1QipMtuU7X-TyD72_19L7mXKCXkmQr7kx2k4BbR0kw=w540-h312-n-k-no' },
        { name: 'Qalqilya', country: 'Palestine', image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQlWC4ZT13d1z0L-47rSRb2WJha4e_tW1uw33p1eQGytTcBmnrBwmFjXd4ifxmkrhii7sOPl16dtgDV5WpPL-1GI1RNRmPK' },
        { name: 'Tubas', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tubas.jpg/420px-Tubas.jpg' },
        { name: 'Gaza', country: 'Palestine', image: 'https://english.sawtbeirut.com/wp-content/uploads/2023/07/2023-07-19T122123Z_103066626_RC2C42AC17O9_RTRMADP_3_PALESTINIANS-HAMAS-SALARIES-800x549.jpg' },
        { name: 'Khan Yunis', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Khan_Yunis_panorama.jpg/420px-Khan_Yunis_panorama.jpg' },
        { name: 'Rafah', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/ar/thumb/1/13/Rafah-11252.jpg/420px-Rafah-11252.jpg' },
        { name: 'Al-Ramla', country: 'Palestine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/White_to.jpg/330px-White_to.jpg' },

      

      
  ];
  
  export default cities;
  