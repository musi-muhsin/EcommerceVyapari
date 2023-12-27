// class MyHeader extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <header class="bg-primary p-3">
//         <div class="desktop d-flex justify-content-between align-items-center d-none d-md-flex">
//             <div class="d-flex align-items-center gap-2 cursor-pointer">
//                 <a id="openProfileSidebtn">
//                   <svg class="" width="24" height="24"   viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
//                     <path  fill="none"   stroke="#fff"  stroke-linecap="round"    stroke-linejoin="round"  stroke-width="1.5"   d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
//                   </svg>
//                 </a>
//                 <div class="logo text-white">
//                    <!-- <img src="{{asset('')}}" alt="" />  -->
//                     Logo
//                 </div>
//               </div>
//               <!-- search  -->
//               <div class="search position-relative">
//                 <svg class="position-absolute icon1" width="15" height="15" viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <path fill="#9ca3af"
//                         d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
//                 </svg>
//                 <input type="text" style="padding:0.6rem 4rem 0.6rem 1.8rem !important" placeholder="Search in Shops"
//                     class="bg-white rounded-2 form-control">
//                 <div class="icons2 d-flex align-items-center position-absolute">
//                     <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <g fill="none" stroke="#2873F0" stroke-width="1.5">
//                             <path
//                                 d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828C5.843 22 7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172C20.5 19.657 20.5 17.771 20.5 14v-3" />
//                             <path d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0L9.5 2Z" />
//                             <path
//                                 d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904l.598-2.99Zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904l-.598-2.99Z" />
//                             <path stroke-linecap="round"
//                                 d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3" />
//                         </g>
//                     </svg>
//                     <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path fill="none" stroke="#9ca3af" stroke-linecap="round" stroke-linejoin="round"
//                             stroke-width="2" d="M12 19V5" />
//                     </svg>
//                     <svg width="19" height="19" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
//                         <g fill="none" fill-rule="evenodd" stroke="#9ca3af" stroke-linecap="round"
//                             stroke-linejoin="round">
//                             <path
//                                 d="m3.5 7.5l7-4l5.992 3.424A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339v-2.802" />
//                             <path d="M9.552 10.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18" />
//                             <path d="m3.5 7.5l7 4l-3 1l-7-4zm7-4l7 4l2-2l-7-4z" />
//                         </g>
//                     </svg>
//                 </div>
//             </div>
    
//             <!-- location  -->
//             <button type="button" data-bs-toggle="modal" data-bs-target="#locationModal" class="location d-flex align-items-center gap-2 bg-transparent border-0">
//                 <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                     <path fill="#ffffff" d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"/>
//                     <circle cx="16" cy="13" r="4" fill="none"/>
//                 </svg>
//                 <div class="d-flex text-start flex-column  ">
//                    <p class="text-white mb-0">Deliver to</p>
//                    <h6 class="text-white mb-0 ">Nilamel, Kollam 691535</h6>
//                 </div>
//             </button>
    
//             <!-- user  -->
//             <div class=" d-flex align-items-center gap-2">
//               <img src="/public/assets/img/user.png" width="30px" alt="">
//                     <h6 class="text-white mb-0 ">Profile</h6>
//             </div>
    
//             <!-- cart  -->
//             <div class="d-flex align-items-center gap-2">
//                 <div class="cartIcon">
//                     <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path fill="#ffffff" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"/>
//                     </svg>
//                     <div class="no">5</div>
//                 </div>
//                 <div class="d-flex flex-column  ">
//                     <p class="text-white mb-0">Deliver to</p>
//                     <h6 class="text-white mb-0 ">Nilamel, Kollam 691535</h6>
//                  </div>
             
//             </div>
            
//         </div>
     
        
//             <nav class="mobile d-flex flex-column  d-md-none ">
//                 <div class="d-flex mb-4  border rounded-3  text-white" id="nav-tab" role="tablist">
//             <button class="nav-link w-100 py-2 rounded-3 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Local Shopping</button>
//             <button class="nav-link w-100 py-2 rounded-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">All India Shopping</button>
//           </div>
//                 <div class="search position-relative">
//                     <svg class="position-absolute icon1" width="15" height="15" viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path fill="#9ca3af"
//                             d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
//                     </svg>
//                     <input type="text" placeholder="Search in Shops"
//                         class="bg-white rounded-2 form-control">
//                     <div class="icons2 d-flex align-items-center position-absolute">
//                         <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <g fill="none" stroke="#2873F0" stroke-width="1.5">
//                                 <path
//                                     d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828C5.843 22 7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172C20.5 19.657 20.5 17.771 20.5 14v-3" />
//                                 <path d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0L9.5 2Z" />
//                                 <path
//                                     d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904l.598-2.99Zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904l-.598-2.99Z" />
//                                 <path stroke-linecap="round"
//                                     d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3" />
//                             </g>
//                         </svg>
//                         <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path fill="none" stroke="#9ca3af" stroke-linecap="round" stroke-linejoin="round"
//                                 stroke-width="2" d="M12 19V5" />
//                         </svg>
//                         <svg width="19" height="19" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
//                             <g fill="none" fill-rule="evenodd" stroke="#9ca3af" stroke-linecap="round"
//                                 stroke-linejoin="round">
//                                 <path
//                                     d="m3.5 7.5l7-4l5.992 3.424A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339v-2.802" />
//                                 <path d="M9.552 10.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18" />
//                                 <path d="m3.5 7.5l7 4l-3 1l-7-4zm7-4l7 4l2-2l-7-4z" />
//                             </g>
//                         </svg>
//                     </div>
//                 </div>
//             </nav>
//     </header>
//         `
//     }
// }

