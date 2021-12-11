// import { storageService } from './async-storage.service';
// import { userService } from './user.service';
import { httpService } from './http.service';

import Axios from 'axios'; var axios = Axios.create({ withCredentials: true });

// const STAY_KEY = 'stays';
// createStays();

const STAY_URL = (process.env.NODE_ENV !== 'development')
  ? '/api/stay/'
  : '//localhost:3030/api/stay/';

export const stayService = {
    add,
    query,
    remove,
    getById,
};

async function query(filterBy) {
    // return storageService.query(STAY_KEY);
  try {
    // const res = await axios.get(STAY_URL, { params: filterBy })
    return httpService.get('stay/', filterBy)
    // return res.data;
  }
  catch (err) {
    console.log(err)
    throw err;
  }
}

async function remove(stayId) {
    // return storageService.delete(STAY_KEY, stayId);
    try {
      const res = await axios.delete(STAY_URL + stayId);
      return res.data;
    }
    catch (err) {
      console.log(err);
      throw err;
    }
}

async function add(stay) {
    // stay.byUser = userService.getLoggedinUser()
    // stay.aboutUser = await userService.getById(stay.aboutUserId)
    // const addedStay = storageService.post(STAY_KEY, stay);
    // return addedStay;
    if (stay._id) {
      try {
        const res = await axios.put(STAY_URL + stay._id, stay);
        return res.data;
      }
      catch (err) {
        console.log(err)
        throw err;
      }
    } else {
      try {
        const res = await axios.post(STAY_URL, stay);
        return res.data;
      }
      catch (err) {
        console.log(err);
        throw err;
      }
    }
}

// async function createStays() {
//     try {
//         let stays = await storageService.query(STAY_KEY);
//         if (!stays || !stays.length) {
//             stays = [
//                 {
//                     _id: 's101',
//                     createdAt: 20180203073000,
//                     name: 'Charming Duplex',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-olga-lioncat-7247545_i4ltzk.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-john-tekeridis-1428348_ecxyee.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302854/beds/bed23_ouue4q.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307591/kitchen/pexels-cleyder-duque-3637739_rxabep.jpg',
//                     ],
//                     price: 80,
//                     summary:
//                         'Fantastic duplex apartment with three bedrooms, located in the historic area.',
//                     capacity: 8,
//                     bedrooms: 2,
//                     beds: 4,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // "Smoking allowed",
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'London',
//                         address: 'Oxford, London, UK',
//                         lng: -0.142,
//                         lat: 51.5153,
//                     },
//                     reviews: [
//                         {
//                             id: 'r101',
//                             rate: 5,
//                             txt: 'Very helpful hosts. Cooked traditional...',
//                             category: {
//                                 Cleanliness: 5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4.5,
//                             },

//                             by: {
//                                 _id: 'u102',
//                                 fullname: 'user2',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r102',
//                             rate: 3.5,
//                             txt: 'ok, could be better...',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 3.5,
//                                 Location: 4.5,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u103',
//                                 fullname: 'user3',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r103',
//                             rate: 4,
//                             txt: 'fine...',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u104',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r104',
//                             rate: 4,
//                             txt: 'Nice place to be on vacation',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u105',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r105',
//                             rate: 3.5,
//                             txt: 'You get what you pay for but it’s a good stay. Easily accessible and close to great food spots. Hot water, AC comfy bed and they allowed my dog with no hassle! Recommend if looking for something affordable!',
//                             category: {
//                                 Cleanliness: 3,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u106',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r106',
//                             rate: 3,
//                             txt: 'The spot was dirty when we arrived. The filthy apartment had already left a bad taste. There was also no soap in the bathroom and not enough toilet paper. It’s almost like he forgot that we were coming.',
//                             category: {
//                                 Cleanliness: 3,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u107',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                     ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's102',
//                     createdAt: 20180203073000,
//                     name: 'Light and Airy Bedroom in Camden',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304300/London/pexels-olga-lioncat-7245356_hg78cw.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302844/beds/bed11_cjcvih.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307258/bathroom/pexels-max-vakhtbovych-6296924_wwntde.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307586/kitchen/pexels-charlotte-may-5824485_d6zjc8.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351955/desk/pexels-hristo-sahatchiev-821357_crvrkz.jpg',
//                     ],
//                     price: 76.0,
//                     summary:
//                         'Our amazing property has easy access to restaurants, cafes, bars and is walking distance from High Street Kensington where you can find a multitude of retail shops',
//                     capacity: 4,
//                     bedrooms: 2,
//                     beds: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         // "Pets allowed"
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'London',
//                         address: 'Camden, London, UK',
//                         lng: -0.19359,
//                         lat: 51.5276,
//                     },
//                     reviews: [
//                         {
//                             id: 'r101',
//                             rate: 5,
//                             txt: 'Very nice small flat with a separate kitchen, office and bedroom/living room (+shower room with toilet). The flat is modern, bright and warm in the winter. The host was responsive and helpful. I recommend!',
//                             category: {
//                                 Cleanliness: 5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 4.5,
//                                 Accessibility: 4.5,
//                             },

