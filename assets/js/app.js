'use strict';
const render = (root) => {
  root.empty();
};

$( _ => {
  const root = $('.root');
  render(root);
  const wrapper = $('<div class="wrapper"></div>');
  //Append de componentes
  wrapper.append(Header());
  wrapper.append(MovieGrid());

  root.append(wrapper);
});

const state = {
  movies: [],
  selectedMovie:null
}