// class locationModal extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <div class="modal fade" id="locationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered">
//           <div class="modal-content">
//               <button type="button" class="btn-close z-3 position-absolute right-0 left-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
//             <div class="modal-body p-4">
//               <h5>Choose Your Location</h5>
//               <p style="font-size: 13px;">Select delivery location to see product availability and delivery options</p>
//              <div class="mb-3 text-primary d-flex align-items-center justify-content-center">
//                 <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <g fill="none" fill-rule="evenodd">
//                         <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/>
//                         <path fill="currentColor" d="M17.553 16.106a1 1 0 0 1 1.283.345l.058.102l2 4a1 1 0 0 1-.765 1.439L20 22H4a1 1 0 0 1-.945-1.328l.05-.12l2-4a1 1 0 0 1 1.836.788l-.047.107L5.618 20h12.764l-1.276-2.553a1 1 0 0 1 .447-1.341ZM12 2a7 7 0 0 1 7 7c0 2.382-1.289 4.317-2.623 5.69a15.721 15.721 0 0 1-2.418 2.008l-.373.246l-.332.209c-.052.031-.102.06-.149.09l-.257.148c-.528.3-1.168.3-1.696 0l-.257-.149l-.31-.189a17.017 17.017 0 0 1-.171-.109l-.373-.246a15.72 15.72 0 0 1-2.418-2.008C6.289 13.317 5 11.382 5 9a7 7 0 0 1 7-7Zm0 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"/>
//                     </g>
//                 </svg>
//                 <p class="mb-0">Nilamel, Kollam, Kerala</p>
//              </div>
//              <div class="row mb-5">
//                 <div class="col-md-6 mb-3">
//                    <select name="" id="" class="form-select">
//                     <option value="">Choose State</option>
//                     <option value="">Option</option>
//                    </select>
//                 </div>
//                 <div class="col-md-6 mb-3">
//                    <select name="" id="" class="form-select">
//                     <option value="">Choose District    </option>
//                     <option value="">Option</option>
//                    </select>
//                 </div>
//                 <div class="col-md-8">
//                     <select id="myDropdown" class="form-control js-states" >
//                         <option value="option1">Option 1</option>
//                         <option value="option2">Option 2</option>
//                         <option value="option3">Option 3</option>
//                     </select>
//                 </div>
//                 <div class="col-md-4">
//                    <button class="btn text-bg-primary w-100 d-flex align-items-center justify-content-center gap-2">
//                     <svg width="17" height="17" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <g fill="none" fill-rule="evenodd">
//                             <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/>
//                             <path fill="currentColor" d="M17.553 16.106a1 1 0 0 1 1.283.345l.058.102l2 4a1 1 0 0 1-.765 1.439L20 22H4a1 1 0 0 1-.945-1.328l.05-.12l2-4a1 1 0 0 1 1.836.788l-.047.107L5.618 20h12.764l-1.276-2.553a1 1 0 0 1 .447-1.341ZM12 2a7 7 0 0 1 7 7c0 2.382-1.289 4.317-2.623 5.69a15.721 15.721 0 0 1-2.418 2.008l-.373.246l-.332.209c-.052.031-.102.06-.149.09l-.257.148c-.528.3-1.168.3-1.696 0l-.257-.149l-.31-.189a17.017 17.017 0 0 1-.171-.109l-.373-.246a15.72 15.72 0 0 1-2.418-2.008C6.289 13.317 5 11.382 5 9a7 7 0 0 1 7-7Zm0 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"/>
//                         </g>
//                     </svg>
//                     Locate
//                    </button>
//                 </div>
//              </div>
             
//              <div>
//                 <p class="text-primary" style="font-size: 13px;">Add a New Address</p>
//              </div>
//              <div class="row">
//                 <div class="col-md-4 my-auto">
//                     <p class="mb-0 text-primary">Enter a Pincode :</p>
//                 </div>
//                 <div class="col-md-4">
//                     <input type="text" class="form-control">
//                 </div>
//                 <div class="col-md-4">
//                     <button class="btn d-flex align-items-center justify-content-center  gap-2 text-bg-primary w-100 ">
//                         <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
//                             <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144a144 144 0 0 0-144-144Zm160 144h40m-400 0h40"/>
//                         </svg>
//                         Autoocate
//                        </button> 
//                 </div>
//              </div>
//             </div>
        
//           </div>
//         </div>
//       </div>
//         `
//     }
// }

// customElements.define('my-header', MyHeader)

// customElements.define('location-modal', locationModal)


