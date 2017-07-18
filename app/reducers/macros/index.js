// import { UPDATE_MACRO } from '../../actions';
// import { reconcileMacros } from '../../services/MacroService';

const initialState = {
  proteins: [
    {
      name:   'Sirloin Steak',
      image:  'http://www.omahasteaks.com/gifs/recipes/390x250/ts022.jpg',
      amt:    '4 oz',
      count:   0,
      pgrams:  20,
      fgrams:  14,
      cgrams:  0,
    },
    {
      name:   'NY Strip Steak',
      image:  'http://cdn.snakeriverfarms.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/k/akb_stk_nys_p01_35823_sf2.jpg',
      amt:    '5 oz',
      count:   0,
      pgrams:  40,
      fgrams:  13,
      cgrams:  0,
    },
    {
      name:   'Rib Eye',
      image:  'https://cdn4.ruled.me/wp-content/uploads/2015/04/reversesearedribeyelong.jpgpork',
      amt:    '8 oz',
      count:   0,
      pgrams:  21,
      fgrams:  19,
      cgrams:  0,
    },
    {
      name:   'Pork Chop',
      image:  'https://static01.nyt.com/images/2014/09/03/dining/porchetta/porchetta-superJumbo-v2.jpgchick',
      amt:    '8',
      count:   0,
      pgrams:  52,
      fgrams:  31,
      cgrams:  0,
    },
    {
      name:   'Chicken Breast',
      image:  'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/1/5/2/KC0808H_Goat-Cheese-and-Herb-Stuffed-Chicken-Breast_s4x3.jpg.rend.hgtvcom.196.147.suffix/1493057955486.jpeg',
      amt:    '1',
      count:   0,
      pgrams:  27,
      fgrams:  5,
      cgrams:  0,
    },
    {
      name:   'Chicken Thigh',
      image:  'http://assets.bonappetit.com/photos/57ae3e611b33404414975c0d/master/w_680,h_454,c_limit/roasted-chicken-thighs-with-lemon-and-oregano.jpg',
      amt:    '4 oz',
      count:   0,
      pgrams:  22,
      fgrams:  5,
      cgrams:  0,
    },
    {
      name:   'Wild Atlantic Salmon',
      image:  'http://s.eatthis-cdn.com/media/images/ext/952594326/pink-salmon.jpg',
      amt:    '3 oz',
      count:   0,
      pgrams:  17,
      fgrams:  6,
      cgrams:  0,
    },
    {
      name:   'Tilapia',
      image:  'http://images.media-allrecipes.com/userphotos/560x315/1101614.jpg',
      amt:    '3 oz',
      count:   0,
      pgrams:  18,
      fgrams:  2,
      cgrams:  0,
    },
    {
      name:   'Ahi Tuna',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
  ],
  fats: [
    {
      name:   'Avocado',
      image:  'https://cdn.authoritynutrition.com/wp-content/uploads/2014/09/avocado-sliced-in-half.jpg',
      amt:    '1 cup',
      count:   0,
      pgrams:  3,
      fgrams:  21,
      cgrams:  12,
    },
    {
      name:   'Peanut Butter',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Almonds',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Walnuts',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Olive Oil',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Coconut Oil',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
  ],
  carbs: [
    {
      name:   'Oatmeal',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Whole Wheat Pasta',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Lentils',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Whole Wheat Bread',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Black Beans',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Quinoa',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Bananas',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    },
    {
      name:   'Sweet Potatoes',
      image:  'http://2.bp.blogspot.com/_UIXOn06Pz70/SELzIOzN4mI/AAAAAAAADU8/S_tRqXJuJmk/s800/Sesame+Crusted+Ahi+Tuna+with+Orange+Teriyaki+Sauce+500.jpg',
      amt:    '6 oz',
      count:   0,
      pgrams:  40,
      fgrams:  1.5,
      cgrams:  0,
    }
  ]
};


function macros(state = initialState, action) {
  console.log('reducer()::state', state);
  console.log('reducer()::action', action);
  const stateCopy = JSON.parse(JSON.stringify(state));

  // if (action.type === UPDATE_MACRO) {
  //   const newState = reconcileMacros(action, state);

  //   stateCopy[action.macro] = action.value;
  // }

  return stateCopy;
}


export default macros;