//                             by: {
//                                 _id: 'u102',
//                                 fullname: 'user2',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r102',
//                             rate: 4,
//                             txt: 'Good if you can handle heater not working at night and a not so warm shower in the following morning',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u103',
//                                 fullname: 'user3',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r103',
//                             rate: 4,
//                             txt: "Amazingly located, with lots of connections with public transport. Very competitive price and well equipped. The host is incredibly attentive. It's impossible to get it better than this",
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u104',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r104',
//                             rate: 4,
//                             txt: 'Perfect for a brief visit to London. Comfy bed and super clean. The host is super accommodating and friendly. Easy transport links to the centre.',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u105',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r105',
//                             rate: 3.5,
//                             txt: 'my first airbnb experience was very positive the host was very welcoming and friendly the location is perfect for going into london the bus stop to kings cross is just over the road would be happy to stay here again',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u106',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r106',
//                             rate: 4,
//                             txt: 'It was perfect for my one night stay with my girlfriend ! Really practical if you want to visit London as they are bus stops literally everywhere around ! Everything was clean and the host was really welcoming !',
//                             category: {
//                                 Cleanliness: 4.5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 4,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u107',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                     ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's103',
//                     createdAt: 20180203073000,
//                     name: 'Great and Cosy London Studio Flat',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304291/London/pexels-lina-kivaka-4482667_srz4ve.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638265491/beds/zz5sniezdreet4wotz2s.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307573/kitchen/pexels-pixabay-279648_tzqm4i.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302862/beds/bed18_xcwxiq.jpg',
//                     ],
//                     price: 180.0,
//                     summary:
//                         'Gorgeous double room with access to well stocked kitchen, multiple bathrooms and lovely backyard.',
//                     capacity: 6,
//                     bedrooms: 2,
//                     beds: 3,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         // "Pets allowed"
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'London',
//                         address: 'Soho, London, UK',
//                         lng: -0.1369,
//                         lat: 51.5125,
//                     },
//                     reviews: [
//                         {
//                             id: 'r101',
//                             rate: 5,
//                             txt: 'We had a fabulous stay. The host was on hand for anything we needed, met us on arrival and kindly carried out bags up to the apartment. Would highly recommend and will definitely stay again.',
//                             category: {
//                                 Cleanliness: 5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 5,
//                                 Accessibility: 4.5,
//                             },

//                             by: {
//                                 _id: 'u102',
//                                 fullname: 'user2',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r102',
//                             rate: 4,
//                             txt: 'This is an excellently equipped and located apartment within 20 minutes of most of the London attractions. It is furnished beautifully and has everything you need to enjoy your stay.',
//                             category: {
//                                 Cleanliness: 4.5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u103',
//                                 fullname: 'user3',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r103',
//                             rate: 4.5,
//                             txt: 'This place is perfect for anyone looking to have a nice stay in Soho. We were really impressed by the quality of the property and it’s location, especially considering the affordability. Amazing value for money!',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u104',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r104',
//                             rate: 4,
//                             txt: 'Really great space, very clean and well presented looks exactly like the pictures. The host is a great host and was available on call if we needed anything.',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 4,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u105',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r105',
//                             rate: 4,
//                             txt: 'Very nice apartment. Excellent location and great hosting ',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u106',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r106',
//                             rate: 4,
//                             txt: 'Really enjoyed this modern flat, in such a great location. Would definitely stay again!',
//                             category: {
//                                 Cleanliness: 4.5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 4,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u107',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                     ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's104',
//                     createdAt: 20180203073000,
//                     name: 'London Bridge',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304311/London/pexels-connor-danylenko-3075532_ulswcp.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302846/beds/bed12_e3gt9v.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307272/bathroom/pexels-monstera-6621052_1_nt7sev.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351955/desk/pexels-hristo-sahatchiev-821357_crvrkz.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351828/desk/pexels-natasha-fernandez-811575_bcfhuz.jpg',
//                     ],
//                     price: 120.0,
//                     summary: 'Private room in residential home.',
//                     capacity: 2,
//                     bedrooms: 1,
//                     beds: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         // "Wifi",
//                         'Kitchen',
//                         'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'London',
//                         address: 'London Bridge, London, UK',
//                         lng: -0.08765,
//                         lat: 51.5097,
//                     },
//                     reviews: [
//                         {
//                             id: 'r101',
//                             rate: 5,
//                             txt: 'We had a fabulous stay. The host was on hand for anything we needed, met us on arrival and kindly carried out bags up to the apartment. Would highly recommend and will definitely stay again.',
//                             category: {
//                                 Cleanliness: 5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 5,
//                                 Accessibility: 4.5,
//                             },

