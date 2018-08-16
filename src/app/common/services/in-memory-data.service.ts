import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const login = [{
      id: 1,
      firstName: 'User',
      lastName: 'Test',
      lastLogin: '08-15-2018 3:00 PM'
    }];
    const  cars = [
      {
        id: 1,
        model: 'Audi',
        year: 2016,
        picture: 'https://www.audi.com.co/media/Theme_Banners_Banner_Image_Component/50675-banner-281201-image/dh-1400-517e10/9c88844c/1532473593/a5-cabrio-4.jpg',
        mark: 'A5 Cabrio',
        cost: '40.000'
      },
      {
        id: 2,
        model: 'Audi',
        year: 2018,
        picture: 'https://www.audi.com.co/media/Theme_Banners_Banner_Image_Component/50100-banner-276266-image/dh-1400-517e10/b1b39e8f/1528917290/aq3-171001previewlarge.png',
        mark: 'Q3 S line',
        cost: '32.000'
      },
      {
        id: 3,
        model: 'Ferrari',
        year: 2018,
        picture: 'https://auto.ferrari.com/es_ES/wp-content/uploads/sites/12/2016/07/488-spider-bozzetto-v2-EU.jpg',
        mark: '488 Spider ',
        cost: '138.000'
      },
      {
        id: 4,
        model: 'Ferrari',
        year: 2018,
        picture: 'https://auto.ferrari.com/es_ES/wp-content/uploads/sites/12/2016/01/ferrari-488gtb-bozzetto1.jpg',
        mark: '488 GTB ',
        cost: '132.000'
      },
      {
        id: 5,
        model: 'Ferrari',
        year: 2018,
        picture: 'https://auto.ferrari.com/es_ES/wp-content/uploads/sites/12/2018/02/ferrari-812-superfast-design-draft-2.jpg',
        mark: '812 Superfast',
        cost: '162.000'
      },
      {
        id: 6,
        model: 'Lamborghini',
        year: 2016,
        picture: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/configuratore%20nuovo/huracan-coupe-configuratore.jpg',
        mark: '8Huracán COUPE',
        cost: '262.000'
       },
       {
        id: 7,
        model: 'Lamborghini',
        year: 2016,
        picture: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/concept/asterion/asterion.png',
        mark: 'Concept Asterion',
        cost: '112.000'
       },
       {
        id: 8,
        model: 'Maserati',
        year: 2016,
        picture: 'https://www.maserati.com/mediaObject/sites/international/Models/MY19/classic/ghibli55/resolutions/res-l800x10000/ghibli55.jpg',
        mark: 'Ghibli',
        cost: '87.000'
       },
       {
        id: 9,
        model: 'Maserati',
        year: 2016,
        picture: 'https://www.maserati.com/mediaObject/sites/international/Models/MY19/classic/ghibli55/resolutions/res-l800x10000/ghibli55.jpg',
        mark: 'Gran Turismo',
        cost: '97.000'
       },
       {
        id: 10,
        model: 'BMW',
        year: 2019,
        picture: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/3-series/sedan/2015/at-a-glance/3-series-sedan-at-a-glance-ts.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1447942758095.jpg',
        mark: 'Sedan 3',
        cost: '97.000'
       }
    ];
    const car_details = [
      {
        id: 1,
        description: 'It is the new member of the Q3 family, a limited edition more aesthetic, more intense and more sporty. The S-line Black breaks with the traditional, is made for the risky and for the authentic ones. He Black color in this edition predominates emphasizing its strong and elegant personality.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: '2.0 TFSI'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '255 hp'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 7},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
      }, {
        id: 2,
        description: 'The Audi A5 Cabrio gives an indescribable feeling of freedom, more expressive lateral lines highlighting the sportiness and sophistication that characterize the new design of the A5 family. Inside you will find the latest design features the brand with high comfortable functionalities',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: '1.4 tetra'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '150 hp'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 7},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
      }, {
        id: 3,
        description: 'Each of the areas of the 488 Spider has been designed to become new technological techniques within the sector, starting with the RHT (Retractable Hard Top - Retractable Hard Roof), from which the car has been developed.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'v8'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '692 KW'},
          {key: ' gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 9},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'},
        ]
      }, {
        id: 4,
        description: 'Ferrari has also chosen to use its known and patented Retractable Hard Roof (RHT - Rectractable Hard Top) which allowed the 458 Spider to become the first car in the world to use this system with a central rear engine.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'v8'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '492 KW'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 9},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
      }, {
        id: 5,
        description: 'The name 488 GTB marks the return to the denomination of the classic Ferrari models: the 488 indicates the unit displacement of each cylinder, while the GTB stands for Gran Turismo Berlinetta. The new car not only offers unmatched performance, but also makes that extreme power usable and controllable to unprecedented levels, even for less experienced drivers.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'v12 6.5'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '8500 KW'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 7},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Manual and Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
      }, {
        id: 6,
        description: 'Hurricane Spyder, designed to cut the air and merge with the sky, represents the ultimate expression of Italian taste and craftsmanship: the concept of a supercar rises to achieve the performance and sensations of a coupe.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'v10 60'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '449 KW'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 6},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Manual and Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
      }, {
        id: 7,
        description: 'The Hurricane Coupé was created to have the best benefits. All the power and acceleration of a V10 aspirated engine, without sacrificing control and driving pleasure, thanks to the permanent four-wheel drive and the 7-speed Lamborghini Doppia Frizione (LDF - Lamborghini Double Clutch), as well as the innovative Piattaforma Inerziale Lamborghini (LPI - Lamborghini Inertial Platform), created to directly and accurately detect all movements of the body and for an immediate adjustment of car configurations. All the characteristics and the technical sheet of Hurricane Coupé are listed below.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'Hybrid PHEV'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '449 KW'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 8},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value:'Manual and Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas or solar energy'}
        ]
       }, {
        id: 8,
        description: 'The first Maserati Ghibli was designed and unveiled at the Turin Motor show of the 1966. It followed a tradition pioneered by Maserati with the glorious A6 1500 of 1947: it was a grand tourer. That meant it delivered on the promise of glorious style, high-powered luxury and peerless comfort over almost any distance the owner cared to consider.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'V6'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '350 HP`'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 8},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Manual and Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
       }, {
        id: 9,
        description: ' Uniquely, the Grand Touring is at the heart of every single Maserati. The original concept was enticingly simple. It involved fitting a sophisticated race car engine into a luxurious, handcrafted sedan. Seamlessly combining these two worlds was, of course, far from simple. Yet it is exactly what Maserati did in 1947 with the A6 1500 GT Pininfarina and some years later with the 3500GT prototype: “The White Dame”. Such power had never been so beautifully packaged and delivered – opening up all kinds of new, long-distance possibilities.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'V8'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '460 HP`'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 6},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
       }, {
        id: 10,
        description: 'The original since 1975: the BMW 3 Series is the embodiment of a sports sedan. In its sixth generation, this irresistible combination of dynamic design and extraordinary functionality for everyday life is as amazing as ever. Its optimal weight distribution, classic rear-wheel drive and its powerful and efficient gasoline engines with BMW EfficientDynamics technology guarantee excellent dynamism and low fuel consumption. In addition, the Sport, Luxury and M Sport finishes allow you to adapt the BMW 3 Series Sedan to your personal needs and desires.',
        specifications: [
          {key: 'machine', icon: 'http://pluspng.com/img-png/car-engine-png-hd-engine-picture-png-image-515.png', value: 'V8'},
          {key: 'power', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NpFN8sFUo1PKfCi4HUYtlAoicjTsPSsxGF5lUEU-LjJCp9JH', value: '326 HP`'},
          {key: 'gearbox', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT4xO7ac1qvrkz76MTBqf4Z-kkBWi84_uXVgYx7WMYkzady36', value: 6},
          {key: 'type', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzC_IiF1ioj-Azl5i4Fh4U3NxLu_WZL-weFKC_-x4FvMksoGv', value: 'Automatic'},
          {key: 'fuel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKFHKiVPj-3AhnOA_HmIx8MblWXwkNfxBwqWsbIDYuoxH2vlg', value: 'Gas'}
        ]
       }
    ];

    return {cars, car_details, login};
  }
}


