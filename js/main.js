var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'[S`MORE] IPAD平板包',
            imgUrl:'https://shoplineimg.com/625cd9cb8f7c6200691ed3d8/62aafae7d7bd9c0015d7bbf4/2000x.webp?source_format=jpg',
            price:'1290',
            count:'1'
          },
          {
            id:'2',
            itemName:'聖誕款限量公仔(一組兩隻)',
            imgUrl:'https://shoplineimg.com/625cd9cb8f7c6200691ed3d8/6397ec82d2fed200106acc6d/800x.webp?source_format=PNG',
            price:'990',
            count:'2'
          },
          {
            id:'3',
            itemName:'2023 Desk Calendar',
            imgUrl:'https://shoplineimg.com/625cd9cb8f7c6200691ed3d8/635916e3af28470022ec9b84/800x.webp?source_format=JPG',
            price:'599',
            count:'3'
          },
          // {
          //   id:'4',
          //   itemName:'Happy Quokka Pencil Pouch（鉛筆袋）',
          //   imgUrl:'https://shoplineimg.com/625cd9cb8f7c6200691ed3d8/62a86228284aad001e835324/800x.webp?source_format=jpg',
          //   price:'820',
          //   count:'1'
          // },
    ],

        // 購物車
        delivery:60,
        incart: [],

    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }

        //code警視窗//



    },
    computed:{
        countTotal: function () {
        //設定初始金額
        var countTotal = 0;
        // 找購物車裡面全部商品
        for (var i = 0;i<this.itemList.length; i++) {
        // 把每個商品的數量乘上單價
        countTotal += this.itemList[i].count * this.itemList[i].price;
        }
        // 回傳到總金額
        return countTotal;
        },

        totalPrice: function() {
        return this.countTotal + this.delivery;
        }
    }
});