//                             by: {
//                                 _id: 'u102',
//                                 fullname: 'user2',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r102',
//                             rate: 4,
//                             txt: 'The place was very clean and comfortable! Great location right next to the subway! Better to see the city on foot! Check in was quick and easy. I would definitely stay here again in the future!',
//                             category: {
//                                 Cleanliness: 4.5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 5,
//                                 'Check-in': 4,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u103',
//                                 fullname: 'user3',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r103',
//                             rate: 4.5,
//                             txt: 'The host was an incredible, responsive host and her cosy flat was absolutely perfect. From being greeted with her adorable puppy, to near-immediate responses to our questions, this stay was pretty much perfect. The location and value are unbeatable.',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u104',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r104',
//                             rate: 4,
//                             txt: 'The flat was in a nice area to see the London sites, and right next to an underground station. I’d recommend staying there.',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u105',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r105',
//                             rate: 4,
//                             txt: 'The place itself was very comfortable and the location was incredible, right next to the tube station and very easy to travel anywhere. Also, the pub next door was really good and had amazing fish and chips!',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u106',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r106',
//                             rate: 4,
//                             txt: 'Great place. Would stay again. Thanks!',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u107',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                     ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's105',
//                     createdAt: 20180203072000,
//                     name: 'Boutique studio in downtown',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304278/London/pexels-daria-shevtsova-3326213_hwgyif.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302846/beds/bed14_h9be8a.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307243/bathroom/pexels-deeana-arts-2534572_f9kmq3.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351899/desk/pexels-pixabay-265004_rqjuru.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg',
//                     ],
//                     price: 170.0,
//                     summary:
//                         'This brand new modern high quality studio apartment is in the very heart of downtown Budapest.',
//                     capacity: 2,
//                     bedroom: 1,
//                     beds: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // "Smoking allowed",
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Budapest',
//                         address: 'Budapest, Hungary',
//                         lng: 19.236,
//                         lat: 47.4964,
//                     },
//                     reviews: [
//                         {
//                             id: 'r101',
//                             rate: 5,
//                             txt: 'Excellent value and location. The apartment is not so big but big enough for two people. Big plus for the coffee machine with the extra capsules :)',
//                             category: {
//                                 Cleanliness: 5,
//                                 Accuracy: 4,
//                                 Communication: 4.5,
//                                 Location: 4,
//                                 'Check-in': 5,
//                                 Accessibility: 4.5,
//                             },

