var data = [
    {
        address: '234 grand av',
        city: 'North York',
        state: 'ON',
        rooms: 2,
        price: 1200,
        floorSpace: 2000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'https://www.guidehabitation.ca/wp-content/themes/gh/pub/auto/9386/xl-9386-1207580033x.jpg'
    },
    {
        address: '796 Birchpond Drive Elmira',
        city: 'North York',
        state: 'ON',
        rooms: 3,
        price: 1500,
        floorSpace: 3000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'https://www.metrocite.ca/wp-content/uploads/2017/11/phase-e-exterieur-web-1-1.jpg'
    },
    {
        address: '9381 Tower Street Belledune',
        city: 'North York',
        state: 'ON',
        rooms: 4,
        price: 2000,
        floorSpace: 3500,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2016_07_15_12_22_04_affinity_rose_streetscape_2_final.jpg'
    },
    {
        address: '7239 Bay View Street Trail',
        city: 'North York',
        state: 'ON',
        rooms: 4,
        price: 2000,
        floorSpace: 3500,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://precondo.ca/wp-content/uploads/2018/12/2018_08_24_09_31_28_xocondos_rendering-869x1024.jpg?x99535'
    },
    {
        address: '3 Blessing Ave. Camrose',
        city: 'North York',
        state: 'ON',
        rooms: 5,
        price: 2200,
        floorSpace: 5000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://d2tbfnbweol72x.cloudfront.net/6979606/files/2017/11/Condos-and-Villas-1.jpg?V=1.6'
    },
    {
        address: '298 St Margarets Road Eskasoni',
        city: 'Toronto',
        state: 'ON',
        rooms: 2,
        price: 2000,
        floorSpace: 3000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://condonow.com/Merge-Condos/images/Merge-Condos-rendering1-v32.jpg'
    },
    {
        address: '9 Hilltop St. Thompson',
        city: 'Toronto',
        state: 'ON',
        rooms: 3,
        price: 2500,
        floorSpace: 3400,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://rew-feed-images.global.ssl.fastly.net/crea_gkrol/property/singlefamily/19954311-1-m.jpg'
    },
    {
        address: '164 Grime Road London',
        city: 'Toronto',
        state: 'ON',
        rooms: 3,
        price: 3000,
        floorSpace: 3400,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'http://gulfelitemag.com/wp-content/uploads/2019/01/MW-EZ493_miami__20161104120841_ZH.jpg'
    },
    {
        address: '353 Roosevelt Drive Outremont',
        city: 'Toronto',
        state: 'ON',
        rooms: 4,
        price: 3500,
        floorSpace: 2000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'https://si.wsj.net/public/resources/images/B3-AO356_pureti_H_20180524174534.jpg'
    },
    {
        address: '407 East Sunny Street Laval-des-Rapides',
        city: 'Toronto',
        state: 'ON',
        rooms: 5,
        price: 4000,
        floorSpace: 5000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'https://greatgulf.com/wp-content/uploads/2016/10/trafalgar-condos-header-img-720x480.jpg'
    },
    {
        address: '8504 N. Ivory Ave. Thompson',
        city: 'Brampton',
        state: 'ON',
        rooms: 3,
        price: 2000,
        floorSpace: 3000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'https://www.washingtonian.com/wp-content/uploads/2017/06/lead-unit-2-2017-6-13-15-15-7-00-160hdr.jpg'
    },
    {
        address: '9699 Pleasant St. Red Bank',
        city: 'Brampton',
        state: 'ON',
        rooms: 3,
        price: 2200,
        floorSpace: 3500,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'https://www.highrises.com/images/slideshow/1097795269.jpg'
    },
    {
        address: '25 Hawthorne Street Saint-Colomban',
        city: 'Brampton',
        state: 'ON',
        rooms: 3,
        price: 2500,
        floorSpace: 3000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Apartment',
        image: 'http://insidercondos.com/images/20104/Musee-Condos/Musee-Condos-Rendering.jpg'
    },
    {
        address: '36 E. Blessing St. Boucherville',
        city: 'Brampton',
        state: 'ON',
        rooms: 3,
        price: 3000,
        floorSpace: 3000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://images.glaciermedia.ca/polopoly_fs/1.23491862.1541709176!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/millionaire-lottery-prize-home-vancouver-condo-kitchen-great-room-main.jpg'
    },
    {
        address: '985 North Swanson Street Summerside',
        city: 'Brampton',
        state: 'ON',
        rooms: 3,
        price: 3500,
        floorSpace: 4000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'http://karinebcharlebois.ca/wp-content/uploads/2016/02/TOUR-CAN-2-770x481.jpg'
    },
    {
        address: '797 Lower Street Boiestown',
        city: 'Missisauga',
        state: 'ON',
        rooms: 3,
        price: 3500,
        floorSpace: 4000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'http://theprereq.com/image/condo-living-room-idea/condo-living-room-idea-20-design-for-area-home-lover-balcony-philippine-picture-layout-color-dining-lighting-furniture-paint-kitchen.jpg'
    },
    {
        address: '23 Bayport Drive Mont-Laurier',
        city: 'Missisauga',
        state: 'ON',
        rooms: 3,
        price: 3500,
        floorSpace: 4000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://bestcalgaryhomes.com/wp-content/uploads/2019/05/five-west-condos-in-Calgary.jpg'
    },
    {
        address: '953 Water Ave. Aurora',
        city: 'Missisauga',
        state: 'ON',
        rooms: 3,
        price: 3500,
        floorSpace: 4000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://maryrobertcondos.com/wp-content/uploads/2017/10/devimco_maryrobert_vuecondos.jpg'
    },
    {
        address: '992 Diamond St. Asbestos',
        city: 'Missisauga',
        state: 'ON',
        rooms: 3,
        price: 3500,
        floorSpace: 4000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://rew-feed-images.global.ssl.fastly.net/creb/listing/apartment/c4214469-1-o.jpg'
    },
    {
        address: '51 Alton Ave. Loch Lomond',
        city: 'Missisauga',
        state: 'ON',
        rooms: 3,
        price: 3500,
        floorSpace: 4000,
        extras: [
            'elevator', 
            'gym'
        ],
        homeType: 'Condo',
        image: 'https://cdn.vox-cdn.com/thumbor/NeX2IvnaTUvJ8UtQ_yLI-jo3gOE=/0x0:2600x1733/1200x800/filters:focal(1092x659:1508x1075)/cdn.vox-cdn.com/uploads/chorus_image/image/60722051/1300PikeSt_Cam3People_111816.0.png'
    },
];

export default data