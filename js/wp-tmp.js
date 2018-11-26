var block_to_insert;
var container_block; 
var block_to_insert1;
var container_block1; 
var jQuery;

jQuery(document).ready(() => {
block_to_insert = document.createElement('div');
block_to_insert.innerHTML = '<div style="z-index: 20000; position: fixed; bottom: 0; left: 0;"><img src="http://www.nossaempresavirtual.tk/meme.jpg"></div>';
container_block = document.getElementsByClassName('header');
container_block[0].appendChild(block_to_insert);
});

jQuery(document).ready(() => {
block_to_insert1 = document.createElement('div');
block_to_insert1.innerHTML = '<div class="modal-body"><img src="https://dummyimage.com/1400x200/000/fff.png" alt="Image"><div class="image"></div></div></div>';
container_block1 = document.getElementsByClassName('card-product');
for (let i = 0; i <  container_block1.length; i++) {
    container_block1[i].appendChild(block_to_insert1);
}
});
 
 
 