//                             by: {
//                                 _id: 'u102',
//                                 fullname: 'user2',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r102',
//                             rate: 4,
//                             txt: 'Easy going place, very good access, very quiet, and comfortable',
//                             category: {
//                                 Cleanliness: 4.5,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4.5,
//                                 'Check-in': 4,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u103',
//                                 fullname: 'user3',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r103',
//                             rate: 4,
//                             txt: 'Situated in the centre of exactly where you want to be to explore Budapest. Great places for the evening all around but apartment very quiet surprisingly. Would definitely recommend!',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u104',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r104',
//                             rate: 4,
//                             txt: 'Nice apartment, easy communication, perfect location in the centre of Budapest. Highly recommended!',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 3.5,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 4,
//                             },
//                             by: {
//                                 _id: 'u105',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r105',
//                             rate: 3.5,
//                             txt: 'The place very near the centre, comfortable and big.In the building they are doing renovation works, but it is ok.',
//                             category: {
//                                 Cleanliness: 3.5,
//                                 Accuracy: 4,
//                                 Communication: 3.5,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u106',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                         {
//                             id: 'r106',
//                             rate: 4,
//                             txt: 'Apartment is close to everything (walking distance) to great bars, food places etc.',
//                             category: {
//                                 Cleanliness: 4,
//                                 Accuracy: 4,
//                                 Communication: 4,
//                                 Location: 4,
//                                 'Check-in': 3.5,
//                                 Accessibility: 3.5,
//                             },
//                             by: {
//                                 _id: 'u107',
//                                 fullname: 'user32',
//                                 imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                             },
//                         },
//                     ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's106',
//                     createdAt: 20180203072000,
//                     name: 'Buda Castle',
//                     type: 'castle',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306588/castle/pexels-vadim-lu-6288487_qegvna.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg',
//                     ],
//                     price: 156,
//                     summary:
//                         'A unique structure during the Crusader rule in the 11th century',
//                     capacity: 4,
//                     bedroom: 1,
//                     beds: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         // 'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Budapest',
//                         address: 'Budapest, Hungary',
//                         lng: 19.236,
//                         lat: 47.4964,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'This place is awesome! What a gem in the middle of the Castle district. I would stay here again.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4.5,
//                               'Check-in': 5,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Perfect place to stay for a few weeks/months. I really enjoyed my stay. The location is amazing.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Absolutely wonderful place to stay! Perfect location and very clean apartment! Everything you need for great time in Budapest!.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Great hospitality and amazing location. Highly recommended!.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4,
//                           txt: 'Wonderful place. Carefully considered. And helpful. Just be very careful you don’t drop your keys by the front door as they will disappear into the cellar. Yep I did that.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Very nice and clean Apartment. Great location. Good price. Friendly hosts. All in all it was a very nice experience..',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's107',
//                     createdAt: 20180203072000,
//                     name: 'Koko Castle',
//                     type: 'castle',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306561/castle/pexels-mike-112284_ixuqaj.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg',
//                     ],
//                     price: 100.0,
//                     summary:
//                         'A unique structure during the Crusader rule in the 11th century',
//                     capacity: 2,
//                     bedroom: 1,
//                     bed: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Budapest',
//                         address: 'Budapest, Hungary',
//                         lng: 19.236,
//                         lat: 47.4964,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Exactly as pictured and described. Great location (if you prefer to be away from the busy area but still close enough to go there), the jacuzzi was great and the lights are a really cool touch. Very private and quiet!',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4.5,
//                               'Check-in': 5,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Very nice place, well furnished, warm and silent. The bed is comfortable and the jacuzzi is a great plus. The position is very good. The host is very kind.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4.5,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Great host, really helpful with all your needs. Plus price/quality of the apartment is amazing.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Fantastic place with unique atmosphere and services, will definitely come back.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4,
//                           txt: 'What an amazing apartment!!! Facilities and cleanliness were excellent and nothing was too much trouble for the host she helped create a perfect stay.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 3.5,
//                           txt: 'Amazing contact in the build up and throughout our stay. Great location with a metro just 5 mins walk away. Very quiet. Loved the jacuzzi. And lived Budapest!.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's108',
//                     createdAt: 20180203072000,
//                     name: 'Dodo Castle',
//                     type: 'castle',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306550/castle/pexels-mike-van-schoonderwalt-5483723_xlzijh.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg',
//                     ],
//                     price: 100.0,
//                     summary:
//                         'A unique structure during the Crusader rule in the 11th century',
//                     capacity: 5,
//                     bedroom: 2,
//                     bed: 3,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         // 'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Budapest',
//                         address: 'Budapest, Hungary',
//                         lng: 19.236,
//                         lat: 47.4964,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'It is a really cool apartment, very comfy & great design. We loved to stay there. It’s very close to the subway station. It’s very easy to get around by bike & tram.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 5,
//                               'Check-in': 5,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Perfect place, quiet. Owners are very helpful and they respond quickly. Had a great time!.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4.5,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Everything was just GREAT!!! Super friendly, the place looks as good as the pictures indicate, it was easy to get to the city center by foot or by bus we had a great time!.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'This place always gem been there 3 times you really feel home you will just love it , the owner is friendly professional and very helpful in case of any issue I highly recommended , big full of space clean and full of light.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4,
//                           txt: 'One of the best place I’ve been in Budapest the service the management and communication everything is on top very high recommendation.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 3.5,
//                           txt: 'Good location, quiet, clean, comfortable, stylish! Thanks for quick responses!.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's109',
//                     createdAt: 20180203072000,
//                     name: 'Buda Boat',
//                     type: 'houseboat',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305160/boats/pexels-pok-rie-249024_oj83pi.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305186/boats/pexels-daria-shevtsova-6844404_npkovc.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305163/boats/pexels-olga-lioncat-7245201_gjncsp.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305216/boats/pexels-dylan-bueltel-5233236_zfsdx4.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305189/boats/pexels-michal-lizuch-2882761_qqz7xm.jpg',
//                     ],
//                     price: 100.0,
//                     summary: 'A boat house on the Danube River',
//                     capacity: 2,
//                     bedroom: 2,
//                     bed: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         // 'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Budapest',
//                         address: 'Budapest, Hungary',
//                         lng: 19.116,
//                         lat: 47.6433,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'It was easy and very close to the local tram/metro. Nothing fancy, but had everything I needed and very comfortable space..',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 5,
//                               'Check-in': 5,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Excellent location,Walking distance to most attractions.safe and quiet.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Home is amazing, excellent location and a supreme host. Will stay here again in the future..',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'We spent a great time there!, the location is perfect and there are all services and transportation near the apartment..',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4,
//                           txt: 'The accommodation is very clean and quiet, and the location is excellent if you have a preference for Budapest’s “Montmartre” area..',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 3.5,
//                           txt: 'Such a amazing place to stay, it is very close to Buda Castle and to the metro station, easy access to the city centre.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's110',
//                     createdAt: 20180203072000,
//                     name: 'Beautiful Paris',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307321/Paris/pexels-taryn-elliott-4112236_b2rmym.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307307/Paris/pexels-evgenia-basyrova-5028910_nuvtbo.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302885/beds/bed3_o5ulld.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307294/bathroom/pexels-max-vakhtbovych-6265831_yy2w5q.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351955/desk/pexels-hristo-sahatchiev-821357_crvrkz.jpg',
//                     ],
//                     price: 100.0,
//                     summary: 'Studio apartment in central Paris',
//                     capacity: 2,
//                     bedroom: 1,
//                     bed: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Paris',
//                         address: 'Paris, France',
//                         lng: 2.3648,
//                         lat: 48.8629,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Nice cute place with lots of sunlight.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Great apartment! Great host! A little far from the city center but if that\'s ok with you, this is a great place to stay.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'The apartment was perfect. The only bad thing was the flat has not lift.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 2.5,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'We really enjoyed our stay and found the metro to be close by. Extra bonus was the beautiful piano which really adds to the listing.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4,
//                           txt: 'Nice cute place with lots of sunlight.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 3.5,
//                           txt: 'Cosy apartment close to metro station. Everything is present to make you feel welcome and at home.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's111',
//                     createdAt: 20180203072000,
//                     name: 'Holiday Castle',
//                     type: 'castle',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306522/castle/pexels-bruna-noronha-6270891_vasbpu.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306530/castle/pexels-jensen-r-1381729_cx2cet.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg',
//                     ],
//                     price: 150.0,
//                     summary: 'A castle from the 16th century near Paris',
//                     capacity: 4,
//                     bedroom: 2,
//                     bed: 3,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Paris',
//                         address: 'Paris, France',
//                         lng: 2.3648,
//                         lat: 48.8629,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Exactly as described! Just remember that it is on the top floor with no elevator and it’s shared. A great place to stay on a budget!',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Very cute room! Amazing view and very nice flat, we really enjoyed our stay here.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'I had a really good time in the apartment. Hard to find a better deal in an apartment high up.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Location is great, the view from the room is amazing and it\'s clean.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'Flexible and nice host. The place is just around the corner from Gare de l\'est.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Nice guy and roommates. Great location and got some great tips.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's112',
//                     createdAt: 20180203072000,
//                     name: 'Mudy Castle',
//                     type: 'castle',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306500/castle/pexels-ryan-smith-955731_g6rzxo.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306530/castle/pexels-jensen-r-1381729_cx2cet.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306504/castle/pexels-ioana-motoc-7521473_f4vys7.jpg',
//                     ],
//                     price: 350.0,
//                     summary: 'A castle from the 17th century near Paris',
//                     capacity: 2,
//                     bedroom: 1,
//                     bed: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Paris',
//                         address: 'Paris, France',
//                         lng: 2.3648,
//                         lat: 48.8629,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Cozy apartment in a perfect location next to the Eiffel Tower!',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'The apartment has the perfect location. We were impressed. Only 10 minutes to the Eiffel Tower and great cafes and restaurants everywhere. ',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Great place to stay in the 7th arrondissement of paris. Well connected, 5 min walk to the Eiffel tower. Stylish apartment and responsive host. Check in was easy. Would stay again.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Very clean and the location is a pretty good, but not exactly close to a metro. Make sure to reach out to the host early to get the check-in instructions.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'It was a great place. It was nice, clean, and spacious. The building also had no elevator.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'The house was very clean, had everything we needed, Super recommended!!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's113',
//                     createdAt: 20180203072000,
//                     name: 'Life in Paris',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307304/Paris/pexels-leah-kelley-952586_n07jss.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-john-tekeridis-1428348_ecxyee.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302854/beds/bed23_ouue4q.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307591/kitchen/pexels-cleyder-duque-3637739_rxabep.jpg',
//                     ],
//                     price: 100.0,
//                     summary: 'Boutique apartment in Paris',
//                     capacity: 4,
//                     bedroom: 1,
//                     bed: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Paris',
//                         address: 'Paris, France',
//                         lng: 2.3648,
//                         lat: 48.8629,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'This apartment is cozy, clean and bright. We enjoyed our stay here, especially the one minute walk to the bakery.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Cool place, very comfortable! Close to the metro station, there is a bus station just around the corner and the bus takes you directly to the center of Paris!.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'The apartment is small, but very cozy and clean. we stayed with a family of four and had a wonderful time in Paris. we would definitely stay here again!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Very clean and the location is a pretty good, but not exactly close to a metro. Make sure to reach out to the host early to get the check-in instructions.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'Nice just outside of the center of Paris. Good communication.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Was a lovely apartment in a nice chilled area. Very close to shopping mall and not far to metro/bus stop.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's114',
//                     createdAt: 20180203072000,
//                     name: 'Life in New York',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304898/New%20York/pexels-max-vakhtbovych-7195534_mqb90n.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304818/New%20York/pexels-vecislavas-popa-3741317_pyvurg.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304811/New%20York/pexels-pixabay-271618_aqep0f.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304809/New%20York/pexels-rachel-claire-4857776_cbf5s0.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304803/New%20York/pexels-max-vakhtbovych-6180668_zneax0.jpg',
//                     ],
//                     price: 140.0,
//                     summary: 'Boutique apartment in New York',
//                     capacity: 4,
//                     bedroom: 1,
//                     bed: 3,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         // 'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'New York',
//                         address: 'New York, USA',
//                         lng: -73.9611,
//                         lat: 40.7817,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'the location was awesome, felt safe in the area. nice & spacious for an apartment right near times square! would definitely stay here again :) wonderfully priced as well.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'This place is within walking distance of so many places ! Also, it\'s located on a street that\'s not too too busy, so getting an uber is absolutely no problem at all.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'The apartment is very spacious and conveniently located. It was an excellent location for what we needed.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Thank you for the opportunity to stay at your lovely place and explore NYC!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'We enjoyed staying here. Nothing fancy but definitely worth it for the price. Would definitely stay here again',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'excellent location, and great hosts. would recommend to anyone looking to get the most out of visiting the city.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's115',
//                     createdAt: 20180203072000,
//                     name: 'My Quiet Place',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304886/New%20York/pexels-max-vakhtbovych-6969866_pajfoi.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304882/New%20York/pexels-max-vakhtbovych-7195598_dpjlgw.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302869/beds/bed8_ldjo3u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307258/bathroom/pexels-max-vakhtbovych-6296924_wwntde.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg',
//                     ],
//                     price: 120.0,
//                     summary: 'Quiet apartment in New York',
//                     capacity: 3,
//                     bedroom: 2,
//                     bed: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'New York',
//                         address: 'New York, USA',
//                         lng: -73.9611,
//                         lat: 40.7817,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'This place was perfect for my stay. I was in town on a work trip and it gave me the privacy and amenities I needed.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'If you need somewhere to stay outside the city, this is the place to go.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'The place is clean, easy to access, very quiet and independent.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'The place was spotless better than the pictures. Small and intimate, yet spacious enough for a couple.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'Close to Times Square, Central Park, grocery stores and restaurants.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Apartment is clean and modern and at a great price point. Apartment was even better than the pictures which normally is not the case.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's116',
//                     createdAt: 20180203072000,
//                     name: 'Life-style in New York',
//                     type: 'Entire luxe unit',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307307/Paris/pexels-maria-orlova-4916534_jyewl6.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307304/Paris/pexels-deeana-arts-2565222_tvdeyy.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307307/Paris/pexels-evgenia-basyrova-5028910_nuvtbo.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307305/Paris/pexels-maria-orlova-4906510_djw0kr.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307282/bathroom/pexels-jonathan-borba-3101547_lxpln7.jpg',
//                     ],
//                     price: 380,
//                     summary:
//                         'Two bedroom apartment with high ceilings and hardwood floors available in a new mid-rise building. This well-maintained elevator building is located in Midtown West, one of the most convenient neighborhoods in all of Manhattan.',
//                     capacity: 4,
//                     bedroom: 2,
//                     bed: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'New York',
//                         address: 'New York, USA',
//                         lng: -73.9611,
//                         lat: 40.7817,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Good location as a base to explore New York, would definitely recommend!',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Well located apartment a short walk to Times Square and close to countless restaurants.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'The apartment is greeeeeat, amazing and the neighborhood lovely. It’s perfect. ',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Great hosts and place to stay!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'The place was very clean. We loved how close it was to the subway.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Thank you so much for hosting. Will definitely book again when I’m back in NY.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's117',
//                     createdAt: 20180203072000,
//                     name: 'New York Castle',
//                     type: 'castle',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306506/castle/pexels-kylene-hashimoto-1334441_u1ixgr.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg',
//                     ],
//                     price: 250,
//                     summary: 'This newly renovated, former in-law suite is completely separate from our main house. It has its own private, lockable entrance, separate from the main house, with self check-in.',
//                     capacity: 2,
//                     bedroom: 1,
//                     bed: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         // 'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'New York',
//                         address: 'New York, USA',
//                         lng: -73.9611,
//                         lat: 40.7817,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Beautiful home, very comfortable, extremely attentive hosts. Would definitely stay again.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Great location and great hosts! Had a great time. Thanks guys!',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Very conveniently located a few minutes walk from main street in a quiet residential area. Tons of thoughtful touches like the cozy electric fireplace that greeted us. Highly recommend!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Beautiful place. Steps from the town. Even bigger than it looks in photos!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'This place is sparkling clean, has a great bed, a very good shower, and is quiet and private. A good place to stay!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'we had a great experience. great location. the space is beautiful and clean. the bed is very comfortable. the backyard garden is also very delightful.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's118',
//                     createdAt: 20180203080000,
//                     name: 'Holy City',
//                     type: 'castle',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306503/castle/pexels-super-claudioo-6697718_lxbsuh.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg',
//                     ],
//                     price: 205,
//                     summary: 'Located 20 minutes from the old city,in a very nice neighborhood with a lot of shopping and restaurant',
//                     capacity: 2,
//                     bedroom: 1,
//                     bed: 1,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Jerusalem',
//                         address: 'Jerusalem, Israel',
//                         lng: 35.233,
//                         lat: 31.7779,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Very nice place! Just what I needed. Great location. Very good communication. Would love to stay again.',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Great location and great hosts! Had a great time. Thanks guys!',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Place was amazing, so clean and easy to talk to host! Would definitely recommend. it is an ideal location for jerusalem!!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Perfect location for our stay in Jerusalem! The host was very responsive and provided great local tips.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'I\'ve stayed here twice now, and every time it\'s a haven while I\'m busy! I love the space and the kitchen is perfect!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Great location. Simple and fun. Clean. Comfortable. A very good starter kit about areas around.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's119',
//                     createdAt: 20180203080000,
//                     name: 'Palace of David',
//                     type: 'Luxe',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307305/Paris/pexels-maria-orlova-4906510_djw0kr.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-john-tekeridis-1428348_ecxyee.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302854/beds/bed23_ouue4q.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307591/kitchen/pexels-cleyder-duque-3637739_rxabep.jpg',
//                     ],
//                     price: 280,
//                     summary:
//                         'Located 20 minutes from the old city,in a very nice neighborhood with a lot of shopping and restaurant',
//                     capacity: 3,
//                     bedroom: 2,
//                     bed: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Jerusalem',
//                         address: 'Jerusalem, Israel',
//                         lng: 35.233,
//                         lat: 31.7779,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Such an amazing host! And the stay is pretty cozy',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Extremely convenient location, very easy to interact with airbnb representative who is extremely responsive, parking a car might be problematic',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Very clean, comfortable. Very quiet. Simple but fully adequate for a short stay in Jerusalem. Great location just off Emek Refaim.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Perfect location for our stay in Jerusalem! The host was very responsive and provided great local tips.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'A cute little place in a great location. The host was very nice and responsive. Easy check in ad free parking close by. I recommend',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'small comfortable place, wonderful location.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's120',
//                     createdAt: 20180203080000,
//                     name: 'Palace of Solomon',
//                     type: 'Luxe',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307298/Paris/pexels-pixabay-53464_aoqprv.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304882/New%20York/pexels-max-vakhtbovych-7195598_dpjlgw.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302869/beds/bed8_ldjo3u.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307258/bathroom/pexels-max-vakhtbovych-6296924_wwntde.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg',
//                     ],
//                     price: 269,
//                     summary:
//                         'An interior designed modern and sunny 2 bedrooms Luxurious holiday apartment in the center of Jerusalem.',
//                     capacity: 4,
//                     bedroom: 2,
//                     bed: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         // 'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Jerusalem',
//                         address: 'Jerusalem, Israel',
//                         lng: 35.233,
//                         lat: 31.7779,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'Excellent apartment and location! Very clean',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'Lovely, spacious and well thought out apartment. Had everything we needed in a wonderfully quiet and serene neighborhood.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Beautiful place, nice open living room area, lots of sunlight. Modern and clean. Responsive communication. Recommended!',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Perfect location for our stay in Jerusalem! The host was very responsive and provided great local tips.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'The apartment was exactly as shown in the pictures and great host. That was much appreciated.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Very clean modern apartment. Ex Ellen location. Quiet, sunny.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//                 {
//                     _id: 's121',
//                     createdAt: 20180203080000,
//                     name: 'Life in the Holy City',
//                     type: 'Apartment',
//                     imgUrls: [
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307304/Paris/pexels-deeana-arts-2565222_tvdeyy.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302846/beds/bed14_h9be8a.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307243/bathroom/pexels-deeana-arts-2534572_f9kmq3.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351899/desk/pexels-pixabay-265004_rqjuru.jpg',
//                         'https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg',
//                     ],
//                     price: 240,
//                     summary: 'Boutique apartment in the old city of Jerusalem. Everything is right outside your door- shops, restaurants, and nightlife. The train is 2 minutes walk, and everything is within a walking distance.',
//                     capacity: 2,
//                     bedroom: 1,
//                     bed: 2,
//                     bath: 1,
//                     amenities: [
//                         'TV',
//                         'Wifi',
//                         'Kitchen',
//                         'Smoking allowed',
//                         'Pets allowed',
//                     ],
//                     host: {
//                         _id: 'u101',
//                         fullname: 'Davit Pok',
//                         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                     },
//                     loc: {
//                         city: 'Jerusalem',
//                         address: 'Jerusalem, Israel',
//                         lng: 35.233,
//                         lat: 31.7779,
//                     },
//                     reviews: [
//                       {
//                           id: 'r101',
//                           rate: 5,
//                           txt: 'wonderful place, amazing view and balcony. Thank you!',
//                           category: {
//                               Cleanliness: 5,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4.5,
//                           },

