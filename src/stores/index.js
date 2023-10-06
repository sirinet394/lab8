import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'GARUDA PRO WIRELESS GAMING MOUSE',
                    price: 700,
                    image: 'https://www.logaworld.com/cdn/shop/products/ThumnailAllproduct-21_1000x.jpg?v=1640688850',
                    titles: 'Garuda Pro wireless is a symmetrical shape and feather light mouse. Its cover is changeable and the height is adjustable to suit everyone’s palm. Garuda Pro wireless comes with both solid and holes covers.'
                },
                {
                    id: 2,
                    name: 'nubwo nm89w',
                    price: 400,
                    image: 'https://th-test-11.slatic.net/p/a08a83a4b8e1fb6616458f1e96cbc3d0.jpg',
                    titles: 'RGB Light Effect, Light up your game desktop in the dark night create an amazing gaming atmosphere at your preference'
                },
                {
                    id: 3,
                    name: 'Logitech G502 hero wireless',
                    price: 1200,
                    image: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-2.png?v=1',
                    titles: 'G502 รุ่นยอดนิยมออกแบบมาเพื่อรวมเข้ากับระบบไร้สาย LIGHTSPEED เกรดโปร เพื่อการเชื่อมต่อที่เร็วพิเศษและน่าเชื่อถือ เซ็นเซอร์ HERO 25K โดดเด่นด้วยการติดตามระดับซับไมครอน ความเข้ากันได้ POWERPLAY เพื่อการชาร์จต่อเนื่องขณะพักและเล่น'
                },
                {
                    id: 4,
                    name: 'rk61 wireless',
                    price: 900,
                    image: 'https://m.media-amazon.com/images/I/61WyVI5McyL._AC_UF1000,1000_QL80_.jpg',
                    titles: 'RK61 รุ่นยอดยินม ขนาดเล็กกระทัดลัดพกพาง่าย เหมาะสมกับการใช้งานนอกสถานที่ และมาพร้อมกับระบบไร้สาย'
                }
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
            //   Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Your item has been updated',
            //     showConfirmButton: false,
            //     timer: 1500
            //   });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
            //   Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Your item has been saved',
            //     showConfirmButton: false,
            //     timer: 1500
            //   });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'Your item has been updated',
                //     showConfirmButton: false,
                //     timer: 1500
                // });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'Your item has been updated',
                //     showConfirmButton: false,
                //     timer: 1500
                // });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'success',
            //   title: 'Your item has been removed',
            //   showConfirmButton: false,
            //   timer: 1500
            // });
        }
        
    },
})