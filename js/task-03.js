const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.querySelector('#gallery');

// images.forEach(item => {
//     const list = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = item.url;
//     img.alt = item.alt;
//     img.style.width = '500px';
//     list.append(img);
//     gallery.append(list);
// });

gallery.insertAdjacentHTML('afterbegin',
    images.map(img => `<li><img src='${img.url}' alt='${img.alt}' width = '500'></li>`).join(''));