//                           by: {
//                               _id: 'u102',
//                               fullname: 'user2',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r102',
//                           rate: 4,
//                           txt: 'if you want to be in the heart of town, this is the place.',
//                           category: {
//                               Cleanliness: 4.5,
//                               Accuracy: 4,
//                               Communication: 4.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u103',
//                               fullname: 'user3',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r103',
//                           rate: 4,
//                           txt: 'Amazing place to stay. The parking, location and apartment is even better than advertised.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u104',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r104',
//                           rate: 4,
//                           txt: 'Comfortable bed. Great location with walking distance to Old City and Mahane Yehuda.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 3.5,
//                               Communication: 4,
//                               Location: 4,
//                               'Check-in': 3.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u105',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r105',
//                           rate: 4.5,
//                           txt: 'Great central location. The place is clean and comfortable. It was a great experience.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 3.5,
//                               Location: 4,
//                               'Check-in': 4,
//                               Accessibility: 3.5,
//                           },
//                           by: {
//                               _id: 'u106',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                       {
//                           id: 'r106',
//                           rate: 4,
//                           txt: 'Amazing place with a great view. Highly recommend.',
//                           category: {
//                               Cleanliness: 4,
//                               Accuracy: 4,
//                               Communication: 5,
//                               Location: 4,
//                               'Check-in': 4.5,
//                               Accessibility: 4,
//                           },
//                           by: {
//                               _id: 'u107',
//                               fullname: 'user32',
//                               imgUrl: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
//                           },
//                       },
//                   ],
//                     likedByUsers: [
//                         {
//                             _id: 'u101',
//                             fullname: 'Davit Pok',
//                             imgUrl: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
//                         },
//                     ],
//                 },
//             ];

//             await storageService.postMany(STAY_KEY, stays);
//         }
//         return stays;
//     } catch (err) {
//         console.log(err, 'error in createStays');
//     }
// }

async function getById(stayId) {
    // const stay = await storageService.get(STAY_KEY, stayId);
    // // const user = await httpService.get(`user/${stayId}`)
    // return stay;
    try {
      const res = await axios.get(STAY_URL + stayId)
      return res.data;
    }
    catch (err) {
      console.log(err)
      throw err;
    }
}
